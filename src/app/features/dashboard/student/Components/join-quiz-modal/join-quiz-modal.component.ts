import { QuizzesService } from './../../services/quizzes.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {  NgStyle } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ToastService } from '../../../../../core/services/toast.service';

@Component({
  selector: 'app-join-quiz-modal',
  imports: [MultiSelectModule,ReactiveFormsModule ,InputTextModule,TranslatePipe],
  templateUrl: './join-quiz-modal.component.html',
  styleUrl: './join-quiz-modal.component.scss'
})
export class JoinQuizModalComponent {

 lang:string='en'
 JoinQuizForm:FormGroup=new FormGroup({
  code:new FormControl(null,[Validators.required])
 })
 constructor(
   private toast:ToastService,
   private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private language:TranslateService,
    private QuizzesService:QuizzesService
  ) {}
 ngOnInit(): void {

 }

closeModal(){
  this.ref.close(false);
}
submitForm(){
this.QuizzesService.joinQuiz(this.JoinQuizForm.value).subscribe({
  next:(res)=>{
      this.ref.close(res);
  }
})
}

}
