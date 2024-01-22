import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopProcesComponent } from './shop-proces.component';

describe('ShopProcesComponent', () => {
  let component: ShopProcesComponent;
  let fixture: ComponentFixture<ShopProcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopProcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopProcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
