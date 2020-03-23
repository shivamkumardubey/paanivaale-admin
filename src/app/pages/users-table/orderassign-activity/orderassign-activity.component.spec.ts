import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderassignActivityComponent } from './orderassign-activity.component';

describe('OrderassignActivityComponent', () => {
  let component: OrderassignActivityComponent;
  let fixture: ComponentFixture<OrderassignActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderassignActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderassignActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
