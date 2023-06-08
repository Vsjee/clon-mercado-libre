import { Pipe, PipeTransform } from "@angular/core"
import { IFAQ } from "../interfaces/support.interface"

@Pipe({
  name: "faqFilter",
  standalone: true,
})
export class FaqFilterPipe implements PipeTransform {
  transform(items: IFAQ[], searchText: string): IFAQ[] {
    if (!items) return []
    if (!searchText) return items
    searchText = searchText.toLowerCase()
    return items.filter((item) => {
      return item.answer.toLowerCase().includes(searchText)
    })
  }
}
