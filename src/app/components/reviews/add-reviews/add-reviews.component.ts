import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieDataService } from 'src/app/services/cookie-data.service';
import { ReviewDataService } from 'src/app/services/review-data.service';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.scss']
})
export class AddReviewsComponent implements OnInit{
  @Input() product_id : any = ''
  myForm:FormGroup;
  constructor(private review_service:ReviewDataService, private cookie_service:CookieDataService, private formBuilder:FormBuilder ){
    this.myForm = new FormGroup({})
  }
ngOnInit(): void {
  this.myForm = this.formBuilder.group({
    review_description : '',
    review_title : 'product test',
    review_rate: '2'
  })
}
  onSubmit():void{
    const user_id = this.cookie_service.getCookie('user','cookie-encrypt')
    const formData = new FormData()

    const review_description = this.myForm.get('review_description')
    const review_rate = this.myForm.get('review_rate')
    const review_title = this.myForm.get('review_title') 

    if (review_description && review_rate && review_title) {
      formData.append('review_description',review_description.value)
      formData.append('review_rate',review_rate.value)
      formData.append('review_title',review_title.value)
    }
    console.log(formData)
    this.review_service.addReview(formData,user_id,this.product_id).subscribe(
      resp=>{
        console.log(resp)
      },error=>{
        console.error(error)
      }
    )
  }
}
