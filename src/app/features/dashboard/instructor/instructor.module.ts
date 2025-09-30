import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GroupsComponent } from './components/groups/groups.component';
import { HomeInstructorComponent } from './components/home-instructor/home-instructor.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { ResultsComponent } from './components/results/results.component';

const routes: Routes = [
  { path: '', redirectTo: 'homeInstructor', pathMatch: 'full' },
  {
    path: 'homeInstructor',
    component: HomeInstructorComponent,
    title: 'Instructor Dashboard',
  },
  { path: 'groups', component: GroupsComponent, title: 'Groups' },
  { path: 'quizzes', component: QuizzesComponent, title: 'Quizzes' },
  { path: 'results', component: ResultsComponent, title: 'Results' },
];

@NgModule({
  declarations: [
    GroupsComponent,
    HomeInstructorComponent,
    QuizzesComponent,
    ResultsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstructorModule {}
