import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IGroupRequest, IGroupResponse } from '../interfaces/groupdata';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private _http:HttpClient) { }
  getGroups():Observable<IGroupResponse[]>{
    return this._http.get<IGroupResponse[]>('group');
  }
  createGroup(data:IGroupRequest):Observable<any>{
   return this._http.post('group',data);
  }
  editGroup(id:string,data:IGroupRequest):Observable<any>{
   return this._http.put(`group/${id}`,data);
  }
  deleteGroup(id:string):Observable<any>{
  return this._http.delete(`group/${id}`);
  }
  getGroupByid(id:string):Observable<any>{
    return this._http.get(`group/${id}`);
  }
}
