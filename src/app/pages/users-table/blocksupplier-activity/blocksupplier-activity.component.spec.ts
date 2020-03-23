import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksupplierActivityComponent } from './blocksupplier-activity.component';

describe('BlocksupplierActivityComponent', () => {
  let component: BlocksupplierActivityComponent;
  let fixture: ComponentFixture<BlocksupplierActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksupplierActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksupplierActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
