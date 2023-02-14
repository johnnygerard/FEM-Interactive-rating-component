import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingFrontComponent } from './rating-front.component';

describe('RatingFrontComponent', () => {
  let component: RatingFrontComponent;
  let fixture: ComponentFixture<RatingFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
