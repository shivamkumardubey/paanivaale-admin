import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainpendingComponent } from './complainpending.component';

describe('ComplainpendingComponent', () => {
  let component: ComplainpendingComponent;
  let fixture: ComponentFixture<ComplainpendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
