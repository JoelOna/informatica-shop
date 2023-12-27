import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class CategoryDataService {

  constructor(private _http: HttpClient) { }

  public getCategories(): Observable<HttpResponse<any>> {
    return this._http.get(environment.apiUrl+'categories',{observe:'response'})
  }
}
