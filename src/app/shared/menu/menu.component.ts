import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { MenuList } from "../../interfaces/menu.interface"
import { CategoryMenuComponent } from "../category-menu/category-menu.component"
import { TiendaLibreRoutingModule } from "src/app/tienda-libre/tienda-libre-routing.module"

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CategoryMenuComponent,
    TiendaLibreRoutingModule
  ],
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"]
})
export class MenuComponent {
  menuList: MenuList[] = [
    {
      name: "Ofertas",
      route: "ofertas"
    },
    {
      name: "Historial",
      route: "historial"
    },
    {
      name: "Supermercado",
      route: "categoria"
    },
    {
      name: "Moda",
      route: "categoria"
    },
    {
      name: "Vender",
      route: "vender"
    },
    {
      name: "Ayuda",
      route: "ayuda"
    }
  ]

  visibleCategory: boolean = false

  closeModal(): void {
    this.visibleCategory = false
  }
}
