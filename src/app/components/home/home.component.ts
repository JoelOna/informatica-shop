import { Component, OnInit } from '@angular/core';
import productJSON from '../../mok/products.json'
import { IProduct } from 'src/app/interface/iproduct';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(){}
  data: any = productJSON
  mostView: IProduct[] = []
  filterCat: string = ''
  
  ngOnInit(): void {
    this.mostView = this.data
    this.mostView = this.mostView.splice(0,3)
  }
   
}
