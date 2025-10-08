import { Component } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { AddQuizComponent } from '../add-quiz/add-quiz.component';
import { HttpClient } from '@angular/common/http';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz-dashboard',
  standalone: false,
  templateUrl: './quiz-dashboard.component.html',
  styleUrl: './quiz-dashboard.component.scss',
})
export class QuizDashboardComponent {
  ref: DynamicDialogRef | undefined;
  products!: any[];

  incomming: any[] = [];
  completed: any[] = [];

  constructor(
    private dialogService: DialogService,
    private _quizService: QuizService
  ) {
    this.firstFiveIncomming();
    this.lastFiveCompleted();
  }

  showDialog() {
    this.ref = this.dialogService.open(AddQuizComponent, {
      width: '50%',
      modal: true,
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
    });
  }

  //#region firstFiveIncomming
  firstFiveIncomming() {
    this._quizService.firstFiveIncomming().subscribe({
      next: (res) => {
        this.incomming = res;
        console.log(this.incomming);
      },
    });
  }
  //#endregion

  //#region lastFiveCompleted
  lastFiveCompleted() {
    this._quizService.lastFiveCompleted().subscribe({
      next: (res) => {
        this.completed = res;
        console.log(this.completed);
      },
    });
  }
  //#endregion
}
