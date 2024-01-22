import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieDataService {

  constructor() { }

  public setCookie(ame: string, val: string):void{
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
  }

  // public getCookie(name:string):any{
  //   const value = "; " + document.cookie;
  //   const parts = value.split("; " + name + "=");
    
  //   if (parts.length == 2) {
  //       return parts.pop().split(";").shift();
  //   }
  // }
}
