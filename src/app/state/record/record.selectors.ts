import { createSelector } from "@ngrx/store"
import { AppState } from "../app.state"
import { RecordState } from "src/app/interfaces/record.interface"

export const selectRecordFeature = (state: AppState) => state.recordState

export const selectRecordList = createSelector(
  selectRecordFeature,
  (state: RecordState) => state.records
)

export const selectRecordLoading = createSelector(
  selectRecordFeature,
  (state: RecordState) => state.loading
)
