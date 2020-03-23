import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockproductActivityComponent } from './blockproduct-activity.component';

describe('BlockproductActivityComponent', () => {
  let component: BlockproductActivityComponent;
  let fixture: ComponentFixture<BlockproductActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockproductActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockproductActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
