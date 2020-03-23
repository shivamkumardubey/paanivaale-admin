import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryformComponent } from './deliveryform.component';

describe('DeliveryformComponent', () => {
  let component: DeliveryformComponent;
  let fixture: ComponentFixture<DeliveryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
