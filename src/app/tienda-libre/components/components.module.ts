import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { CardProductComponent } from "./card-product/card-product.component"
import { BannerComponent } from "./banner/banner.component"

@NgModule({
  declarations: [BannerComponent, CardProductComponent],
  imports: [CommonModule],
  exports: [BannerComponent, CardProductComponent]
})
export class ComponentsModule {}
