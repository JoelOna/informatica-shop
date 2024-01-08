import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private product_service: ProductDataService) { }

  public addToCart(product_id: number, quantity:number){
    this.product_service.getProduct(product_id).subscribe(
      response => {
        if (response.body) {
          const storedCartString = localStorage.getItem('cart');
          const cart = storedCartString ? JSON.parse(storedCartString) : [];

          const existingItem  = cart.find((item:any) => item.id === product_id)

          if (existingItem) {
            existingItem.quantity += quantity
          }
          cart.push({product_id, quantity})
          localStorage.setItem('cart', JSON.stringify(cart))
        }
      },
      error =>{
        return undefined
      }
    )
  }

  public removeFromCart(product_id: number, quantity:number){
     const storedCart = localStorage.getItem('cart')

     const cart = storedCart ? JSON.parse(storedCart) : []

     if (cart) {
      const existingItem  = cart.find((item:any) => item.product_id === product_id)
     
      if (existingItem) {
        const index = cart.indexOf(existingItem);
        cart.splice(index, 1);
        localStorage.removeItem('cart')
        localStorage.setItem('cart',JSON.stringify(cart))
      }
     }
  }

  public getItemsFromCart(): any{
    const storedCart = localStorage.getItem('cart')

    const cart = storedCart ? JSON.parse(storedCart) : []
    let cart_items:any = []

    for (let i = 0; i < cart.length; i++) {
      const element = cart[i];
      let existingIndex = -1;

      for (let j = 0; j < cart_items.length; j++) {
        if (element.product_id === cart_items[j].product_id) {
          existingIndex = j;
          break;
        }
      }
      if (existingIndex !== -1) {
        // Si el producto ya está en cart_items, sumar la cantidad
        cart_items[existingIndex].quantity += element.quantity;
      } else {
        // Si el producto no está en cart_items, agregarlo
        cart_items.push(element);
      }
    }
    return cart_items
  }
}
