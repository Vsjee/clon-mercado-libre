import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { IProduct } from "src/app/interfaces"
import { Observable } from "rxjs"

@Injectable({
  providedIn: "root",
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  products(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("https://fakestoreapi.com/products")
  }

  productById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(
      `https://fakestoreapi.com/products/${id.toString()}`
    )
  }
}
