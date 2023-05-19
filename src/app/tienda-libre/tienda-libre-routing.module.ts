import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { HomeComponent } from "./pages/home/home.component"
import { OffersComponent } from "./pages/offers/offers.component"
import { RecordComponent } from "./pages/record/record.component"
import { CategorieComponent } from "./pages/categorie/categorie.component"
import { SellOnThePlatformComponent } from "./pages/sell-on-the-platform/sell-on-the-platform.component"
import { SupportComponent } from "./pages/support/support.component"
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component"

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "ofertas",
        component: OffersComponent
      },
      {
        path: "historial",
        component: RecordComponent
      },
      {
        path: "categoria/:tipo",
        component: CategorieComponent
      },
      {
        path: "vender",
        component: SellOnThePlatformComponent
      },
      {
        path: "ayuda",
        component: SupportComponent
      },
      {
        path: "carrito",
        component: ShoppingCartComponent
      },
      {
        path: "**",
        redirectTo: "home"
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TiendaLibreRoutingModule {}
