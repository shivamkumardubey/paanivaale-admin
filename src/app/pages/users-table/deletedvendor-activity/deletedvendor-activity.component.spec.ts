import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedvendorActivityComponent } from './deletedvendor-activity.component';

describe('DeletedvendorActivityComponent', () => {
  let component: DeletedvendorActivityComponent;
  let fixture: ComponentFixture<DeletedvendorActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedvendorActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedvendorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
