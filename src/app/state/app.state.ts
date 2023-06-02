import { ActionReducerMap } from "@ngrx/store"
import { CartState } from "../interfaces/cart.interface"
import { cartReducer } from "./cart/cart.reducers"
import { RecordState } from "../interfaces/record.interface"
import { recordReducer } from "./record/record.reducers"

export interface AppState {
  cartList: CartState
  recordState: RecordState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  cartList: cartReducer,
  recordState: recordReducer,
}
