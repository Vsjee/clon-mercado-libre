import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { Router } from "@angular/router"
import { IProduct } from "src/app/interfaces"
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

  constructor(private router: Router) {}

  detailProduct(): void {
    const category = this.product.category
    const id = this.product.id.toString()
    this.router.navigate([`/categoria/${category}/${id}`])
  }
}
