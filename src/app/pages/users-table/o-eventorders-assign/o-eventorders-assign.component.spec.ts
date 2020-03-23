import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OEventordersAssignComponent } from './o-eventorders-assign.component';

describe('OEventordersAssignComponent', () => {
  let component: OEventordersAssignComponent;
  let fixture: ComponentFixture<OEventordersAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OEventordersAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OEventordersAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
