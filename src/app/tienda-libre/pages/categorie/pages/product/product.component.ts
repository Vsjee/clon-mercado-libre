import { Component, OnInit } from "@angular/core"
import { NavigationEnd, Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { IProduct, IReview } from "src/app/interfaces"
import { MProduct } from "src/app/models/product.model"
import { SnackbarService } from "src/app/services"
import { ProductsService } from "src/app/services/products/products.service"
import { ReviewsService } from "src/app/services/reviews/reviews.service"
import { addCartItem } from "src/app/state"

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

  loading = true

  constructor(
    private snackbarService: SnackbarService,
    private productService: ProductsService,
    private reviewsService: ReviewsService,
    private router: Router,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.initRoute()

    this.reviews = this.reviewsService.allReviews
    this.positiveReviews = this.reviewsService.allPositiveReviews
    this.negativeReviews = this.reviewsService.allNegativeReviews

    this.initProduct()

    window.scrollTo(0, 0)
  }

  addToCart() {
    this.store.dispatch(addCartItem({ cart: this.product }))
    this.snackbarService.openSnackBar(
      `Producto ${this.product.title} se añadio al carrito`
    )
  }

  initRoute(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currUrl = event.url.split("/")
        this.productId = Number(currUrl[currUrl.length - 1])
      }
    })
  }

  initProduct() {
    this.productService.productById(this.productId).subscribe((item) => {
      this.product = item
      this.loading = false
    })
  }
}
