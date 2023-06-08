import { Component, Input } from "@angular/core"
import { IFAQ } from "src/app/interfaces/support.interface"

@Component({
  standalone: true,
  imports: [],
  selector: "app-faq-item",
  templateUrl: "./faq-item.component.html",
  styleUrls: ["./faq-item.component.scss"],
})
export class FaqItemComponent {
  @Input() faq!: IFAQ

  constructor() {}
}
