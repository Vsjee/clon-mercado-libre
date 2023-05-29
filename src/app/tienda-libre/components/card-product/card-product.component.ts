import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"
import { IProduct } from "src/app/interfaces"
import { MProduct } from "src/app/models/product.model"

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"],
})
export class CardProductComponent {
  @Input() product: IProduct = MProduct

  constructor(private router: Router) {}

  detailProduct(): void {
    const category = this.product.category
    const id = this.product.id.toString()
    this.router.navigate([`/categoria/${category}/${id}`])
  }
}
