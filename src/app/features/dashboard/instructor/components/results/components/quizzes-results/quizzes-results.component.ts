import { Component, OnInit,inject } from '@angular/core';
import { ResuitsService } from '../../services/resuits.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MyTranslateService } from '../../../../../../../core/services/my-translate.service';
import { SharedModule } from '../../../../../../../Shared/shared.module';
import { AuthRoutingModule } from "../../../../../../auth/auth-routing.module";
@Component({
  selector: 'app-quizzes-results',
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  templateUrl: './quizzes-results.component.html',
  styleUrl: './quizzes-results.component.scss'
})
export class QuizzesResultsComponent  implements OnInit{
  [x: string]: any;
   private _MyTranslateService = inject(MyTranslateService);
constructor(private _ResuitsService:ResuitsService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.quizId = this.route.snapshot.paramMap.get('id')!;
    this.getResuits(this.quizId); 
  }
   quizId!: string;
    resuit!:any;
  getResuits(id:string){
  this._ResuitsService.resuitsid(id).subscribe({
    next:(res)=>{
      console.log(res);
      this.resuit=res
    }
  })
}


}
