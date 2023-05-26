import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { IRate, IReview } from "src/app/interfaces"

@Component({
  selector: "app-review",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./review.component.html",
  styleUrls: ["./review.component.scss"],
})
export class ReviewComponent implements OnInit {
  @Input() review!: IReview
  rating: IRate[] = [
    {
      rate: 0,
    },
    {
      rate: 0,
    },
    {
      rate: 0,
    },
    {
      rate: 0,
    },
    {
      rate: 0,
    },
  ]

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.review.rating; i++) {
      this.rating[i].rate = i + 1
    }
  }
}
