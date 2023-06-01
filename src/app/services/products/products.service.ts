import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IProduct } from "src/app/interfaces"
import { Observable } from "rxjs"
import { environment } from "src/environments/environment"

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  readonly baseUrl: string = environment.baseUrl

  constructor(private http: HttpClient) {}

  products(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`${this.baseUrl}/products`)
  }

  productById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.baseUrl}/products/${id.toString()}`)
  }

  productsByCategory(category: string): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(
      `${this.baseUrl}/products/category/${category}`
    )
  }
}
