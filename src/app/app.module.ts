import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingFrontComponent } from './rating-front/rating-front.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingFrontComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
