import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList: CartItem[] = [];

  constructor() { }

  addToCart(cartItem: CartItem): void {
    
    if(this.cartList.length !== 0) {
    this.cartList.forEach(item => {
      if(item.product.id === cartItem.product.id){
        item.quantity = cartItem.quantity
      }else{
        this.cartList.push(cartItem)
      }
    })
  }else{
    this.cartList.push(cartItem)
  }
    
  }

  getCart(): CartItem[] {
    return this.cartList
  }
}
