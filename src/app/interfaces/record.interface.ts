import { IProductRecord } from "./product.interface"

export interface RecordState {
  loading: boolean
  records: IProductRecord[]
}
