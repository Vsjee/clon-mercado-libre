import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { TiendaLibreModule } from './tienda-libre/tienda-libre.module';

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, TiendaLibreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
