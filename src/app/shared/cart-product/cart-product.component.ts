import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"
import { Store } from "@ngrx/store"
import { IProduct } from "src/app/interfaces"
import { DetailProductService } from "src/app/services/detailProduct/detail-product.service"
import {
  AppState,
  localCartKey,
  removeCartItem,
  selectCartList,
} from "src/app/state"
import { setLocalStorage } from "src/app/utilities"

@Component({
  standalone: true,
  imports: [],
  selector: "app-cart-product",
  templateUrl: "./cart-product.component.html",
  styleUrls: ["./cart-product.component.scss"],
})
export class CartProductComponent {
  @Input() product!: IProduct

  constructor(
    private detailProductService: DetailProductService,
    private store: Store<AppState>
  ) {}

  deleteProduct(id: number) {
    this.store.dispatch(removeCartItem({ id: id }))
    this.setLocalCart()
  }

  setLocalCart() {
    this.store.select(selectCartList).subscribe((data: IProduct[]) => {
      setLocalStorage<IProduct[]>(localCartKey, data)
    })
  }

  detailProduct(): void {
    this.detailProductService.detailProduct(this.product)
  }
}
