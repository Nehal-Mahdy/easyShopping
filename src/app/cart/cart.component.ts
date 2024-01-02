import { Component} from '@angular/core';
import { CartService } from '../services/cart.service';
import { count } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.getCounterVal().subscribe((val) => (this.counter = val));
  }
  counter: number = 0;
  items = this.cartService.getItems();
  price!: number;
  
 totalPrice : number = this.items.reduce((accumulator, item) => {
    return accumulator + item.price;
  }, 0);

  removeitem(item : any, index: number) {
    this.cartService.removeitem(index);
    this.totalPrice = this.totalPrice - item.price
  }

  increaseQuantity(item: any, i: number) {
    this.price= item.price
    this.cartService.setCounterVal(++this.counter)
    item.quantity = this.counter
    item.price= this.price * item.quantity;
    this.totalPrice = this.totalPrice+this.price
    console.log(item);
  }

  decrease(item: any,i: number) {
    this.cartService.setCounterVal(--this.counter);
    item.price= item.price - this.price;
  }
  clearCart(){
    this.items=[]
    this.totalPrice=0;
  }
}
