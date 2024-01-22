import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from 'src/app/interface/icategory';
import { CategoryDataService } from 'src/app/services/category-data.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit{
  constructor(private category_service:CategoryDataService){}
  categories: ICategory[] = []
  @Input() main_dashboard: boolean = true

  ngOnInit(): void {
    this.getCategories()
  }

  private getCategories(): void{
    this.category_service.getCategories().subscribe(
      resp =>{
        if (resp.body) {
          this.categories = resp.body.data
        }
      },
      error=>{

      }
    )
  }
}
