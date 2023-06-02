import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"
import { IProduct } from "src/app/interfaces"
import { DetailProductService } from "src/app/services/detailProduct/detail-product.service"
import { TiendaLibreRoutingModule } from "src/app/tienda-libre/tienda-libre-routing.module"

@Component({
  standalone: true,
  imports: [CommonModule, TiendaLibreRoutingModule],
  selector: "app-carousel-item",
  templateUrl: "./carousel-item.component.html",
  styleUrls: ["./carousel-item.component.scss"],
})
export class CarouselItemComponent {
  @Input() product!: IProduct

  constructor(private detailProductService: DetailProductService) {}

  detailProduct(): void {
    this.detailProductService.detailProduct(this.product)
  }
}
