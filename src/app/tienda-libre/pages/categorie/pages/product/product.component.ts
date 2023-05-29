import { Component, OnInit } from "@angular/core"
import { NavigationEnd, Router } from "@angular/router"
import { IProduct, IReview } from "src/app/interfaces"
import { MProduct } from "src/app/models/product.model"
import { ProductsService } from "src/app/services/products/products.service"
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

  product: IProduct = MProduct
  productId!: number

  constructor(
    private reviewsService: ReviewsService,
    private productService: ProductsService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currUrl = event.url.split("/")
        this.productId = Number(currUrl[currUrl.length - 1])
        this.initProduct()
      }
    })
  }

  ngOnInit(): void {
    this.reviews = this.reviewsService.allReviews
    this.positiveReviews = this.reviewsService.allPositiveReviews
    this.negativeReviews = this.reviewsService.allNegativeReviews

    window.scrollTo(0, 0)
  }

  initProduct() {
    this.productService.productById(this.productId).subscribe((item) => {
      this.product = item
    })
  }
}
