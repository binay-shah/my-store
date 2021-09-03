import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../../models/Product'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product
  quantity: number = 1

  constructor( private cartService: CartService) { 
    this.product = {
      id: 1,
      name: '',
      price: 100,
      url: '',
      description: '',
    }
  }

  ngOnInit(): void {
    
}

addToCart(): void{
  const cartItem = {
    product: this.product,
    quantity: this.quantity,
  }
  this.cartService.addToCart(cartItem)
  alert("Added to cart");
}

  
}
