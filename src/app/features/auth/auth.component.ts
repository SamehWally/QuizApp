import { Component } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  language:string='En';
  changeLanguage(){
  if(this.language == 'En'){
    this.language='Ar';
  }else{
    this.language='En';
  }
  }
}
