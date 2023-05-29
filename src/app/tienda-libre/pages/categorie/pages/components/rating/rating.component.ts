import { CommonModule } from "@angular/common"
import { Component, Input, OnInit } from "@angular/core"
import { MatProgressBarModule } from "@angular/material/progress-bar"
import { IBarRate, IRate, IReview } from "src/app/interfaces"
import { MRate } from "src/app/models"
import { ReviewsService } from "src/app/services/reviews/reviews.service"

@Component({
  selector: "app-rating",
  standalone: true,
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  @Input() review!: IReview[]
  generalRating: number = 0
  rating: IRate[] = MRate
  reviewRateGraph: IBarRate[] = []

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    //general rating
    this.review.forEach((item) => (this.generalRating += item.rating))
    this.generalRating /= this.review.length
    this.generalRating = Number(this.generalRating.toFixed(1))

    //bars rating
    this.reviewRateGraph = this.reviewsService.starPercentage
    console.log(this.reviewRateGraph)
  }
}
