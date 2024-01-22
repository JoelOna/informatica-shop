import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private _http: HttpClient) { }
  
  public signup(data:any): Observable<HttpResponse<any>>{
    return this._http.post( environment.apiUrl + 'signup',data, { observe: 'response' });
  }
}
