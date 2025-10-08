import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz-details',
  standalone: false,
  templateUrl: './quiz-details.component.html',
  styleUrl: './quiz-details.component.scss',
})
export class QuizDetailsComponent {
  quiz: any;
  quizId: string = '64b8f3f4c1e5f3a5d6e4b2c1';

  constructor(
    private _quizService: QuizService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.quizId = params['id'];
      this.getById(this.quizId);
    });
  }

  getById(id: string) {
    this._quizService.getById(id).subscribe({
      next: (res) => {
        this.quiz = res;
        console.log(this.quiz);
      },
    });
  }
}
