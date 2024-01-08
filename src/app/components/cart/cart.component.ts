import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interface/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(private cart_serivce: CartService, private product_data : ProductDataService){}
  @Input() quantity: number = 0
  items_id: any = []
  items: any[] = []
  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void{
   this.items_id =  this.cart_serivce.getItemsFromCart()
  
   this.items_id.forEach((elem:any) => {
    this.product_data.getProduct(elem.product_id).subscribe(
      response =>{
        if (response.body) {
          this.items.push({data: response.body.data, quantity: elem.quantity})
          console.log(this.items)
        }
      },
      error=>{

      }
    )
   })
   
  }
}
