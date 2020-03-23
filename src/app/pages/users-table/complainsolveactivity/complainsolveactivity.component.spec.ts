import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsolveactivityComponent } from './complainsolveactivity.component';

describe('ComplainsolveactivityComponent', () => {
  let component: ComplainsolveactivityComponent;
  let fixture: ComponentFixture<ComplainsolveactivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainsolveactivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainsolveactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
