import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockvendorComponent } from './blockvendor.component';

describe('BlockvendorComponent', () => {
  let component: BlockvendorComponent;
  let fixture: ComponentFixture<BlockvendorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockvendorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockvendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
