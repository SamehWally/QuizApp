import { KeyValuePipe, NgClass, NgFor, NgIf } from '@angular/common';
import { QuizzesService } from './../../services/quizzes.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { StepperModule } from 'primeng/stepper';
import { RadioButton } from 'primeng/radiobutton';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../../../../../core/services/toast.service';
@Component({
  selector: 'app-exam',
  imports: [ButtonModule ,StepperModule ,NgFor , NgIf,NgClass,KeyValuePipe,RadioButton,FormsModule],
  templateUrl: './exam.component.html',
  styleUrl: './exam.component.scss'
})
export class ExamComponent {
id:string='';
quiz:any;
constructor(private routerActive:ActivatedRoute,private QuizzesService:QuizzesService,private _route:Router,private _toast:ToastService){
this.id=this.routerActive.snapshot.paramMap.get('id')!;
}
ngOnInit(): void {
  this.getQuiz();
}

getQuiz(){
  this.QuizzesService.getQuizById(this.id).subscribe({
    next:(res)=>{
      this.quiz=res.data;
      localStorage.setItem('quiz',JSON.stringify(res.data));
    }
  })
}

quizAnswers: { answers: { question: string; answer: string }[] } = { answers: [] };
selectedAnswers: string[] = [];

onSelectAnswer(questionId: string, selectedOption: any) {
  const existingIndex = this.quizAnswers.answers.findIndex(a => a.question === questionId);
  console.log(questionId);
  console.log(selectedOption);

  if (existingIndex !== -1) {
    this.quizAnswers.answers[existingIndex].answer = selectedOption;
  } else {
    this.quizAnswers.answers.push({
      question: questionId,
      answer: selectedOption
    });
  }

}

onSubmit(){
this.QuizzesService.SubmitQuiz(this.id,this.quizAnswers).subscribe({
  next:(res)=>{
    this._route.navigate(['/dashboard/student']);
    this._toast.showSuccess('Exam submited Successfuly');
  }
})

}
}
