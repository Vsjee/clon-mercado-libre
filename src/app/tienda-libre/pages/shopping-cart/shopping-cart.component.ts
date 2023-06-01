import { Component, HostListener, OnInit } from "@angular/core"
import { Store } from "@ngrx/store"
import { IProduct } from "src/app/interfaces"
import { AppState, selectCartList } from "src/app/state"

@Component({
  selector: "app-shopping-cart",
  templateUrl: "./shopping-cart.component.html",
  styleUrls: ["./shopping-cart.component.scss"],
})
export class ShoppingCartComponent implements OnInit {
  cartList: IProduct[] = []
  price: number = 0
  totalPrice: number = 0
  shippingPrice: number = 8.5

  screenWidth: number = window.screen.width

  constructor(private store: Store<AppState>) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: { target: { innerWidth: any } }) {
    this.screenWidth = event.target.innerWidth
  }

  ngOnInit(): void {
    this.store.select(selectCartList).subscribe((state: IProduct[]) => {
      this.cartList = state
      state.forEach((item) => (this.price += item.price))
      this.totalPrice = this.price + this.shippingPrice
    })
  }
}
