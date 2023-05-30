import { Injectable } from "@angular/core"
import { IBarRate, ReviewComment } from "src/app/interfaces"
import { IReview } from "src/app/interfaces"
import { MreviewRateGraph } from "src/app/models"

@Injectable({
  providedIn: "root",
})
export class ReviewsService {
  reviews: IReview[] = [
    {
      type: "Positiva",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 4,
    },
    {
      type: "Positiva",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 3,
    },
    {
      type: "Positiva",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 3,
    },
    {
      type: "Negativa",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 2,
    },
    {
      type: "Negativa",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 2,
    },
    {
      type: "Negativa",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 2,
    },
    {
      type: "Negativa",
      user: "david",
      review: "Buen producto",
      date: "23/05/2023",
      rating: 2,
    },
  ]

  get allReviews(): IReview[] {
    return this.reviews
  }

  get allPositiveReviews(): IReview[] {
    return this.reviews.filter((item) => item.type === ReviewComment.positivo)
  }

  get allNegativeReviews(): IReview[] {
    return this.reviews.filter((item) => item.type === ReviewComment.negativo)
  }

  valide = (property: any) =>
    typeof property === "undefined" || property === null

  get starPercentage(): IBarRate[] {
    let reviewRateGraph: IBarRate[] = MreviewRateGraph

    for (let i = 0; i < this.reviews.length; i++) {
      const currStarsNumber = this.reviews[i].rating - 1

      if (!this.valide(currStarsNumber)) {
        reviewRateGraph[currStarsNumber].starsNumber += 1
      }
    }

    reviewRateGraph.map((item) => {
      const totalPercentage = (item.starsNumber / this.reviews.length) * 100
      item.percentage = Math.round(totalPercentage)
    })

    return reviewRateGraph
  }
}
