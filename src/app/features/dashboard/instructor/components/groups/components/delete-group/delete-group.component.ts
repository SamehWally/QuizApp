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
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-delete-group',
  imports: [MultiSelectModule,ReactiveFormsModule ,InputTextModule ,TranslatePipe],
  templateUrl: './delete-group.component.html',
  styleUrl: './delete-group.component.scss'
})
export class DeleteGroupComponent {
 constructor(
   private _group:GroupService,
   private toast:ToastService,
   public ref: DynamicDialogRef,
  public config: DynamicDialogConfig
  ) {}



  deleteGroupe(){
    this._group.deleteGroup(this.config.data.groupid).subscribe({
      next:(res)=>{
        this.toast.showSuccess(res.message);
        this.ref.close(true)
      }
    })
  }

  closeModal(){
    this.ref.close(false);
  }


}
