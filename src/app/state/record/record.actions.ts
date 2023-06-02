import { createAction, props } from "@ngrx/store"
import { IProductRecord } from "src/app/interfaces"

export const loadRecord = createAction("[Record list] Load cart")

export const addRecordItem = createAction(
  "[Record list] Add cart item success",
  props<{
    record: IProductRecord
  }>()
)

export const removeRecords = createAction(
  "[Record list] Remove cart item success"
)
