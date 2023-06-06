import { Component, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { IProductRecord } from "src/app/interfaces"
import { AppState } from "src/app/state"
import { removeRecords } from "src/app/state/record/record.actions"
import { localRecordKey } from "src/app/state/record/record.reducers"
import { selectRecordList } from "src/app/state/record/record.selectors"
import { removeLocalStorage } from "src/app/utilities"

@Component({
  selector: "app-record",
  templateUrl: "./record.component.html",
  styleUrls: ["./record.component.scss"],
})
export class RecordComponent implements OnInit {
  recordList: IProductRecord[] = []

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectRecordList).subscribe((data: IProductRecord[]) => {
      data.map((item: IProductRecord) => {
        if (this.recordList.some((record) => record.id === item.id)) {
          this.recordList.find((record, i) => {
            if (item.id === record.id) {
              this.recordList[i].times += 1
              this.recordList[i].date = item.date
            }
            return record.id === item.id
          })
        } else {
          this.recordList.push({ ...item })
        }
      })
    })
  }

  removeRecords() {
    this.store.dispatch(removeRecords())
    removeLocalStorage(localRecordKey)
  }

  orderRecordsByDate() {}
}
