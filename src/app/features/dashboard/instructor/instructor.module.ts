import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeInstructorComponent } from './components/home-instructor/home-instructor.component';
import { QuizzesComponent } from './components/quizzes/quizzes.component';
import { ResultsComponent } from './components/results/results.component';
import { SharedModule } from '../../../Shared/shared.module';

const routes: Routes = [
  { path: '', redirectTo: 'homeInstructor', pathMatch: 'full' },
  {
    path: 'homeInstructor',
    component: HomeInstructorComponent,
    title: 'Instructor Dashboard',
  },
  {
    path: 'groups',
    loadChildren: () =>
      import('./components/groups/groups.module').then((m) => m.GroupsModule),
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./components/student/student.module').then(
        (m) => m.StudentModule
      ),
  },

  { path: 'quizzes', component: QuizzesComponent, title: 'Quizzes' },
  { path: 'results', component: ResultsComponent, title: 'Results' },
];

@NgModule({
  declarations: [HomeInstructorComponent, QuizzesComponent, ResultsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  exports: [RouterModule, SharedModule],
})
export class InstructorModule {}
