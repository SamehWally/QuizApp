// AddEditQuestionComponent.ts

import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DynamicDialogRef } from 'primeng/dynamicdialog'; // ⬅️ هذا هو الكلاس الذي يحتوي على close()

@Component({
  selector: 'app-add-edit-question',
  standalone: false,
  templateUrl: './add-edit-question.component.html',
  styleUrl: './add-edit-question.component.scss',
})
export class AddEditQuestionComponent {
  private readonly dialogRef = inject(DynamicDialogRef);
  private readonly dialogConfig = inject(DynamicDialogConfig);
  Id: string = this.dialogConfig.data.id;
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

  difficultyList = [
    { label: 'Easy', value: 'easy' },
    { label: 'Medium', value: 'medium' },
    { label: 'Hard', value: 'hard' },
  ];

  typeList = [
    { label: 'Multiple Choice (MCQ)', value: 'MCQ' },
    { label: 'Boolean Exam (BE)', value: 'BE' },
    { label: 'Essay', value: 'Essay' },
  ];

  onSubmit() {
    if (this.formsGroup.valid) {
      console.log('Form Value:', this.formsGroup.value);
      // send to backend here
    } else {
      this.formsGroup.markAllAsTouched();
    }
  }

  closeDialogWithSuccess() {
    this.dialogRef.close(true);
  }
}
