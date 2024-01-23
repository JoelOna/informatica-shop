import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit{
  constructor(private user_service: UserService, private route: ActivatedRoute){}
  user: any;

  ngOnInit(): void {
    const user_name:any = this.route.snapshot.paramMap.get('user_name')
   
    this.getuser(user_name)
  }

  getuser(user_name:string):void{

    this.user_service.getUserByName(user_name).subscribe(
      resp=>{
        console.log(resp)
      },error=>{
        console.log(error)
      }
    )
  }
}
