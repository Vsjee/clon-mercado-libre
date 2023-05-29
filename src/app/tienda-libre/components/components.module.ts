import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CardProductComponent } from "./card-product/card-product.component"
import { BannerComponent } from "./banner/banner.component"
import { DropdownModelComponent } from "./dropdown-model/dropdown-model.component"

@NgModule({
  declarations: [
    BannerComponent,
    CardProductComponent,
    DropdownModelComponent,
  ],
  imports: [CommonModule],
  exports: [
    BannerComponent,
    CardProductComponent,
    DropdownModelComponent,
  ],
})
export class ComponentsModule {}
