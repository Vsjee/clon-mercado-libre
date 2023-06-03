import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { MenuList } from "../../interfaces/menu.interface"
import { CategoryMenuComponent } from "../category-menu/category-menu.component"
import { TiendaLibreRoutingModule } from "src/app/tienda-libre/tienda-libre-routing.module"
import { Store } from "@ngrx/store"
import { AppState, selectCartList } from "src/app/state"
import { IProduct } from "src/app/interfaces"
import { GlobalSearchComponent } from "../global-search/global-search.component"

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CategoryMenuComponent,
    TiendaLibreRoutingModule,
    GlobalSearchComponent,
  ],
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
})
export class MenuComponent {
  menuList: MenuList[] = [
    {
      name: "Ofertas",
      route: "ofertas",
    },
    {
      name: "Historial",
      route: "historial",
    },
    {
      name: "Supermercado",
      route: "categoria",
    },
    {
      name: "Moda",
      route: "categoria",
    },
    {
      name: "Vender",
      route: "vender",
    },
    {
      name: "Ayuda",
      route: "ayuda",
    },
  ]

  cartListSize!: number

  constructor(private store: Store<AppState>) {
    this.store.select(selectCartList).subscribe((item: IProduct[]) => {
      this.cartListSize = item.length
    })
  }

  visibleCategory: boolean = false

  closeModal(): void {
    this.visibleCategory = false
  }
}
