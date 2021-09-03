import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()   cartItem: CartItem
  @Output() updateTotal: EventEmitter<any> = new EventEmitter(); 
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter();

  constructor() {
    this.cartItem = {
      product: new Product,
      quantity: 1
    }
   }

  ngOnInit(): void {
    
  }

  update(): void{
    this.updateTotal.emit();
  }

  remove(item: CartItem): void{
    this.removeItem.emit(item);
  }

  

}
