import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnverifyComponent } from './unverify.component';

describe('UnverifyComponent', () => {
  let component: UnverifyComponent;
  let fixture: ComponentFixture<UnverifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnverifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnverifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
