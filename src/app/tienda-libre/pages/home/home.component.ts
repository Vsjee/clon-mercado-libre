import { Component, OnInit, OnDestroy } from "@angular/core"
import { IProduct } from "src/app/interfaces"
import { ProductsService } from "src/app/services/products/products.service"

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit, OnDestroy {
  products: IProduct[] = []
  categories = new Set()
  loading: boolean = true

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.products().subscribe((data) => {
      this.products = data
      data.forEach((item) => this.categories.add(item.category))
      this.loading = false
    })
  }

  ngOnDestroy(): void {
    this.productService.products().subscribe().unsubscribe() //* CUAL ES EL FIN DE ESTO? JAJA
  }

  productsByCategory(category: string | unknown): IProduct[] {
    return this.products.filter((item) => item.category === category)
  }
}
