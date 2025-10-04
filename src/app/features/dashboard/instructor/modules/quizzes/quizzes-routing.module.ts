import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizDashboardComponent } from './components/quiz-dashboard/quiz-dashboard.component';
import { AddQuizComponent } from './components/add-quiz/add-quiz.component';
import { QuizDetailsComponent } from './components/quiz-details/quiz-details.component';

const routes: Routes = [
  { path: '', component: QuizDashboardComponent, title: 'Quizzes' },
  { path: 'add', component: AddQuizComponent, title: 'Add Quiz' },
  { path: 'details', component: QuizDetailsComponent, title: 'Quiz Details' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizzesRoutingModule {}
