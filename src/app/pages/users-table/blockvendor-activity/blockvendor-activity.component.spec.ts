import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockvendorActivityComponent } from './blockvendor-activity.component';

describe('BlockvendorActivityComponent', () => {
  let component: BlockvendorActivityComponent;
  let fixture: ComponentFixture<BlockvendorActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockvendorActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockvendorActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
