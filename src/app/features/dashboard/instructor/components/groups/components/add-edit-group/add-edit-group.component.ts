import { IGroup } from './../../../student/interfaces/IStudent';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Component } from '@angular/core';
import { MultiSelectModule } from 'primeng/multiselect';
import { StudentInterface } from '../../interfaces/groupdata';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { StudentService } from '../../../student/services/student.service';
import { IStudent } from '../../../student/interfaces/IStudent';
import { ToastService } from '../../../../../../../core/services/toast.service';
import { GroupService } from '../../services/group.service';
import {  NgStyle } from '@angular/common';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-add-edit-group',
  imports: [MultiSelectModule,ReactiveFormsModule ,InputTextModule,NgStyle,TranslatePipe],
  templateUrl: './add-edit-group.component.html',
  styleUrl: './add-edit-group.component.scss'
})
export class AddEditGroupComponent {
 students!: IStudent[];
 groupStudentsIds: string[] = [];
 lang:string='en'
 isAdd:boolean =true;
 constructor(
   private student:StudentService,
   private _group:GroupService,
   private toast:ToastService,
   private ref: DynamicDialogRef,
    private config: DynamicDialogConfig,
    private language:TranslateService
  ) {}
 ngOnInit(): void {
  if(this.config.data.isAdd == false){
    this.getGroupbyid()
    this.isAdd=false;
  }
  this.getstudents();
  if(localStorage.getItem('lang') == 'ar'){
    this.lang='ar'
  }else{
    this.lang='en'
  }
  this.language.onLangChange.subscribe((event: any) => {
       if(event.lang=='ar'){
      this.lang='ar';
        }else{
        this.lang='en';
    }
    });
 }
 getstudents(){
  this.student.getStudents().subscribe({
    next:(res)=>{
      this.students =res.filter(s=>s.group == null || this.groupStudentsIds.includes(s._id));
    }
  })
 }
  formsGroups:FormGroup = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    students:new FormControl([])
  })
  submitForm(){
    if(this.config.data.isAdd == true){
      this.create();

    }else{
      this.editGroup();
    }
  }
  create(){
    this._group.createGroup(this.formsGroups.value).subscribe({
      next:(res)=>{
        this.toast.showSuccess(res.message);
        this.ref.close(true);
      }
    })
  }
    editGroup(){
    this._group.editGroup(this.config.data.groupid,this.formsGroups.value).subscribe({
      next:(res)=>{
        this.toast.showSuccess(res.message);
        this.ref.close(true);
      }
    })
  }
  closeModal(){
    this.ref.close(false);
  }
getGroupbyid(){
   this._group.getGroupByid(this.config.data.groupid).subscribe({
    next:(res)=>{
      this.groupStudentsIds = res.students.map((s: any) => s._id);

        this.formsGroups.patchValue({
        name: res.name,
        students: res.students.map((s: any) => s._id)
      });

      this.getstudents();
    }
   })
}


}
