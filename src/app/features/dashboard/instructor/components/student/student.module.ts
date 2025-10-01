import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './components/student-view/student-view.component';
const routes: Routes = [
  { path: '', redirectTo: 'Student', pathMatch: 'full' },
  { path: 'Student', component: StudentViewComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class StudentModule {}
