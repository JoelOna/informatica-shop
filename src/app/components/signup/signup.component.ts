import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieDataService } from 'src/app/services/cookie-data.service';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit{
  myForm:FormGroup
  constructor (private signup_service:SignupService, private formBuilder:FormBuilder, private router:Router, private cookie_service:CookieDataService){
    this.myForm = new FormGroup({})
  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      email: '',
      password: '',
      user_name: ''
    })
  }
}
