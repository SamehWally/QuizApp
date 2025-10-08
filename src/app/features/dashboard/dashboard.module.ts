import { NgModule } from '@angular/core';
import { SharedModule } from '../../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NavbarInstructorComponent } from './instructor/components/navbar-instructor/navbar-instructor.component';
import { RouterModule, Routes } from '@angular/router';
import { StudentGuard } from '../../core/guards/student.guard';
import { InstructorGuard } from '../../core/guards/instructor.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'instructor', pathMatch: 'full' },
      {
        path: 'student',
        canActivate: [StudentGuard],
        loadChildren: () =>
          import('../dashboard/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
      {
        path: 'instructor',
        canActivate: [InstructorGuard],
        loadChildren: () =>
          import('../dashboard/instructor/instructor.module').then(
            (m) => m.InstructorModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    SharedModule,
    CommonModule,

    NavbarInstructorComponent,
    RouterModule.forChild(routes),
  ],
})
export class DashboardModule {}
