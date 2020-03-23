import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedvendorComponent } from './deletedvendor.component';

describe('DeletedvendorComponent', () => {
  let component: DeletedvendorComponent;
  let fixture: ComponentFixture<DeletedvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
