import { Component } from "@angular/core"

@Component({
  selector: "app-dropdown-model",
  templateUrl: "./dropdown-model.component.html",
  styleUrls: ["./dropdown-model.component.scss"],
})
export class DropdownModelComponent {
  visibleMenu: boolean = true

  constructor() {}

  dropdownMenu(): void {
    this.visibleMenu = !this.visibleMenu
  }
}
