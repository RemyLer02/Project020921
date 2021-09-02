import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeMultiplicationComponent } from './table-de-multiplication.component';

describe('TableDeMultiplicationComponent', () => {
  let component: TableDeMultiplicationComponent;
  let fixture: ComponentFixture<TableDeMultiplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDeMultiplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDeMultiplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
