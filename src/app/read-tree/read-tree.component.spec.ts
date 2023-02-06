import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTreeComponent } from './read-tree.component';

describe('ReadTreeComponent', () => {
  let component: ReadTreeComponent;
  let fixture: ComponentFixture<ReadTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadTreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
