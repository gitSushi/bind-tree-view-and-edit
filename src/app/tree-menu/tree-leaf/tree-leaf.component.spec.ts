import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeLeafComponent } from './tree-leaf.component';

describe('TreeLeafComponent', () => {
  let component: TreeLeafComponent;
  let fixture: ComponentFixture<TreeLeafComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreeLeafComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreeLeafComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
