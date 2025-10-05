import { Component, OnInit } from '@angular/core';
import { ResuitsService } from '../../services/resuits.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-quizzes-results',
  imports: [CommonModule],
  templateUrl: './quizzes-results.component.html',
  styleUrl: './quizzes-results.component.scss'
})
export class QuizzesResultsComponent  implements OnInit{
  [x: string]: any;
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
