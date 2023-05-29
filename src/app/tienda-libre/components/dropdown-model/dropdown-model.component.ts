import { Component, Input } from "@angular/core"
import { IProduct } from "src/app/interfaces"

@Component({
  selector: "app-dropdown-model",
  templateUrl: "./dropdown-model.component.html",
  styleUrls: ["./dropdown-model.component.scss"],
})
export class DropdownModelComponent {
  @Input() info!: IProduct

  constructor() {}
}
