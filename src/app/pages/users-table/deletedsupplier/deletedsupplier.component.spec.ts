import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletedsupplierComponent } from './deletedsupplier.component';

describe('DeletedsupplierComponent', () => {
  let component: DeletedsupplierComponent;
  let fixture: ComponentFixture<DeletedsupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletedsupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletedsupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
