import { CommonModule } from "@angular/common"
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core"
import { FormsModule } from "@angular/forms"
import { IProduct } from "src/app/interfaces"
import { FilterPipe } from "src/app/pipes/filter.pipe"
import { ProductsService } from "src/app/services"
import { DetailProductService } from "src/app/services/detailProduct/detail-product.service"

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, FilterPipe],
  selector: "app-global-search",
  templateUrl: "./global-search.component.html",
  styleUrls: ["./global-search.component.scss"],
})
export class GlobalSearchComponent implements OnInit {
  products: IProduct[] = []

  searchText: string = ""

  @ViewChild("searchbar") searchbar?: ElementRef

  constructor(
    private productsService: ProductsService,
    private detailsProductService: DetailProductService
  ) {}

  closeSearchMenu() {
    this.searchText = ""
  }

  detailsProduct(product: IProduct) {
    this.detailsProductService.detailProduct(product)
    this.closeSearchMenu()
  }

  ngOnInit(): void {
    this.productsService.products().subscribe((data: IProduct[]) => {
      this.products = data
    })
  }
}
