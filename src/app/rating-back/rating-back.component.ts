import { Component, Input } from "@angular/core";

@Component({
  selector: "app-rating-back",
  templateUrl: "./rating-back.component.html",
  styleUrls: ["./rating-back.component.scss"],
})
export class RatingBackComponent {
  @Input() rating = 0;
}
