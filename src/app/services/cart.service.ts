import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  items: Product[] = [];
 
    addToCart(product: Product) {
      this.items.push(product);
      console.log(this.items)
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
  
    itemCount(){
      return this.items.length
    }
    itemQuantity(){
      
    }
    clearCart() {
      this.items = [];
      return this.items;
    }

    removeitem(index: number){
      this.items.splice(index, 1);
  }
}
