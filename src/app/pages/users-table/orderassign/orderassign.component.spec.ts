import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderassignComponent } from './orderassign.component';

describe('OrderassignComponent', () => {
  let component: OrderassignComponent;
  let fixture: ComponentFixture<OrderassignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderassignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderassignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
