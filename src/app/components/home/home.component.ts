import { Component, ElementRef, OnInit } from '@angular/core';
import productJSON from '../../mok/products.json'
import { IProduct } from 'src/app/interface/iproduct';
import { CategoryDataService } from 'src/app/services/category-data.service';
import { ICategory } from 'src/app/interface/icategory';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private categoryService:CategoryDataService, private elementRef: ElementRef){}
  data: any = productJSON
  mostView: IProduct[] = []
  filterCat: string = ''
  categories:ICategory[] = []

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe(
      resp=>{
        if (resp.body != null) {
          this.categories = resp.body.data
        }
        const category_list = this.elementRef.nativeElement.querySelectorAll('li')
        console.log(category_list)
      },error =>{

      }
    );
  }
   
}
