import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksupplierComponent } from './blocksupplier.component';

describe('BlocksupplierComponent', () => {
  let component: BlocksupplierComponent;
  let fixture: ComponentFixture<BlocksupplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksupplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
