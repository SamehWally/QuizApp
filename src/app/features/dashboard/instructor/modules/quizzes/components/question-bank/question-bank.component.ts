import { Component, inject, OnInit } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { IBankQuestion } from '../../interfaces/IBankQuestion';
import { AddEditQuestionComponent } from '../add-edit-question/add-edit-question.component';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DeleteQuestionComponent } from '../delete-question/delete-question.component';

@Component({
  selector: 'app-question-bank',
  standalone: false,
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.scss'],
})
export class QuestionBankComponent implements OnInit {
  //#region services and injectors
  private readonly _QuizService = inject(QuizService);
  private dialogService = inject(DialogService);
  //#endregion Injectors

  //#region variables
  questions: IBankQuestion[] = [];
  loading = true;
  searchValue = '';
  ref: DynamicDialogRef | undefined;
  //#endregion variables

  // #region functions
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

  openDialog(QuestionId: string, ViewQuestion: boolean = false) {
    this.ref = this.dialogService.open(AddEditQuestionComponent, {
      width: '40rem',
      height: 'auto',
      header: '',
      closable: false,
      baseZIndex: 10000,
      breakpoints: { '1199px': '75vw', '575px': '90vw' },
      style: { padding: '0' },
      contentStyle: { padding: '0', overflow: 'unset' },
      styleClass: 'no-dialog-header-space',
      data: {
        id: QuestionId,
        View: ViewQuestion,
      },
    });

    this.ref.onClose.subscribe((isSuccess) => {
      if (isSuccess) {
        this.getAllQuestion();
      }
    });
  }
  openDeleteDialog(QuestionId: string, question: string) {
    this.ref = this.dialogService.open(DeleteQuestionComponent, {
      width: '40rem',
      height: 'auto',
      header: '',
      closable: false,
      baseZIndex: 10000,
      breakpoints: { '1199px': '75vw', '575px': '90vw' },
      style: { padding: '0' },
      contentStyle: { padding: '0', overflow: 'unset' },
      styleClass: 'no-dialog-header-space',
      data: {
        id: QuestionId,
        question: question,
      },
    });

    this.ref.onClose.subscribe((isSuccess) => {
      if (isSuccess) {
        this.getAllQuestion();
      }
    });
  }
  //#endregion functions

  // #region lifecycle hooks
  ngOnInit() {
    this.getAllQuestion();
  }
  //#endregion lifecycle hooks
}
