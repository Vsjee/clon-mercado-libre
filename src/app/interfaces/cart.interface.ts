import { IProduct } from "./product.interface"

export interface CartState {
  loading: boolean
  cartList: IProduct[]
}
