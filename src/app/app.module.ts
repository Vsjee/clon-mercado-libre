import { NgModule, isDevMode } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { TiendaLibreModule } from "./tienda-libre/tienda-libre.module"

import { AppComponent } from "./app.component"
import { MenuComponent } from "./shared/menu/menu.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { ROOT_REDUCERS } from "./state"

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TiendaLibreModule,
    MenuComponent,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
