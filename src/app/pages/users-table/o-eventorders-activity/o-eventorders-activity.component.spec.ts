import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OEventordersActivityComponent } from './o-eventorders-activity.component';

describe('OEventordersActivityComponent', () => {
  let component: OEventordersActivityComponent;
  let fixture: ComponentFixture<OEventordersActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OEventordersActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OEventordersActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
