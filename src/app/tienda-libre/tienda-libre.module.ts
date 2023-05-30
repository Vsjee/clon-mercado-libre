import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { MatSnackBarModule } from "@angular/material/snack-bar"

import { ComponentsModule } from "./components/components.module"
import { MaterialModule } from "../shared/material/material.module"
import { TiendaLibreRoutingModule } from "./tienda-libre-routing.module"

import { HomeComponent } from "./pages/home/home.component"
import { LoadingComponent } from "../shared/loading/loading.component"
import { MenuComponent } from "../shared/menu/menu.component"
import { ProductComponent } from "./pages/categorie/pages/product/product.component"
import { ReviewComponent } from "./pages/categorie/pages/components/review/review.component"
import { RatingComponent } from "./pages/categorie/pages/components/rating/rating.component"
import { CartProductComponent } from "../shared/cart-product/cart-product.component"
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component"

@NgModule({
  declarations: [HomeComponent, ProductComponent, ShoppingCartComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    LoadingComponent,
    MenuComponent,
    MaterialModule,
    TiendaLibreRoutingModule,
    ReviewComponent,
    RatingComponent,
    MatSnackBarModule,
    CartProductComponent,
  ],
  exports: [HomeComponent],
})
export class TiendaLibreModule {}
