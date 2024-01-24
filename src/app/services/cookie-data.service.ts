import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CookieDataService {

  constructor() { }

  public setCookie(name: string, val: string):void{
    const date = new Date();
    const value = val;

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
  }

  public getCookie(cname: string, encrypt_code: string): any {
    let name = cname + "=";
    let cookies = document.cookie.split(';');

    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == ' ') {
        cookie = cookie.substring(1);
      }

      if (cookie.indexOf(name) == 0) {
        let encryptedValue = cookie.substring(name.length, cookie.length);
        let decryptedValue = CryptoJS.AES.decrypt(encryptedValue, encrypt_code).toString(CryptoJS.enc.Utf8);
        return decryptedValue;
      }
    }

    return "";
  }

  public delCookie(name:string):void {
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}
