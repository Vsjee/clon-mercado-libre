import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TiendaLibreRoutingModule } from './tienda-libre-routing.module'

import { HomeComponent } from './pages/home/home.component'
import { MenuComponent } from '../shared/menu/menu.component'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, TiendaLibreRoutingModule, MenuComponent],
  exports: [HomeComponent]
})
export class TiendaLibreModule {}
