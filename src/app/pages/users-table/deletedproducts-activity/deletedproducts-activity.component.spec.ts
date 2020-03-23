import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedproductsActivityComponent } from './deletedproducts-activity.component';

describe('DeletedproductsActivityComponent', () => {
  let component: DeletedproductsActivityComponent;
  let fixture: ComponentFixture<DeletedproductsActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedproductsActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedproductsActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
