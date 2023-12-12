import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/iproduct';
import productsJSON from '../../mok/products.json'
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(private route: ActivatedRoute,private title:Title){}
  
  product: IProduct = {
    id: 0,
    prod_name: '',
    prod_description: '',
    prod_image: '',
    prod_name_en: '',
    prod_description_en:'',
    prod_price:0,
    prod_stock_quantity:0,
    prod_is_active:0,
    prod_rate:0,
    prod_opinion:'',
    prod_views:0,
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.product = productsJSON.find((prod:any)=> prod.id == id)
    console.log(this.product)
    this.title.setTitle(`${this.product.prod_name} | Informatica shop`)
  }
}
