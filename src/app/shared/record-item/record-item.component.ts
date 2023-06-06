import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { IProductRecord } from "src/app/interfaces"
import { DetailProductService } from "src/app/services/detailProduct/detail-product.service"

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: "app-record-item",
  templateUrl: "./record-item.component.html",
  styleUrls: ["./record-item.component.scss"],
})
export class RecordItemComponent {
  @Input() record!: IProductRecord

  constructor(private detailProductService: DetailProductService) {}

  detailProduct() {
    this.detailProductService.detailProduct(this.record)
  }
}
