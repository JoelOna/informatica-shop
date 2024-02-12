import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
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

  public addReview(data:any , user_id:any, product_id:any):Observable<HttpResponse<any>>{
    return this._http.post(environment.apiUrl+`review`,{review_description:data.review_description,review_title:data.review_title,review_rate:data.review_rate,review_user_id:user_id,review_product_id:product_id},{observe:'response'})
  }

  public getReviewUser(user_id:any , token:string):Observable<HttpResponse<any>>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.get(environment.apiUrl+`reviews/user/${user_id}`,{headers,observe:'response'})
  }

  public deleteReview(review_id:any, token:string):Observable<HttpResponse<any>>{
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    return this._http.delete(environment.apiUrl+ `reviews/delete/${review_id}`,{headers,observe:'response'})
  }
}
