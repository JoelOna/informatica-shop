import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interface/iproduct';
import productsJSON from '../../mok/products.json'
import { Title } from '@angular/platform-browser';
import { ProductDataService } from 'src/app/services/product-data.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  constructor(private route: ActivatedRoute,private title:Title, private cart_service:CartService, private product_service: ProductDataService){}
  
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
    let id:any = this.route.snapshot.paramMap.get('id')
    id = parseInt(id)
    this.getProduct(id)
  }

  getProduct(id:number): void{
    this.product_service.getProduct(id).subscribe(
      response =>{
        if (response.body) {
          this.product = response.body.data
          this.title.setTitle(`${this.product.prod_name} | Informatica shop`)
        }
      }
    )
  }

  addToCart():void{
    this.cart_service.addToCart(this.product.id,1)
  }

  removeFromCart():void{
    this.cart_service.removeFromCart(this.product.id,1)
  }
}
