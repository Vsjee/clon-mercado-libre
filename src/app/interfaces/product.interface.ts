export interface IReview {
  type: string
  user: string
  review: string
  date: Date | string
  rating: number
}

export interface IRate {
  rate: number
}
