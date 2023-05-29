import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ComponentsModule } from "./components/components.module"
import { MenuComponent } from "../shared/menu/menu.component"
import { TiendaLibreRoutingModule } from "./tienda-libre-routing.module"

import { HomeComponent } from "./pages/home/home.component"
import { ProductComponent } from "./pages/categorie/pages/product/product.component"

import { MatTabsModule } from "@angular/material/tabs"
import { ReviewComponent } from "./pages/categorie/pages/components/review/review.component"
import { RatingComponent } from "./pages/categorie/pages/components/rating/rating.component"

import { MatProgressBarModule } from "@angular/material/progress-bar"

@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MenuComponent,
    TiendaLibreRoutingModule,
    ReviewComponent,
    RatingComponent,
    MatTabsModule,
    MatProgressBarModule,
  ],
  exports: [HomeComponent],
})
export class TiendaLibreModule {}
