import { DynamicDialogRef, DialogService } from 'primeng/dynamicdialog';
import { IGroupResponse } from '../../interfaces/groupdata';
import { GroupService } from './../../services/group.service';
import { Component } from '@angular/core';
import { AddEditGroupComponent } from '../add-edit-group/add-edit-group.component';
import { DeleteGroupComponent } from '../delete-group/delete-group.component';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-groups-view',
  imports: [TranslatePipe],
  templateUrl: './groups-view.component.html',
  styleUrl: './groups-view.component.scss'
})
export class GroupsViewComponent {
  groups!:IGroupResponse[];
  ref: DynamicDialogRef | undefined;

constructor(private _group:GroupService,private dialogService: DialogService){}
ngOnInit(): void {
  this.getGroups();
}
getGroups(){
  this._group.getGroups().subscribe({
    next:(res:IGroupResponse[])=>{
      this.groups=res;

    }
  })
}
createGroup(){
   this.ref = this.dialogService.open(AddEditGroupComponent, {
      width: '40rem',
      height:'auto',
      contentStyle: { "max-height": "500px", "overflow": "unset" },
      baseZIndex: 10000,
      breakpoints:"{ '1199px': '75vw', '575px': '90vw'}",
      data:{
        isAdd:true
      }
    });
     this.ref.onClose.subscribe((isSuccess) => {
            if (isSuccess) {
              this.getGroups();
            }
        });
}
EditGroup(id:string){
    this.ref = this.dialogService.open(AddEditGroupComponent, {
      width: '40rem',
      height:'auto',
      contentStyle: { "max-height": "500px", "overflow": "unset" },
      baseZIndex: 10000,
      breakpoints:"{ '1199px': '75vw', '575px': '90vw'}",
      data:{
        isAdd:false,
        groupid:id
      }
    });
      this.ref.onClose.subscribe((isSuccess) => {
            if (isSuccess) {
              this.getGroups();
            }
        });
}
deleteGroup(id:string){
  this.ref = this.dialogService.open(DeleteGroupComponent, {
      width: '40rem',
      height:'auto',
      contentStyle: { "max-height": "500px", "overflow": "unset" },
      baseZIndex: 10000,
      breakpoints:"{ '1199px': '75vw', '575px': '90vw'}",
      data:{
        groupid:id
      }
    });
      this.ref.onClose.subscribe((isSuccess) => {
            if (isSuccess) {
              this.getGroups();
            }
        });
}
}
