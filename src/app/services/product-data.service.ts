import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environmet';
import { IProduct } from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private _http: HttpClient) { }
    
  public getCharacters(url?:string): Observable<HttpResponse<any>>{
    const finalUrl = url || environment.apiUrl+ 'products'
    return this._http.get(finalUrl, { observe: 'response' });
  }
  public insertProduct(product:IProduct): Observable<HttpResponse<any>>{
    return this._http.post(environment.apiUrl+`product`,product, { observe: 'response' });
  }

  public updateProduct(product:IProduct): Observable<HttpResponse<any>>{
    return this._http.put(environment.apiUrl+`product`, product, { observe: 'response' });
  }

  public deleteProduct(id:number, userID:any): Observable<HttpResponse<any>>{
    return this._http.delete(environment.apiUrl+`product/${id}`, { body: userID,observe: 'response' });
  }
 
}
