import { QuizzesService } from './../../services/quizzes.service';
import { QuizService } from './../../../instructor/modules/quizzes/services/quiz.service';
import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DatePipe, NgClass } from '@angular/common';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { JoinQuizModalComponent } from '../join-quiz-modal/join-quiz-modal.component';
import { ExamModalComponent } from '../exam-modal/exam-modal.component';

@Component({
  selector: 'app-student-quizzes',
  imports: [TranslatePipe,NgClass,DatePipe],
  templateUrl: './student-quizzes.component.html',
  styleUrl: './student-quizzes.component.scss'
})
export class StudentQuizzesComponent {
constructor(private QuizzesService :QuizzesService,private dialogService: DialogService ){}
upcommign:any[]=[];
Completed:any[]=[];
ref: DynamicDialogRef | undefined;
ngOnInit(): void {
this.getUpcomming();
this.getUpcomplated();
}
getUpcomming(){
  this.QuizzesService.getUpcomingQuizzes().subscribe({
    next:(res)=>{
      console.log(res);

    }
  })
}

getUpcomplated(){
  this.QuizzesService.getCompletedQuizzes().subscribe({
    next:(res)=>{
      console.log(res);
      this.Completed=res;
    }
  })
}
// getGroup(id:string){
//   this.QuizzesService.getGroupById(id).subscribe({
//     next:(res)=>{
//       console.log(res);

//     }
//   })
// }
controlDirection(): 'rtl' | 'ltr' {
    const lang = localStorage.getItem('lang') || 'en';
    return lang === 'ar' ? 'rtl' : 'ltr';
}
openModal(){
   this.ref = this.dialogService.open(JoinQuizModalComponent, {
        width: '40rem',
        height:'auto',
        contentStyle: { "max-height": "500px", "overflow": "unset" },
        baseZIndex: 10000,
        breakpoints:"{ '1199px': '75vw', '575px': '90vw'}",
      });
       this.ref.onClose.subscribe((res) => {
        if(res !=false){
          this.OpenModalSuucess(res);
        }
      });
}
OpenModalSuucess(res:any){
     this.ref = this.dialogService.open(ExamModalComponent, {
        width: '30rem',
        height:'auto',
        contentStyle: { "max-height": "500px", "overflow": "unset" },
        baseZIndex: 10000,
        breakpoints:"{ '1199px': '75vw', '575px': '90vw'}",
        data:{
          obj:res
        }
      });
       this.ref.onClose.subscribe((isSuccess) => {
                console.log(isSuccess);
          });
}
}
