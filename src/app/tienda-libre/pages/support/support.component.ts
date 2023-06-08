import { Component, OnInit } from "@angular/core"
import { IFAQ } from "src/app/interfaces/support.interface"
import { FaqService } from "src/app/services/faq/faq.service"

@Component({
  selector: "app-support",
  templateUrl: "./support.component.html",
  styleUrls: ["./support.component.scss"],
})
export class SupportComponent implements OnInit {
  searchText: string = ""
  items: number[] = [1, 2]
  faqList: IFAQ[] = []

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faqList = this.faqService.faqList
  }
}
