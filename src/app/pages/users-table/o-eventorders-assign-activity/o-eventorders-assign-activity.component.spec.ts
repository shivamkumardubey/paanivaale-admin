import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OEventordersAssignActivityComponent } from './o-eventorders-assign-activity.component';

describe('OEventordersAssignActivityComponent', () => {
  let component: OEventordersAssignActivityComponent;
  let fixture: ComponentFixture<OEventordersAssignActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OEventordersAssignActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OEventordersAssignActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
