import { Component, inject, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { IGroup, IStudent } from '../interfaces/IStudent';

@Component({
  selector: 'app-student-view',
  standalone: false,
  templateUrl: './student-view.component.html',
  styleUrl: './student-view.component.scss',
})
export class StudentViewComponent implements OnInit {
  private readonly _StudentService = inject(StudentService);
  students: IStudent[] = [];
  groups: IGroup[] = [];
  selectedGroupId: string = '';
  currentPage: number = 0;
  rows: number = 10;
  visible: boolean = false;
  visibleDelete: boolean = false;
  selectedStudent = {};
  formID: number = 1;

  showDialog(student: any, FormID: number) {
    this.formID = FormID;
    this.selectedStudent = student;
    this.visible = true;
  }
  showDeleteDialog(student: any) {
    this.selectedStudent = student;
    this.visibleDelete = true;
  }
  closeDialog() {
    this.visible = false;
  }

  getAllStudents() {
    this._StudentService.getStudents().subscribe({
      next: (students) => {
        this.students = students;
        this.groups = Array.from(
          new Map(
            students
              .filter((student) => student.group)
              .map((student) => [student.group!._id, student.group as IGroup])
          ).values()
        );

        if (this.groups.length > 0) {
          this.selectedGroupId = this.groups[0]._id;
        }
      },
    });
  }

  controlDirection(): 'rtl' | 'ltr' {
    const lang = localStorage.getItem('lang') || 'en';
    return lang === 'ar' ? 'rtl' : 'ltr';
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  get filteredStudents(): IStudent[] {
    if (!this.selectedGroupId) return [];
    return this.students.filter((s) => s.group?._id === this.selectedGroupId);
  }

  get paginatedStudents(): IStudent[] {
    const start = this.currentPage * this.rows;
    return this.filteredStudents.slice(start, start + this.rows);
  }

  onPageChange(event: any) {
    this.currentPage = event.page;
    this.rows = event.rows;
  }
}
