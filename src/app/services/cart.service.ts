import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  private counter = new BehaviorSubject<number>(1);
  getCounterVal() {
    return this.counter.asObservable();
  }
  setCounterVal(newVal: number) {
    this.counter.next(newVal);
  }

  items: Product[] = [];
  addToCart(product: Product) {
    if ('cart' in localStorage) {
      this.items = JSON.parse(localStorage.getItem('cart')!);
      let existed = this.items.find((item) => item.id == product.id);
      if (existed) {
        alert('product already added to cart');
      } else {
        this.items.push(product);
        localStorage.setItem('cart', JSON.stringify(this.items));
      }
    } else {
      this.items.push(product);
      localStorage.setItem('cart', JSON.stringify(this.items));
    }
  }
  removeItemFromCart(item: any) {
    const index = this.items.indexOf(item);
    if (index >= 0) {
      this.items.splice(index, 1);
    }
  }
  getItems() {
    return this.items;
  }

  itemCount() {
    return this.items.length;
  }

  removeitem(index: number) {
    this.items.splice(index, 1);
  }
}
