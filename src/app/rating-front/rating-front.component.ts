import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-rating-front",
  templateUrl: "./rating-front.component.html",
  styleUrls: ["./rating-front.component.scss"],
})
export class RatingFrontComponent {
  protected rating = 0;

  @Output()
  private ratingEvent = new EventEmitter<number>();

  protected sendRating() {
    if (this.rating) this.ratingEvent.emit(this.rating);
  }

  protected setRating(rating: number) {
    this.rating = rating;
  }
}
