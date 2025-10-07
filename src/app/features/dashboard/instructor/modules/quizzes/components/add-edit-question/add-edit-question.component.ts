// AddEditQuestionComponent.ts

import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog'; // ⬅️ هذا هو الكلاس الذي يحتوي على close()
import { QuizService } from '../../services/quiz.service';
import { INewQuestion } from '../../interfaces/INewQuestion';
import { ToastService } from '../../../../../../../core/services/toast.service';

@Component({
  selector: 'app-add-edit-question',
  standalone: false,
  templateUrl: './add-edit-question.component.html',
  styleUrl: './add-edit-question.component.scss',
})
export class AddEditQuestionComponent implements OnInit {
  //#region Injecting Services
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly dialogConfig = inject(DynamicDialogConfig);
  private readonly _QuizService = inject(QuizService);
  private readonly _toast = inject(ToastService);

  //#endregion Injecting Services

  //#region Variables
  Id: string = this.dialogConfig.data.id;
  View: boolean = this.dialogConfig.data.View;
  //#endregion Variables

  //#region Forms
  formsGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null),
    options: new FormGroup({
      A: new FormControl(null, [Validators.required]),
      B: new FormControl(null, [Validators.required]),
      C: new FormControl(null, [Validators.required]),
      D: new FormControl(null, [Validators.required]),
    }),
    answer: new FormControl(null, [Validators.required]),
    difficulty: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
  });
  //#endregion Forms

  //#region Lists
  difficultyList = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  typeList = [
    { label: 'FE', value: 'FE' },
    { label: 'BE', value: 'BE' },
    { label: 'DO', value: 'DO' },
  ];

  //#endregion Lists

  //#region Methods
  getQuestionById() {
    if (this.Id) {
      this._QuizService.getQuestionById(this.Id).subscribe({
        next: (res: INewQuestion | any) => {
          this.formsGroup.patchValue({
            title: res.title,
            description: res.description,
            options: {
              A: res.options.A,
              B: res.options.B,
              C: res.options.C,
              D: res.options.D,
            },
            answer: res.answer,
            difficulty: res.difficulty,
            type: res.type,
          });
        },
      });
      if (this.View) {
        this.formsGroup.disable();
      } else {
        this.formsGroup.enable();
      }
    }
  }

  addEditQuestion() {
    if (this.formsGroup.valid) {
      if (this.Id) {
        console.log('Form edit Value:', this.formsGroup.value);
        this._QuizService
          .editQuestion(this.formsGroup.value, this.Id)
          .subscribe({
            next: (res) => {
              this._toast.showSuccess('Question added successfully');
            },
          });
      } else {
        console.log('Form Value:', this.formsGroup.value);
        this._QuizService.addQuestion(this.formsGroup.value).subscribe({
          next: (res) => {
            this._toast.showSuccess('Question Edit successfully');
          },
        });
      }
      this.closeDialogWithSuccess();
    } else {
      this.formsGroup.markAllAsTouched();
    }
  }

  closeDialogWithSuccess() {
    this.dialogRef.close(true);
  }
  get actionKey(): string {
    if (!this.Id) return 'addEditQuestion.AddQuestion';
    return this.View
      ? 'addEditQuestion.ViewQuestion'
      : 'addEditQuestion.EditQuestion';
  }
  //#endregion Methods

  //#region Lifecycle Hooks

  ngOnInit(): void {
    this.getQuestionById();
  }
  //#endregion Lifecycle Hooks
}
