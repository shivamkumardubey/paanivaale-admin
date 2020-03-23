import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONewbottleAssignActivityComponent } from './o-newbottle-assign-activity.component';

describe('ONewbottleAssignActivityComponent', () => {
  let component: ONewbottleAssignActivityComponent;
  let fixture: ComponentFixture<ONewbottleAssignActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONewbottleAssignActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONewbottleAssignActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
