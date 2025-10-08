import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-quiz-code',
  standalone: false,
  templateUrl: './quiz-code.component.html',
  styleUrl: './quiz-code.component.scss',
})
export class QuizCodeComponent {
  code: string = '';

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) {
    this.code = config.data?.code || 'غير متوفر';
  }

  copyCode() {
    navigator.clipboard.writeText(this.code);
    this.ref.close();
  }
}
