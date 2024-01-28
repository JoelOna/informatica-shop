import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewDataService } from 'src/app/services/review-data.service';

@Component({
  selector: 'app-review-stadistics',
  templateUrl: './review-stadistics.component.html',
  styleUrls: ['./review-stadistics.component.scss']
})
export class ReviewStadisticsComponent implements OnInit{

  constructor(private review_service:ReviewDataService, private route: ActivatedRoute){}

  total_reviews:number = 0
  average:number = 0
  average_star:number = 0
  white_star: number = 0
  one:number = 0
  two:number = 0
  three: number = 0
  four: number = 0
  five: number = 0
  
  ngOnInit(): void {
    this.getInfo()
  }

  getInfo():void{

      const product_id = this.route.snapshot.paramMap.get('id')
      this.review_service.getReviews(product_id).subscribe(
        resp => {
          if (resp.body) {
            this.total_reviews = resp.body.data.length

            for (let index = 0; index < this.total_reviews; index++) {
              this.average += resp.body.data[index].review_rate
              switch (resp.body.data[index].review_rate){
                case 1:
                  this.one++
                  break;
                case 2:
                  this.two++
                  break;
                case 3:
                  this.three++
                  break;
                case 4:
                  this.four++
                  break;
                case 5:
                  this.five++
                  break;
              }
            }
            this.average /= this.total_reviews
            this.average_star = Math.floor(this.average);
            this.white_star = 5 - this.average_star
            console.log(this.white_star)
            this.one = (this.one / this.total_reviews) * 100;
            this.two = (this.two / this.total_reviews) * 100;
            this.three = (this.three / this.total_reviews) * 100;
            this.four = (this.four / this.total_reviews) * 100;
            this.five = (this.five / this.total_reviews) * 100;
            console.log(this.three)
          }
        },
        error=>{

        }
      )
  }
  createRange(number: number): number[] {
    return new Array(number);
  }
  

}
