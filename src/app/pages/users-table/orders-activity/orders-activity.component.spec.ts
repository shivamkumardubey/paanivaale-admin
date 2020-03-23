import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersActivityComponent } from './orders-activity.component';

describe('OrdersActivityComponent', () => {
  let component: OrdersActivityComponent;
  let fixture: ComponentFixture<OrdersActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
