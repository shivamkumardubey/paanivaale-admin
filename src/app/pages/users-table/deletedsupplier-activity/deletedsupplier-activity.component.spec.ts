import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedsupplierActivityComponent } from './deletedsupplier-activity.component';

describe('DeletedsupplierActivityComponent', () => {
  let component: DeletedsupplierActivityComponent;
  let fixture: ComponentFixture<DeletedsupplierActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedsupplierActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedsupplierActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
