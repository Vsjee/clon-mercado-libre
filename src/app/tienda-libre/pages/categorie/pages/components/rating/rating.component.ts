import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { IRate, IReview } from "src/app/interfaces"
import { MRate } from "src/app/models"

@Component({
  selector: "app-rating",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  @Input() review!: IReview[]
  generalRating: number = 0
  rating: IRate[] = MRate

  constructor() {}

  ngOnInit(): void {
    this.review.forEach((item) => (this.generalRating += item.rating))
    this.generalRating /= this.review.length
  }
}
