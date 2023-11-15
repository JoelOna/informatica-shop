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
    prod_img: ''
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.product = productsJSON.find((prod:any)=> prod.id == id)
    console.log(this.product)
    this.title.setTitle(`${this.product.prod_name} | Informatica shop`)
  }
}
