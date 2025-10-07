import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { DialogService } from 'primeng/dynamicdialog';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentRoutingModule
  ],
   providers:[DialogService]
})
export class StudentModule { }
