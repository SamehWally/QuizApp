import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz-dashboard',
  standalone: false,
  templateUrl: './quiz-dashboard.component.html',
  styleUrl: './quiz-dashboard.component.scss',
})
export class QuizDashboardComponent {

  // private readonly _StudentService = inject(StudentService);
  // students: IStudent[] = [];
  // groups: IGroup[] = [];
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
}
