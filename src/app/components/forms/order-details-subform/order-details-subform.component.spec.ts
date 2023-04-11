import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsSubformComponent } from './order-details-subform.component';

describe('OrderDetailsSubformComponent', () => {
  let component: OrderDetailsSubformComponent;
  let fixture: ComponentFixture<OrderDetailsSubformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderDetailsSubformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderDetailsSubformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
