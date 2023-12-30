import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService {

  constructor(private _http: HttpClient) { }

  public login(data:any): Observable<HttpResponse<any>>{
    return this._http.post( environment.apiUrl + 'login',data, { observe: 'response' });
  }
}
