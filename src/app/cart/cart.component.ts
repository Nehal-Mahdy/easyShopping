import { Component ,OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
 constructor(private cartService:CartService){}
 items = this.cartService.getItems();
quantity !: number;
price !: number;
 addTocart(item :any){
  this.cartService.addToCart(item)
  // window.alert('Your product has been added to the cart!');
}

removeitem(index: number) {
  this.cartService.removeitem(index);
}


increaseQuantity(item : any, i : number){
this.quantity =  this.items[i].quantity++;
this.price = this.items[i].price;
this. price= this.quantity * this.items[i].price

}


decrease(item:any, i:number){
  this.quantity =  this.items[i].quantity--;
  this.price = this.items[i].price;
  this. price= this.quantity * this.items[i].price
}

}
