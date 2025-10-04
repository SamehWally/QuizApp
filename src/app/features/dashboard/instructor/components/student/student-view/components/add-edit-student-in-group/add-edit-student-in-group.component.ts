import {
  Component,
  inject,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
  input,
} from '@angular/core';
import { IStudentWithoutGroup } from '../../../interfaces/IStudentWithoutGroup';
import { StudentService } from '../../../services/student.service';
import { IStudentGroup } from '../../../interfaces/IStudentGroup';
import { ToastService } from '../../../../../../../../core/services/toast.service';
interface AutoCompleteCompleteEvent {
  originalEvent: Event;
  query: string;
}

@Component({
  selector: 'app-add-edit-student-in-group',
  templateUrl: './add-edit-student-in-group.component.html',
  styleUrls: ['./add-edit-student-in-group.component.scss'],
  standalone: false,
})
export class AddEditStudentInGroupComponent implements OnInit, OnChanges {
  private readonly _StudentService = inject(StudentService);
  private readonly _toast = inject(ToastService);

  @Input() studentData: any;
  @Input() FormID!: number;
  @Output() closeDialog = new EventEmitter<void>();

  studentValue!: IStudentWithoutGroup;
  studentGroup!: IStudentGroup;

  students: IStudentWithoutGroup[] = [];
  filteredStudents: IStudentWithoutGroup[] = [];

  studentGroups: IStudentGroup[] = [];
  filteredStudentGroups: IStudentGroup[] = [];

  ngOnInit(): void {
    this.getStudents();
    this.getAllGroups();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['studentData'] && this.studentData) {
      this.setInitialValues();
    }
  }
  getStudents() {
    if (this.FormID === 1) {
      this._StudentService.getStudentsWithoutGroup().subscribe({
        next: (res) => {
          console.log('fullName', res);
          this.students = res.map((s) => ({
            ...s,
            fullName: `${s.first_name} ${s.last_name}`,
          }));
        },
      });
    } else if (this.FormID === 2) {
      this._StudentService.getStudents().subscribe({
        next: (res) => {
          this.students = res.map((s) => ({
            ...s,
            fullName: `${s.first_name} ${s.last_name}`,
          }));
        },
      });
    }
    this.setInitialValues();
  }

  getAllGroups() {
    this._StudentService.getAllGroups().subscribe({
      next: (res) => {
        this.studentGroups = res;
        this.setInitialValues();
      },
    });
  }

  private setInitialValues() {
    if (this.studentData) {
      let foundStudent: IStudentWithoutGroup | undefined;

      if (this.students.length > 0) {
        foundStudent = this.students.find(
          (s) => s._id === this.studentData._id
        );
      }

      if (foundStudent) {
        this.studentValue = foundStudent;
      } else if (this.studentData.first_name && this.studentData.last_name) {
        this.studentValue = {
          ...this.studentData,
          fullName: `${this.studentData.first_name} ${this.studentData.last_name}`,
        } as IStudentWithoutGroup;
      }

      if (this.studentGroups.length > 0 && this.studentData.group) {
        const foundGroup = this.studentGroups.find(
          (g) => g._id === this.studentData.group._id
        );
        if (foundGroup) {
          this.studentGroup = foundGroup;
        }
      }
    }
  }

  addStudentToGroup() {
    if (
      this.studentValue &&
      this.studentGroup &&
      this.studentValue._id &&
      this.studentGroup._id
    ) {
      if (this.FormID === 1) {
        this._StudentService
          .AddStudentInGroups(this.studentValue._id, this.studentGroup._id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this._toast.showSuccess(res.message);

              this.close();
            },
          });
      } else if (this.FormID === 2) {
        this._StudentService
          .EditStudentInGroups(this.studentValue._id, this.studentGroup._id)
          .subscribe({
            next: (res) => {
              console.log(res);
              this._toast.showSuccess(res.message);
              this.close();
            },
          });
      }
    } else {
      this._toast.showError('Please select both student and group.');
    }
  }

  search(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    this.filteredStudents = this.students.filter((student) =>
      student.fullName?.toLowerCase().includes(query)
    );
  }

  searchGroup(event: AutoCompleteCompleteEvent) {
    const query = event.query.toLowerCase();
    this.filteredStudentGroups = this.studentGroups.filter((group) =>
      group.name?.toLowerCase().includes(query)
    );
  }

  close() {
    this.closeDialog.emit();
  }
}
