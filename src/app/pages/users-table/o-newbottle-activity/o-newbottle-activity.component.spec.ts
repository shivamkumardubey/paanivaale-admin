import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONewbottleActivityComponent } from './o-newbottle-activity.component';

describe('ONewbottleActivityComponent', () => {
  let component: ONewbottleActivityComponent;
  let fixture: ComponentFixture<ONewbottleActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONewbottleActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONewbottleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
