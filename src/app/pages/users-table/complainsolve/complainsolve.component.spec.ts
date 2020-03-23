import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainsolveComponent } from './complainsolve.component';

describe('ComplainsolveComponent', () => {
  let component: ComplainsolveComponent;
  let fixture: ComponentFixture<ComplainsolveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplainsolveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainsolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
