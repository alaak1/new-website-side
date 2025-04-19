import { Component, OnInit } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  image: string;
  rate: number;
  unit: string;
  quantity: number;
  total: number;
  discount?: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal = 0;
  vat = 0;
  total = 0;
  couponCode = '';

  ngOnInit() {
    // Placeholder demo data; replace with your CartService
    this.cartItems = [
      { id:1, name:'RGB Fan Shorts', image:'/assets/images/1.webp', rate:1, unit:'1,000', quantity:1, total:12.12 },
      { id:2, name:'RGB Cooling Hat', image:'/assets/images/16.webp', rate:1, unit:'90,000', quantity:1, total:50.1 },
    ];
    this.recalculate();
  }

  increase(item: CartItem) {
    item.quantity++;
    this.updateItem(item);
  }
  decrease(item: CartItem) {
    if (item.quantity > 1) {
      item.quantity--;
      this.updateItem(item);
    }
  }
  remove(item: CartItem) {
    this.cartItems = this.cartItems.filter(i => i.id !== item.id);
    this.recalculate();
  }

  applyCoupon() {
    // TODO: validate code, recalc totals
    alert(`Coupon applied: ${this.couponCode}`);
  }

  private updateItem(item: CartItem) {
    const base = item.rate * item.quantity;
    item.total = item.discount
      ? +(base * (1 - item.discount)).toFixed(2)
      : +base.toFixed(2);
    this.recalculate();
  }

  private recalculate() {
    this.subtotal = this.cartItems.reduce((sum, i) => sum + i.total, 0);
    this.vat = +(this.subtotal * 0.05).toFixed(2);
    this.total = +(this.subtotal + this.vat).toFixed(2);
  }
}
