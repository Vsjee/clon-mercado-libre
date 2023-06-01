import { Injectable } from "@angular/core"
import { Router } from "@angular/router"
import { IProduct } from "src/app/interfaces"

@Injectable({
  providedIn: "root",
})
export class DetailProductService {
  constructor(private router: Router) {}

  detailProduct(product: IProduct): void {
    const category = product.category
    const id = product.id.toString()
    this.router.navigate([`/categoria/${category}/${id}`])
  }
}
