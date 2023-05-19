import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Category, DetailCategory } from "../../interfaces/menu.interface"
import { TiendaLibreRoutingModule } from "src/app/tienda-libre/tienda-libre-routing.module"

@Component({
  selector: "app-category-menu",
  standalone: true,
  imports: [CommonModule, TiendaLibreRoutingModule],
  templateUrl: "./category-menu.component.html",
  styleUrls: ["./category-menu.component.scss"]
})
export class CategoryMenuComponent {
  categorys: Category[] = [
    {
      name: "Vehículos",
      route: "categoria"
    },
    {
      name: "Supermercado",
      route: "categoria"
    },
    {
      name: "Tecnología",
      route: "categoria",
      child: true,
      detail: [
        {
          title: "Celulares y Telefonía",
          items: ["Celulares y Smartphones", "Accesorios para Celulares"]
        },
        {
          title: "Cámaras y Accesorios",
          items: ["Accesorios para Cámaras", "Cámaras"]
        },
        {
          title: "Computación",
          items: [
            "Laptops",
            "Tablets y Accesorios",
            "Impresión",
            "Computadoras y Servidores"
          ]
        },
        {
          title: "Electrónica, Audio y Video",
          items: [
            "Accesorios para Audio y Video",
            "Equipos de DJ y Accesorios",
            "Televisores",
            "Audio Portátil y Accesorios"
          ]
        }
      ]
    },
    {
      name: "Electrodomésticos",
      route: "categoria"
    },
    {
      name: "Hogar y Muebles",
      route: "categoria"
    },
    {
      name: "Moda",
      route: "categoria"
    },
    {
      name: "Deportes y Fitness",
      route: "categoria"
    },
    {
      name: "Herramientas",
      route: "categoria"
    },
    {
      name: "Construcción",
      route: "categoria"
    }
  ]

  details: DetailCategory[] = []

  visibleDetail: boolean = false
  detailItem: string = ""

  @Output() closeModal: EventEmitter<any> = new EventEmitter<boolean>()

  constructor() {}

  closePopup(): void {
    this.closeModal.emit(true)
  }

  activateDetail(category: Category): void {
    this.visibleDetail = true
    this.detailItem = category.name
    this.details = category.detail || []
  }
}
