import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONewbottleAssignComponent } from './o-newbottle-assign.component';

describe('ONewbottleAssignComponent', () => {
  let component: ONewbottleAssignComponent;
  let fixture: ComponentFixture<ONewbottleAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONewbottleAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONewbottleAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
