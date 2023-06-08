import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { DragScrollModule } from "ngx-drag-scroll"

import { FormsModule } from "@angular/forms"

import { MatSnackBarModule } from "@angular/material/snack-bar"
import { CdkAccordionModule } from "@angular/cdk/accordion"

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
import { CarouselItemComponent } from "../shared/carousel-item/carousel-item.component"
import { RecordItemComponent } from "../shared/record-item/record-item.component"
import { RecordComponent } from "./pages/record/record.component"
import { ContactFormComponent } from "./pages/support/components/contact-form/contact-form.component"
import { FaqItemComponent } from "./pages/support/components/faq-item/faq-item.component"
import { SupportComponent } from "./pages/support/support.component"
import { FaqFilterPipe } from "../pipes/faq-filter.pipe"

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ShoppingCartComponent,
    RecordComponent,
    SupportComponent,
  ],
  exports: [HomeComponent],
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
    RecordItemComponent,
    DragScrollModule,
    CarouselItemComponent,
    ContactFormComponent,
    FaqItemComponent,
    CdkAccordionModule,
    FaqFilterPipe,
    FormsModule,
  ],
})
export class TiendaLibreModule {}
