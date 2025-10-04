import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteStudentFromGroupComponent } from './delete-student-from-group.component';

describe('DeleteStudentFromGroupComponent', () => {
  let component: DeleteStudentFromGroupComponent;
  let fixture: ComponentFixture<DeleteStudentFromGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteStudentFromGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteStudentFromGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
