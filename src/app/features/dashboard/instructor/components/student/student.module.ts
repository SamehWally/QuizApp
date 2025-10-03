import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentViewComponent } from './student-view/student-view.component';
import { SharedModule } from '../../../../../Shared/shared.module';
import { FormsModule } from '@angular/forms';
import { AddEditStudentInGroupComponent } from './student-view/components/add-edit-student-in-group/add-edit-student-in-group.component';
import { DeleteStudentFromGroupComponent } from './student-view/components/delete-student-from-group/delete-student-from-group.component';
const routes: Routes = [
  { path: '', redirectTo: 'Student', pathMatch: 'full' },
  { path: 'Student', component: StudentViewComponent },
];

@NgModule({
  declarations: [
    StudentViewComponent,
    AddEditStudentInGroupComponent,
    DeleteStudentFromGroupComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
})
export class StudentModule {}
