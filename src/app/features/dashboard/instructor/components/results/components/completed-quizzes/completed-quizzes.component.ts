import { Component, OnInit ,inject} from '@angular/core';
import { ResuitsService } from '../../services/resuits.service';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from "../../../../../../auth/auth-routing.module";
import { MyTranslateService } from '../../../../../../../core/services/my-translate.service';
import { SharedModule } from '../../../../../../../Shared/shared.module';

@Component({
  selector: 'app-completed-quizzes',
  imports: [CommonModule, AuthRoutingModule,SharedModule],
  templateUrl: './completed-quizzes.component.html',
  styleUrl: './completed-quizzes.component.scss'
})
export class CompletedQuizzesComponent implements OnInit {
 private _MyTranslateService = inject(MyTranslateService);
  resuit!:any[];
constructor(private _ResuitsService:ResuitsService){}
  ngOnInit(): void {
    this.getResuits(); 
  }
getResuits(){
  this._ResuitsService.resuits().subscribe({
    next:(res)=>{
      console.log(res);
      this.resuit=res
    }
  })
}
}
