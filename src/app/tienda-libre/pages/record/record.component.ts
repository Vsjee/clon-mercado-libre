import { Component, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { IProductRecord } from "src/app/interfaces"
import { AppState } from "src/app/state"
import { removeRecords } from "src/app/state/record/record.actions"
import { selectRecordList } from "src/app/state/record/record.selectors"

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
      this.recordList = data
    })
  }

  removeRecords() {
    this.store.dispatch(removeRecords())
  }
}
