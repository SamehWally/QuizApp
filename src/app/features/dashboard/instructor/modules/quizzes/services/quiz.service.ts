import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBankQuestion } from '../interfaces/IBankQuestion';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  constructor() {}

  private readonly _HttpClient = inject(HttpClient);

  getAllGroups(): Observable<any[]> {
    return this._HttpClient.get<any[]>('group');
  }

  addQuiz(data: any): Observable<any> {
    return this._HttpClient.post('quiz', data);
  }
  getAllQuestion(): Observable<IBankQuestion[]> {
    return this._HttpClient.get<IBankQuestion[]>('question');
  }
}
