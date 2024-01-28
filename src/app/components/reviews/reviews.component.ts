import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { IReview } from 'src/app/interface/ireview';
import { IUser } from 'src/app/interface/iuser';
import { ReviewDataService } from 'src/app/services/review-data.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit{
  constructor(private reviews_service : ReviewDataService, private route: ActivatedRoute, private user_service:UserService){}
  reviews : IReview [] = []
  users : IUser[] = []
  user_review : any[] = []
  ngOnInit(): void {
    this.getReviews()
  }

private getReviews(): void {
  const product_id = this.route.snapshot.paramMap.get('id');

  this.reviews_service.getReviews(product_id).subscribe(
    (resp) => {
      if (resp.body) {
        this.reviews = resp.body.data;

        // Create an array of observables for user requests
        const userObservables = this.reviews.map((element) =>
          this.user_service.getUserById(element.review_user_id)
        );

        // Use forkJoin to wait for all user requests to complete
        forkJoin(userObservables).subscribe(
          (userResponses) => {
            // Extract user data from responses
            const users = userResponses.map((userResponse) => userResponse.body.data[0]);

            // Combine reviews with corresponding users
            this.user_review = this.reviews.map((review) => {
              const user_found = users.find((user) => user.id === review.review_user_id);
              return { review, user: user_found };
            });

            console.log(this.user_review);
          },
          (error) => {
            console.error(error);
          }
        );
      }
    },
    (error) => {
      console.error(error);
    }
  );
}
}