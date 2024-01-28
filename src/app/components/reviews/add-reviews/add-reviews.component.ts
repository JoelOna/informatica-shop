import { Component } from '@angular/core';
import { ReviewDataService } from 'src/app/services/review-data.service';

@Component({
  selector: 'app-add-reviews',
  templateUrl: './add-reviews.component.html',
  styleUrls: ['./add-reviews.component.scss']
})
export class AddReviewsComponent {
  constructor(private review_service:ReviewDataService){}

  onSubmit():void{
    
  }
}
