<<<<<<< HEAD
import { Component } from "@angular/core"
=======
import { Component, Input } from "@angular/core"
import { IProduct } from "src/app/interfaces"
>>>>>>> b47183c6dbe8f16de825226fde5d72d351ffd8a3

@Component({
  selector: "app-dropdown-model",
  templateUrl: "./dropdown-model.component.html",
  styleUrls: ["./dropdown-model.component.scss"],
})
export class DropdownModelComponent {
<<<<<<< HEAD
  visibleMenu: boolean = true

  constructor() {}

  dropdownMenu(): void {
    this.visibleMenu = !this.visibleMenu
  }
=======
  @Input() info!: IProduct

  constructor() {}
>>>>>>> b47183c6dbe8f16de825226fde5d72d351ffd8a3
}
