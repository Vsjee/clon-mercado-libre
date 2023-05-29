import { Injectable } from "@angular/core"
import { IBarRate } from "src/app/interfaces"
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
    return this.reviews.filter((item) => item.type === "Positiva")
  }

  get allNegativeReviews(): IReview[] {
    return this.reviews.filter((item) => item.type === "Negativa")
  }

  get starPercentage(): IBarRate[] {
    let reviewRateGraph: IBarRate[] = MreviewRateGraph

    for (let i = 0; i < this.reviews.length; i++) {
      const currStarsNumber = this.reviews[i].rating

      switch (currStarsNumber) {
        case 1:
          reviewRateGraph[0].starsNumber += 1
          break
        case 2:
          reviewRateGraph[1].starsNumber += 1
          break
        case 3:
          reviewRateGraph[2].starsNumber += 1
          break
        case 4:
          reviewRateGraph[3].starsNumber += 1
          break
        case 5:
          reviewRateGraph[4].starsNumber += 1
          break
      }
    }

    reviewRateGraph.map((item) => {
      let totalPercentage = (item.starsNumber / this.reviews.length) * 100
      item.percentage = Math.round(totalPercentage)
    })

    return reviewRateGraph
  }
}
