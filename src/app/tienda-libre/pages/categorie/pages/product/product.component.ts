import { Component, OnInit } from "@angular/core"
import { IReview } from "src/app/interfaces"
import { ReviewsService } from "src/app/services/reviews/reviews.service"

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  reviews!: IReview[]
  positiveReviews!: IReview[]
  negativeReviews!: IReview[]

  constructor(private reviewsService: ReviewsService) {}

  ngOnInit(): void {
    this.reviews = this.reviewsService.allReviews
    this.positiveReviews = this.reviewsService.allPositiveReviews
    this.negativeReviews = this.reviewsService.allNegativeReviews
  }
}
