import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CardProductComponent } from "./card-product/card-product.component"
import { BannerComponent } from "./banner/banner.component"
import { DropdownModelComponent } from "./dropdown-model/dropdown-model.component"
import { PreviewCartComponent } from "./preview-cart/preview-cart.component"

@NgModule({
  declarations: [
    BannerComponent,
    CardProductComponent,
    DropdownModelComponent,
    PreviewCartComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    CardProductComponent,
    DropdownModelComponent,
    PreviewCartComponent,
  ],
})
export class ComponentsModule {}
