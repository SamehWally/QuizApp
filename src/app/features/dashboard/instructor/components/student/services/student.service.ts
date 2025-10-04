import { AddEditStudentInGroupComponent } from './../student-view/components/add-edit-student-in-group/add-edit-student-in-group.component';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from '../interfaces/IStudent';
import { IStudentWithoutGroup } from '../interfaces/IStudentWithoutGroup';
import { IStudentGroup } from '../interfaces/IStudentGroup';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private readonly _HttpClient = inject(HttpClient);
  getStudents(): Observable<IStudent[]> {
    return this._HttpClient.get<IStudent[]>('student');
  }
  getStudentsWithoutGroup(): Observable<IStudentWithoutGroup[]> {
    return this._HttpClient.get<IStudentWithoutGroup[]>(
      'student/without-group'
    );
  }
  getAllGroups(): Observable<IStudentGroup[]> {
    return this._HttpClient.get<IStudentGroup[]>('group');
  }
  AddStudentInGroups(studentId: string, studentGroup: string): Observable<any> {
    return this._HttpClient.get<any>(`student/${studentId}/${studentGroup}`);
  }
  EditStudentInGroups(
    studentId: string,
    studentGroup: string
  ): Observable<any> {
    return this._HttpClient.put<any>(
      `student/${studentId}/${studentGroup}`,
      {}
    );
  }
  deleteStudentFromGroups(
    studentId: string,
    studentGroup: string
  ): Observable<any> {
    return this._HttpClient.delete<any>(`student/${studentId}/${studentGroup}`);
  }
}
