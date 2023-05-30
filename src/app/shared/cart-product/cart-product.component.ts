import { Component, Input } from "@angular/core"
import { Store } from "@ngrx/store"
import { IProduct } from "src/app/interfaces"
import { AppState, removeCartItem } from "src/app/state"

@Component({
  standalone: true,
  imports: [],
  selector: "app-cart-product",
  templateUrl: "./cart-product.component.html",
  styleUrls: ["./cart-product.component.scss"],
})
export class CartProductComponent {
  @Input() product!: IProduct

  constructor(private store: Store<AppState>) {}

  deleteProduct(id: number) {
    this.store.dispatch(removeCartItem({ id: id }))
  }
}
