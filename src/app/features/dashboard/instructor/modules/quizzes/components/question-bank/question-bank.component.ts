import { Component, inject, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { IBankQuestion } from '../../interfaces/IBankQuestion';

@Component({
  selector: 'app-question-bank',
  standalone: false,
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss'],
})
export class QuestionBankComponent implements OnInit {
  private readonly _QuizService = inject(QuizService);
  questions: IBankQuestion[] = [];
  loading = true;
  searchValue = '';

  ngOnInit() {
    this.getAllQuestion();
  }

  getAllQuestion() {
    this._QuizService.getAllQuestion().subscribe({
      next: (res) => {
        this.questions = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  onGlobalFilter(event: Event, dt: any) {
    const input = event.target as HTMLInputElement;
    dt.filterGlobal(input?.value || '', 'contains');
  }

  clear(dt: any) {
    dt.clear();
    this.searchValue = '';
  }
}
