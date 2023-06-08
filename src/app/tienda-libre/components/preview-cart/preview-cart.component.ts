import { Component, OnInit } from "@angular/core"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { IProduct } from "src/app/interfaces"
import { AppState, selectCartList } from "src/app/state"

@Component({
  selector: "app-preview-cart",
  templateUrl: "./preview-cart.component.html",
  styleUrls: ["./preview-cart.component.scss"],
})
export class PreviewCartComponent implements OnInit {
  lastCartProduct!: IProduct
  totalPrice: number = 0
  cartItemsSize: number = 0

  constructor(private store: Store<AppState>, private router: Router) {}

  goToCart() {
    this.router.navigate(["/carrito"])
  }

  ngOnInit(): void {
    this.store.select(selectCartList).subscribe((data: IProduct[]) => {
      this.lastCartProduct = data[data.length - 1]
      this.cartItemsSize = data.length
      data.forEach((item) => (this.totalPrice += Math.floor(item.price)))
    })
  }
}
