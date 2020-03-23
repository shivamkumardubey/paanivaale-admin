import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductActivityComponent } from './product-activity.component';

describe('ProductActivityComponent', () => {
  let component: ProductActivityComponent;
  let fixture: ComponentFixture<ProductActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
