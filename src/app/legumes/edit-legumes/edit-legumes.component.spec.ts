import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLegumesComponent } from './edit-legumes.component';

describe('EditLegumesComponent', () => {
  let component: EditLegumesComponent;
  let fixture: ComponentFixture<EditLegumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLegumesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLegumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
