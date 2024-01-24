import { Injectable } from '@angular/core';
import { ProductDataService } from './product-data.service';
import { CookieDataService } from './cookie-data.service';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private product_service: ProductDataService, private cookie_service: CookieDataService) { }

  public addToCart(product_id: number, quantity: number) {
    this.product_service.getProduct(product_id).subscribe(
      response => {
        if (response.body) {
          const storedCartString = this.cookie_service.getCookie('cart', 'cart-cookie');
          const cart = storedCartString ? JSON.parse(storedCartString) : [];
  
          const existingItem = cart.find((item: any) => item.id === product_id)
  
          if (existingItem) {
            existingItem.quantity += quantity;
          } else {
            cart.push({ product_id, quantity });
          }
  
          const cart_encrypted = CryptoJS.AES.encrypt(JSON.stringify(cart), 'cart-cookie').toString();
          this.cookie_service.setCookie('cart', cart_encrypted);
          // localStorage.setItem('cart', JSON.stringify(cart))
        }
      },
      error => {
        return undefined;
      }
    );
  }
  

  public removeFromCart(product_id: number, quantity:number){
     const storedCart = this.cookie_service.getCookie('cart', 'cart-cookie')

     const cart = storedCart ? JSON.parse(storedCart) : []

     if (cart) {
      const existingItem  = cart.find((item:any) => item.product_id === product_id)
     
      if (existingItem) {
        const index = cart.indexOf(existingItem);
        cart.splice(index, 1);
        this.cookie_service.delCookie('cart')
        const cart_encrypt = CryptoJS.AES.encrypt(JSON.stringify(cart),'cart-cookie').toString()
        this.cookie_service.setCookie('cart',cart_encrypt)
        // localStorage.setItem('cart',JSON.stringify(cart))
      }
     }
  }

  public getItemsFromCart(): any{
    const storedCart = this.cookie_service.getCookie('cart', 'cart-cookie')

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
