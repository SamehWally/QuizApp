import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view/student-view.component';
import { SharedModule } from '../../../../../Shared/shared.module';
import { FormsModule } from '@angular/forms';
const routes: Routes = [
  { path: '', redirectTo: 'Student', pathMatch: 'full' },
  { path: 'Student', component: StudentViewComponent },
];

@NgModule({
  declarations: [StudentViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
})
export class StudentModule {}
