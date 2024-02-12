import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IReview } from 'src/app/interface/ireview';
import { IUser } from 'src/app/interface/iuser';
import { CookieDataService } from 'src/app/services/cookie-data.service';
import { ReviewDataService } from 'src/app/services/review-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.scss']
})
export class UserReviewComponent implements OnInit{
  constructor(private user_service: UserService, private route: ActivatedRoute, private cookie_service :CookieDataService, private review_service: ReviewDataService){}
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
  reviews :IReview[] = []
  ngOnInit(): void {
    const token = JSON.parse(this.cookie_service.getCookie('token','token-encrypt'))
    const user_id = this.cookie_service.getCookie('user','cookie-encrypt')
    console.log(token)
    this.getUser(user_id)
    this.getReviews(user_id,token)
  }

  private getUser(user_id:string):void{
    this.user_service.getUserById(user_id).subscribe(
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

  private getReviews(user_id:any,token:string):void{
    this.review_service.getReviewUser(user_id,token).subscribe(
      resp =>{
        if (resp.body) {
          console.log(resp.body)
          this.reviews = resp.body.data
        }
      },
      error=>{
        console.error(error)
      }
    )
  }

  public deleteReview(review_id:any):void{
    const token = JSON.parse(this.cookie_service.getCookie('token','token-encrypt'))
    this.review_service.deleteReview(review_id,token).subscribe(
      resp=>{
        console.log(resp.body)
      },
      error=>{
        console.error(error)
      }
    )
  }
}
