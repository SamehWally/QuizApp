import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudentInGroupComponent } from './add-edit-student-in-group.component';

describe('AddEditStudentInGroupComponent', () => {
  let component: AddEditStudentInGroupComponent;
  let fixture: ComponentFixture<AddEditStudentInGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditStudentInGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditStudentInGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
