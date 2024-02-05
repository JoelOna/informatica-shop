import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/interface/iuser';
import { CookieDataService } from 'src/app/services/cookie-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  constructor(private user_service: UserService, private route: ActivatedRoute, private cookie_service :CookieDataService){}
  user: IUser = {
    email: '',
    id: 0,
    created_at: '',
    last_name: '',
    name: '',
    password:'',
    user_name: '',
    user_product_id:0,
    user_type_id:0
  };

  ngOnInit(): void {
    const user_name:any = this.route.snapshot.paramMap.get('user_name')
   
    this.getuser(user_name)
  }

  getuser(user_name:string):void{
    const token = JSON.parse(this.cookie_service.getCookie('token','token-encrypt'))
    this.user_service.getUserByName(user_name,token).subscribe(
      resp=>{
        console.log(resp)
        if (resp.body) {
          this.user = resp.body.data
        }
      },error=>{
        console.log(error)
      }
    )
  }
}
