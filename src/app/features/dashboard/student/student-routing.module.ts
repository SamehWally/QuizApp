import { StudentQuizzesComponent } from './Components/student-quizzes/student-quizzes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamComponent } from './Components/exam/exam.component';
import { ResultsComponent } from './Components/results/results.component';

const routes: Routes = [
  {path:'',redirectTo:'quizzes',pathMatch:'full'},
  {path:'quizzes',component:StudentQuizzesComponent},
  {path:'exam/:id',component:ExamComponent},
  {path:'results',component:ResultsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
