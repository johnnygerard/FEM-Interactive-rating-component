import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingFrontComponent } from './rating-front/rating-front.component';
import { RatingBackComponent } from './rating-back/rating-back.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingFrontComponent,
    RatingBackComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
