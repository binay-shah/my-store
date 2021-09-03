import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  product: Product
  quantity: number = 1

  constructor(private cartService: CartService, private productService: ProductService, private route: ActivatedRoute) { 
    this.product = {
      id: 1,
      name: '',
      price: 100,
      url: '',
      description: '',
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') as string) as number
      this.productService.getProducts().subscribe(data => {
        
         this.product = data.filter(p => p.id === id)[0]
    })

  });
  }

  addToCart(): void{
    const cartItem = {
      product: this.product,
      quantity: this.quantity,
    }
    this.cartService.addToCart(cartItem);
    alert("added to cart")
  }

}
