import { Component, inject } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { INewQuestion } from '../../interfaces/INewQuestion';
import { QuizService } from '../../services/quiz.service';
import { ToastService } from '../../../../../../../core/services/toast.service';

@Component({
  selector: 'app-delete-question',
  standalone: false,
  templateUrl: './delete-question.component.html',
  styleUrl: './delete-question.component.scss',
})
export class DeleteQuestionComponent {
  //#region services and injectors
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly dialogConfig = inject(DynamicDialogConfig);
  private readonly _QuizService = inject(QuizService);
  private readonly _toast = inject(ToastService);
  //#endregion Injectors

  //#region variables
  Id: string = this.dialogConfig.data.id;
  question: string = this.dialogConfig.data.question;

  //#endregion variables

  //#region functions
  deleteQuestion() {
    if (this.Id) {
      this._QuizService.deleteQuestion(this.Id).subscribe({
        next: (res: INewQuestion | any) => {
          this._toast.showSuccess('Question Delete successfully');
          this.closeDialogWithSuccess();
        },
      });
    }
  }

  closeDialogWithSuccess() {
    this.dialogRef.close(true);
  }
  //#endregion functions
}
