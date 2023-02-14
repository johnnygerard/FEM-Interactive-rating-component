import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBackComponent } from './rating-back.component';

describe('RatingBackComponent', () => {
  let component: RatingBackComponent;
  let fixture: ComponentFixture<RatingBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingBackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
