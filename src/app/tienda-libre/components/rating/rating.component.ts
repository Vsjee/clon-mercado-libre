import { Component, Input, OnInit } from "@angular/core"

@Component({
  selector: "app-rating",
  templateUrl: "./rating.component.html",
  styleUrls: ["./rating.component.scss"],
})
export class RatingComponent implements OnInit {
  @Input() stars: number = 0
  @Input() value: number = 0

  numStars: number[] = []

  constructor() {}

  ngOnInit(): void {
    this.numStars = Array(this.stars)
  }

  assignStar = (num: number) => {
    if (num + 1 !== this.value && num + 1 < this.value) {
      return "2"
    } else if (num + 1 === this.value) {
      console.log("yes", num)
      return "1"
    } else {
      return "1"
    }
  }
}
