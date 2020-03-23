import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifyActivityComponent } from './unverify-activity.component';

describe('UnverifyActivityComponent', () => {
  let component: UnverifyActivityComponent;
  let fixture: ComponentFixture<UnverifyActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnverifyActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifyActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
