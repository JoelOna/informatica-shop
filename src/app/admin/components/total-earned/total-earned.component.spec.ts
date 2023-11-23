import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEarnedComponent } from './total-earned.component';

describe('TotalEarnedComponent', () => {
  let component: TotalEarnedComponent;
  let fixture: ComponentFixture<TotalEarnedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalEarnedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalEarnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
