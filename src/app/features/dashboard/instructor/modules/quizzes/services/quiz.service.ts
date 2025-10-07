import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBankQuestion } from '../interfaces/IBankQuestion';
import { INewQuestion } from '../interfaces/INewQuestion';

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
  getQuestionById(id: string): Observable<INewQuestion> {
    return this._HttpClient.get<INewQuestion>(`question/${id}`);
  }
  addQuestion(data: any): Observable<INewQuestion> {
    return this._HttpClient.post<INewQuestion>('question', data);
  }
  editQuestion(data: any, id: string): Observable<INewQuestion> {
    return this._HttpClient.put<INewQuestion>(`question/${id}`, data);
  }
  deleteQuestion(id: string): Observable<any> {
    return this._HttpClient.delete(`question/${id}`);
  }
}
