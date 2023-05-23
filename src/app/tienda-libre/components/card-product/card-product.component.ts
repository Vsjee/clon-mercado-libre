import { Component } from "@angular/core"
import { Router } from "@angular/router"

@Component({
  selector: "app-card-product",
  templateUrl: "./card-product.component.html",
  styleUrls: ["./card-product.component.scss"],
})
export class CardProductComponent {
  constructor(private router: Router) {}

  detailProduct(): void {
    this.router.navigate(["/categoria/Construcción/d"])
  }
}
