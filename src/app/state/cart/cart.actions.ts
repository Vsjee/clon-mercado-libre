import { createAction, props } from "@ngrx/store"
import { IProduct } from "src/app/interfaces"

export const loadCart = createAction("[Cart list] Load cart")

export const addCartItem = createAction(
  "[Cart list] Add cart item success",
  props<{
    cart: IProduct
  }>()
)

export const removeCartItem = createAction(
  "[Cart list] Remove cart item success",
  props<{
    id: number
  }>()
)
