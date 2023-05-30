import { ActionReducerMap } from "@ngrx/store"
import { CartState } from "../interfaces/cart.interface"
import { cartReducer } from "./cart/cart.reducers"

export interface AppState {
  cartList: CartState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  cartList: cartReducer,
}
