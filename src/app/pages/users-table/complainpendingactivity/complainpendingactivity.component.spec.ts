import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainpendingactivityComponent } from './complainpendingactivity.component';

describe('ComplainpendingactivityComponent', () => {
  let component: ComplainpendingactivityComponent;
  let fixture: ComponentFixture<ComplainpendingactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainpendingactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainpendingactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
