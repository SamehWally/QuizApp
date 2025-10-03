import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GroupsViewComponent } from './components/groups-view/groups-view.component';
import { DynamicDialogModule, DialogService } from 'primeng/dynamicdialog';

const routes: Routes = [
  { path: '', redirectTo: 'Groups', pathMatch: 'full' },
  { path: 'Groups', component: GroupsViewComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes),DynamicDialogModule],
  providers:[DialogService]
})
export class GroupsModule {}
