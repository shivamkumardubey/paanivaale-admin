import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockusersActivityComponent } from './blockusers-activity.component';

describe('BlockusersActivityComponent', () => {
  let component: BlockusersActivityComponent;
  let fixture: ComponentFixture<BlockusersActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockusersActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockusersActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
