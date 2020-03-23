import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockproductComponent } from './blockproduct.component';

describe('BlockproductComponent', () => {
  let component: BlockproductComponent;
  let fixture: ComponentFixture<BlockproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
