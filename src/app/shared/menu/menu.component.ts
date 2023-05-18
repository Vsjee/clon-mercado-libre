import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { MenuList } from '../../interfaces/menu.interface'
import { CategoryMenuComponent } from '../category-menu/category-menu.component'

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoryMenuComponent],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  menuList: MenuList[] = [
    {
      name: 'Ofertas',
      route: ''
    },
    {
      name: 'Historial',
      route: ''
    },
    {
      name: 'Supermercado',
      route: ''
    },
    {
      name: 'Moda',
      route: ''
    },
    {
      name: 'Vender',
      route: ''
    },
    {
      name: 'Ayuda',
      route: ''
    }
  ]

  visibleCategory: boolean = false

  closeModal(): void {
    this.visibleCategory = false;
  }
}
