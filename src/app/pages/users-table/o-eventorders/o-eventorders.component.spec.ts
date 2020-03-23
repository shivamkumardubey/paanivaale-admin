import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OEventordersComponent } from './o-eventorders.component';

describe('OEventordersComponent', () => {
  let component: OEventordersComponent;
  let fixture: ComponentFixture<OEventordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OEventordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OEventordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
