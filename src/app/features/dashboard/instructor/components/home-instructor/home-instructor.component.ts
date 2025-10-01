import { Component, inject, OnInit } from '@angular/core';
import { InstructorService } from '../../services/instructor.service';
import { ITopFive } from '../../interfaces/ITopFive';

@Component({
  selector: 'app-home-instructor',
  standalone: false,
  templateUrl: './home-instructor.component.html',
  styleUrl: './home-instructor.component.scss',
})
export class HomeInstructorComponent implements OnInit {
  private readonly _InstructorService = inject(InstructorService);
  students: ITopFive[] = [];
  Quizzes: any[] = [];
  getTopFiveStudents() {
    this._InstructorService.getTopFiveStudents().subscribe({
      next: (res: ITopFive[]) => {
        console.log(res);
        this.students = res;
      },
    });
  }
  getTopFiveQuizzes() {
    this._InstructorService.upcomingFiveQuizzes().subscribe({
      next: (res: ITopFive[]) => {
        console.log(res);
        this.Quizzes = res;
      },
    });
  }
  ngOnInit(): void {
    this.getTopFiveStudents();
    this.getTopFiveQuizzes();
  }
}
