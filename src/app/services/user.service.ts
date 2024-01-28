import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }
  
  public getUserByName(user_name:string): Observable<HttpResponse<any>>{
    return this._http.get( environment.apiUrl + `user/${user_name}`, { observe: 'response' });
  }
  public getUserById(id:any): Observable<HttpResponse<any>>{
    return this._http.get( environment.apiUrl + `user-review/${id}`, { observe: 'response' });
  }
}
