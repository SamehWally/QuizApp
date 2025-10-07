import { QuizzesService } from './../../services/quizzes.service';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import {  NgStyle } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { ToastService } from '../../../../../core/services/toast.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-exam-modal',
  imports: [MultiSelectModule,ReactiveFormsModule ,InputTextModule,TranslatePipe],

  templateUrl: './exam-modal.component.html',
  styleUrl: './exam-modal.component.scss'
})
export class ExamModalComponent {

 lang:string='en'
 mydata:any;
 id:string='';
 JoinQuizForm:FormGroup=new FormGroup({
  code:new FormControl(null,[Validators.required])
 })
 constructor(
   private toast:ToastService,
   private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private language:TranslateService,
    private QuizzesService:QuizzesService,
    private route:Router
  ) {}
closeModal(){
  this.id=this.config.data.obj.data.quiz;
  this.ref.close(false);
  this.route.navigate([`/dashboard/student/exam/${this.id}`])
}


}
