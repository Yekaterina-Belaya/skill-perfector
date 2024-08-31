import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonTreeTableComponent } from './common-tree-table.component';

describe('CommonTreeTableComponent', () => {
  let component: CommonTreeTableComponent;
  let fixture: ComponentFixture<CommonTreeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonTreeTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonTreeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
