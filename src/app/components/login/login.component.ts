import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { CookieDataService } from 'src/app/services/cookie-data.service';
import { LoginDataService } from 'src/app/services/login-data.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm:FormGroup;
  constructor(private login_service: LoginDataService, private formBuilder:FormBuilder, private router: Router, private cookie:CookieService, private cookieService:CookieDataService){
    this.myForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email : '',
      password : ''
    })
    console.log('cookie value ',this.cookieService.getCookie('user','cookie-encrypt'))
    
  }

  onSubmit():void{
    const formData = new FormData()
    const email = this.myForm.get('email')
    const password = this.myForm.get('password')

    if (email && password) {
      formData.append('email',email.value)
      formData.append('password',password.value)
    }
    console.log(formData)
    this.login_service.login(formData).subscribe(
      response=>{
        const id_enrcypted = CryptoJS.AES.encrypt(JSON.stringify(response.body.data.id), 'cookie-encrypt').toString()
        console.log(id_enrcypted)
        this.cookieService.setCookie('user',id_enrcypted)
        if (response.body.data.user_type_id <= 2) {
          this.router.navigate(['ifshop-admin'])
        }else{
          this.router.navigate(['/usuario/',response.body.data.user_name])
        }
       
      },
      error=>{
        console.log(error)
      }
    )
  }
}
