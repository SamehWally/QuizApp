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
  //#region Services
  private _InstructorService = inject(InstructorService);
  //#endregion Services

  //#region Properties
  students: ITopFive[] = [];
  Quizzes: any[] = [];

  //#endregion Properties

  //#region Methods
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
  controlDirection(): 'rtl' | 'ltr' {
    const lang = localStorage.getItem('lang') || 'en';
    return lang === 'ar' ? 'rtl' : 'ltr';
  }
  //#endregion Methods

  //#region Lifecycle Hooks
  ngOnInit(): void {
    this.getTopFiveStudents();
    this.getTopFiveQuizzes();
  }
  //#endregion Lifecycle Hooks
}
