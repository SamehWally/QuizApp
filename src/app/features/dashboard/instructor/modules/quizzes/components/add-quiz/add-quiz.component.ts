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
import { ToastService } from '../../../../../../../core/services/toast.service';
import { QuizService } from '../../services/quiz.service';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { QuizCodeComponent } from '../quiz-code/quiz-code.component';

// export interface QuizForm {
//   title: string;
//   duration: number;
//   numberOfQuestions: number;
//   scorePerQuestion: number;
//   description: string;
//   scheduledDate: Date;
//   difficulty: string;
//   category: string;
//   groupName: string;
// }

@Component({
  selector: 'app-add-quiz',
  standalone: false,
  templateUrl: './add-quiz.component.html',
  styleUrl: './add-quiz.component.scss',
})
// export class AddQuizComponent implements OnInit, OnChanges {
export class AddQuizComponent implements OnInit {
  //#region injections
  private readonly _quizService = inject(QuizService);
  private readonly _toast = inject(ToastService);
  //#endregion

  //#region variables
  studentGroups: any[] = [];
  durationOptions: any[] = [];
  numberQuestionsOptions: any[] = [];
  scorePerQuestionsOptions: any[] = [];
  categoryOptions: any[] = [];
  difficultyOptions: any[] = [];
  scheduledDate: any;

  quizForm!: FormGroup;
  //#endregion

  //#region constructor
  constructor(
    public ref: DynamicDialogRef,
    private _dialogService: DialogService,
    private _http: HttpClient
  ) {
    this.quizForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      duration: new FormControl(
        { label: '15', value: 15 },
        Validators.required
      ),
      questions_number: new FormControl(
        { label: '1', value: 1 },
        Validators.required
      ),
      score_per_question: new FormControl(
        { label: '1', value: 1 },
        Validators.required
      ),
      scheduledDate: new FormControl(null, Validators.required),
      difficulty: new FormControl(
        { label: 'easy', value: 1 },
        Validators.required
      ),
      type: new FormControl({ label: 'FE', value: 1 }, Validators.required),
      group: new FormControl(
        { label: 'menisy', value: '68de750c5358146037d5f2e0' },
        Validators.required
      ),
    });
  }
  //#endregion

  //#region ngOnInit
  ngOnInit(): void {
    this.getAllGroups();
    this.durationOptions = [
      { label: '10', value: 10 },
      { label: '15', value: 15 },
      { label: '30', value: 30 },
    ];

    this.numberQuestionsOptions = [
      { label: '1', value: 1 },
      { label: '5', value: 5 },
      { label: '10', value: 10 },
    ];

    this.scorePerQuestionsOptions = [
      { label: '1', value: 1 },
      { label: '3', value: 3 },
      { label: '6', value: 6 },
    ];

    this.categoryOptions = [
      { label: 'FE', value: 1 },
      { label: 'BE', value: 2 },
    ];

    this.difficultyOptions = [
      { label: 'easy', value: 1 },
      { label: 'medium', value: 2 },
      { label: 'hard', value: 3 },
    ];

    this.scheduledDate = new Date('2023-05-11T13:00:00');
  }
  //#endregion

  //#region submitForm
  submitForm() {
    if (this.quizForm.valid) {
      const raw = this.quizForm.value;

      const payload = {
        title: raw.title,
        description: raw.description,
        group: raw.group?.value || raw.group,
        questions_number: raw.questions_number?.value || raw.questions_number,
        difficulty: raw.difficulty?.label || raw.difficulty,
        type: raw.type?.label || raw.type,
        schadule: new Date(raw.scheduledDate).toISOString(),
        duration: raw.duration?.label || raw.duration,
        score_per_question:
          raw.score_per_question?.label || raw.score_per_question,
      };

      console.log('Reactive Payload:', payload);
      this._quizService.addQuiz(payload).subscribe({
        next: (res: any) => {
          this._toast.showSuccess('تم إنشاء الكويز بنجاح 🎉');

          console.log('Add Quiz Response:', res);

          this._dialogService.open(QuizCodeComponent, {
            data: {
              code: res.data.code || 'غير متوفر',
            },
            width: '400px',
            height: '320px',
            baseZIndex: 10000,
          });
          this.ref.close();
        },
      });
    } else {
      this.quizForm.markAllAsTouched();
    }
  }
  //#endregion

  //#region getAllGroups
  getAllGroups() {
    this._quizService.getAllGroups().subscribe({
      next: (res) => {
        this.studentGroups = res.map((item: any) => ({
          label: item.name,
          value: item._id,
        }));
      },
    });
  }
  //#endregion
}
