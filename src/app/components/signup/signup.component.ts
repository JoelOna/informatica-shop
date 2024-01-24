import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieDataService } from 'src/app/services/cookie-data.service';
import { SignupService } from 'src/app/services/signup.service';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  myForm:FormGroup
  constructor (private signup_service:SignupService, private formBuilder:FormBuilder, private router:Router, private cookieService:CookieDataService){
    this.myForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: '',
      password: '',
      user_name: '',
      name: '',
      last_name: ''
    })
  }

  onSubmit():void{
    const formData = new FormData()
    const email = this.myForm.get('email')
    const password = this.myForm.get('password')
    const user_name = this.myForm.get('user_name')
    const name = this.myForm.get('name')
    const last_name = this.myForm.get('last_name')

    if (email && password && user_name && name && last_name) {
      formData.append('email',email.value)
      formData.append('password',password.value)
      formData.append('user_name',user_name.value)
      formData.append('name',name.value)
      formData.append('last_name',last_name.value)
    }

    this.signup_service.signup(formData).subscribe(
      resp=>{
        console.log(resp)
        const id_enrcypted = CryptoJS.AES.encrypt(JSON.stringify(resp.body.data.id), 'cookie-encrypt').toString()
        console.log(id_enrcypted)
        this.cookieService.setCookie('user',id_enrcypted)
        if (resp.body.data.user_type_id <= 2) {
          this.router.navigate(['ifshop-admin'])
        }else{
          this.router.navigate(['/usuario/',resp.body.data.user_name])
        }
      },error=>{

      }
    )
  }
}
