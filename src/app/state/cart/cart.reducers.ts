import { createReducer, on } from "@ngrx/store"
import { CartState } from "src/app/interfaces/cart.interface"
import { addCartItem } from "./cart.actions"
import { removeCartItem } from "./cart.actions"

export const initalState: CartState = { loading: false, cartList: [] }

export const cartReducer = createReducer(
  initalState,
  // eslint-disable-next-line @ngrx/on-function-explicit-return-type
  on(addCartItem, (state, { cart }) => ({
    ...state,
    cartList: [
      ...state.cartList,
      {
        ...cart,
      },
    ],
  })),

  on(removeCartItem, (state, { id }) => ({
    ...state,
    cartList: [...state.cartList.filter((item) => item.id !== id)],
  }))
)
