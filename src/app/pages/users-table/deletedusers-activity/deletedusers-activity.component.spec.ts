import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedusersActivityComponent } from './deletedusers-activity.component';

describe('DeletedusersActivityComponent', () => {
  let component: DeletedusersActivityComponent;
  let fixture: ComponentFixture<DeletedusersActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedusersActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedusersActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
