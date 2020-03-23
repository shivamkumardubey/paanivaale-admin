import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ONewbottleComponent } from './o-newbottle.component';

describe('ONewbottleComponent', () => {
  let component: ONewbottleComponent;
  let fixture: ComponentFixture<ONewbottleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ONewbottleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ONewbottleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
