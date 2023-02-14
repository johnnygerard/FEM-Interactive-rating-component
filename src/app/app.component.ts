import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  rating = 0;

  setRating(rating: number) {
    this.rating = rating;
  }
}
