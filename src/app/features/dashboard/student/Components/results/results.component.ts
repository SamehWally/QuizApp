import { Component } from '@angular/core';
import { QuizzesService } from '../../services/quizzes.service';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-results',
  imports: [TableModule,DatePipe,TranslatePipe],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss'
})
export class ResultsComponent {
constructor(private _quizservices:QuizzesService){}
results:any[]=[];
ngOnInit(): void {
this.getResults();
}
getResults(){
  this._quizservices.getResult().subscribe({
    next:(res)=>{
      console.log(res);
      this.results =res;
    }
  })
}
}
