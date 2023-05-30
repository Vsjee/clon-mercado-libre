import { createSelector } from "@ngrx/store"
import { AppState } from "../app.state"
import { CartState } from "src/app/interfaces/cart.interface"

export const selectCartFeature = (state: AppState) => state.cartList

export const selectCartList = createSelector(
  selectCartFeature,
  (state: CartState) => state.cartList
)

export const selectCartLoading = createSelector(
  selectCartFeature,
  (state: CartState) => state.loading
)
