import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewStadisticsComponent } from './review-stadistics.component';

describe('ReviewStadisticsComponent', () => {
  let component: ReviewStadisticsComponent;
  let fixture: ComponentFixture<ReviewStadisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewStadisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewStadisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
