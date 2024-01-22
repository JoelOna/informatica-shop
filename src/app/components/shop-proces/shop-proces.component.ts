import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductDataService } from 'src/app/services/product-data.service';

@Component({
  selector: 'app-shop-proces',
  templateUrl: './shop-proces.component.html',
  styleUrls: ['./shop-proces.component.scss']
})
export class ShopProcesComponent implements OnInit{
  constructor(private cart_service : CartService, private product_data: ProductDataService){}

  items_id: any = []
  items: any[] = []

  ngOnInit(): void {
    this.getItems()
  }

  getItems(): void{
   this.items_id =  this.cart_service.getItemsFromCart()
  
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
