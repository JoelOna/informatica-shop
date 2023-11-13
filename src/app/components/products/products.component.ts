import { Component, OnInit,Input  } from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';
import productJSON from '../../mok/products.json'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  constructor(){}
  products: IProduct[] = []
  data: any = productJSON;
  @Input() mostViewed: boolean = false
  @Input() filterCat : string = ''
  ngOnInit(): void {
    this.products = this.data
    if (this.mostViewed) {
      this.products = this.products.slice(0,4)
    }

    if (this.filterCat  ) {
      
    }
  }
}
