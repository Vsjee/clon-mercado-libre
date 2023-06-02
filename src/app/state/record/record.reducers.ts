import { createReducer, on } from "@ngrx/store"
import { RecordState } from "src/app/interfaces/record.interface"
import { addRecordItem, removeRecords } from "./record.actions"
import { getLocalStorage } from "src/app/utilities"

export const localRecordKey = "record"

export const initalState: RecordState = {
  loading: false,
  records: getLocalStorage(localRecordKey),
}

export const recordReducer = createReducer(
  initalState,
  on(addRecordItem, (state, { record }) => ({
    ...state,
    records: [
      ...state.records,
      {
        ...record,
      },
    ],
  })),

  on(removeRecords, (state) => ({
    ...state,
    records: [],
  }))
)

function updateRecord(id: number) {}
