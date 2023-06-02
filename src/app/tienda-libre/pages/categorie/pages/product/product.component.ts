import { Component, OnInit } from "@angular/core"
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { IProduct, IProductRecord, IReview } from "src/app/interfaces"
import { MProduct } from "src/app/models/product.model"
import { SnackbarService } from "src/app/services"
import { ProductsService } from "src/app/services/products/products.service"
import { ReviewsService } from "src/app/services/reviews/reviews.service"
import {
  AppState,
  addCartItem,
  localCartKey,
  selectCartList,
} from "src/app/state"
import { addRecordItem } from "src/app/state/record/record.actions"
import { localRecordKey } from "src/app/state/record/record.reducers"
import { selectRecordList } from "src/app/state/record/record.selectors"
import { setLocalStorage } from "src/app/utilities/localStorage.util"

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"],
})
export class ProductComponent implements OnInit {
  reviews!: IReview[]
  positiveReviews!: IReview[]
  negativeReviews!: IReview[]

  similarProducts: IProduct[] = []
  product: IProduct = MProduct
  productId!: number

  loading = true

  constructor(
    private snackbarService: SnackbarService,
    private productService: ProductsService,
    private reviewsService: ReviewsService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<AppState>
  ) {
    this.route.paramMap.subscribe(() => this.ngOnInit())
    this.initRoute()
  }

  ngOnInit(): void {
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
    this.setLocalCart()
  }

  addToRecord() {
    const date = new Date()
    const record: IProductRecord = {
      ...this.product,
      times: 1,
      date: date,
    }
    this.store.dispatch(addRecordItem({ record: record }))
    this.setLocalRecord()
  }

  setLocalRecord() {
    this.store.select(selectRecordList).subscribe((data: IProductRecord[]) => {
      setLocalStorage<IProductRecord[]>(localRecordKey, data)
    })
  }

  setLocalCart() {
    this.store.select(selectCartList).subscribe((data: IProduct[]) => {
      setLocalStorage<IProduct[]>(localCartKey, data)
    })
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
      this.initSimilarProducts()
      this.addToRecord()
    })
  }

  initSimilarProducts() {
    this.productService
      .productsByCategory(this.product.category)
      .subscribe((data) => {
        this.similarProducts = data
        console.log(data)
      })
  }
}
