import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList: CartItem[] = []
  total: number = 0;
  fullName: string = '';
  address: string = '';
  creditCard: string = '';

  constructor(private cartService: CartService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.cartList = this.cartService.getCart();
    this.total = this.cartList.map(cart => cart.product.price * cart.quantity).reduce((a, b) => a+b, 0)
  }

  updateTotal(): void {
    this.total = this.cartList.map(cart => cart.product.price * cart.quantity).reduce((a, b) => a+b, 0)
  }

  onSubmit(): void {
    this.router.navigate(['confirmation'],  {state: {total: this.total, fullName: this.fullName}})
  }
}
