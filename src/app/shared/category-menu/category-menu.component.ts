import { Component, EventEmitter, OnInit, Output } from "@angular/core"
import { CommonModule } from "@angular/common"
import { Category, DetailCategory } from "../../interfaces/menu.interface"

@Component({
  selector: "app-category-menu",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./category-menu.component.html",
  styleUrls: ["./category-menu.component.scss"]
})
export class CategoryMenuComponent {
  categorys: Category[] = [
    {
      name: "Vehículos"
    },
    {
      name: "Supermercado"
    },
    {
      name: "Tecnología",
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
      name: "Electrodomésticos"
    },
    {
      name: "Hogar y Muebles"
    },
    {
      name: "Moda"
    },
    {
      name: "Deportes y Fitness"
    },
    {
      name: "Herramientas"
    },
    {
      name: "Construcción"
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
