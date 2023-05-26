import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppRoutingModule } from "./app-routing.module"
import { TiendaLibreModule } from "./tienda-libre/tienda-libre.module"

import { AppComponent } from "./app.component"
import { MenuComponent } from "./shared/menu/menu.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiendaLibreModule,
    MenuComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
