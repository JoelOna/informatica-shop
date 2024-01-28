import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';

@Injectable({
  providedIn: 'root'
})
export class ReviewDataService {

  constructor(private _http :HttpClient) { }

  public getReviews(product_id:any):Observable<HttpResponse<any>>{
    return this._http.get(environment.apiUrl+`reviews/${product_id}`, { observe: 'response' })
  }
}
