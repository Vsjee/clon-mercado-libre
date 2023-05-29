import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ComponentsModule } from "./components/components.module"
import { MaterialModule } from "../shared/material/material.module"
import { TiendaLibreRoutingModule } from "./tienda-libre-routing.module"


import { HomeComponent } from "./pages/home/home.component"
import { LoadingComponent } from "../shared/loading/loading.component"
import { MenuComponent } from "../shared/menu/menu.component"
import { ProductComponent } from "./pages/categorie/pages/product/product.component"
import { ReviewComponent } from "./pages/categorie/pages/components/review/review.component"
import { RatingComponent } from "./pages/categorie/pages/components/rating/rating.component"


@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LoadingComponent,
    MenuComponent,
    MaterialModule,
    TiendaLibreRoutingModule,
    ReviewComponent,
    RatingComponent,
  ],
  exports: [HomeComponent],
})
export class TiendaLibreModule {}
