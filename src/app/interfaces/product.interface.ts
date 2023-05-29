export interface IProduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: number
    count: number
  }
  reviews?: IReview[]
}

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

export interface IBarRate {
  rateNumber: number
  starsNumber: number
  percentage: number
}
