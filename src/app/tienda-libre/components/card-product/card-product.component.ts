import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"
import { IProduct } from "src/app/interfaces"
import { MProduct } from "src/app/models/product.model"
import { DetailProductService } from "src/app/services/detailProduct/detail-product.service"

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"],
})
export class CardProductComponent {
  @Input() product: IProduct = MProduct

  constructor(private detailProductService: DetailProductService) {}

  detailProduct(): void {
    this.detailProductService.detailProduct(this.product)
  }
}
