import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { IProductRecord } from "src/app/interfaces"

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-record-item",
  templateUrl: "./record-item.component.html",
  styleUrls: ["./record-item.component.scss"],
})
export class RecordItemComponent {
  @Input() record!: IProductRecord

  constructor() {}
}
