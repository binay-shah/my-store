import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartList: CartItem[] = [];

  constructor() { }

  addToCart(cartItem: CartItem): void {

    if(this.isCartEmpty()){
      this.cartList.push(cartItem)
    }else{
      if(!this.checkCartForProduct(cartItem)) {
        this.cartList.push(cartItem)
      }
    }
  }

  isCartEmpty():boolean{
    if(this.cartList.length === 0)
      return true
    else
      return false;
  }

  checkCartForProduct(cartItem: CartItem): boolean{
    for(let item of this.cartList){
      if(item.product.id === cartItem.product.id){
        item.quantity = cartItem.quantity
        return true;
      }
    }
    return false;
  }

  getCart(): CartItem[] {
    return this.cartList
  }
}
