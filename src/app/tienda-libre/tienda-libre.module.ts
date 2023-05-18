import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"

import { ComponentsModule } from "./components/components.module"
import { MenuComponent } from "../shared/menu/menu.component"
import { TiendaLibreRoutingModule } from "./tienda-libre-routing.module"

import { HomeComponent } from "./pages/home/home.component"

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    MenuComponent,
    TiendaLibreRoutingModule
  ],
  exports: [HomeComponent]
})
export class TiendaLibreModule {}
