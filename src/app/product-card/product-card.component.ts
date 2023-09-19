import { Component, Input } from '@angular/core';
import { Product } from '../interface/product';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Input() product !: Product; 

constructor(private router : Router, private cartService : CartService){}

goTo(id : number){
  this.router.navigate(['product-details',id])  
}

addTocart(product :any){
  this.cartService.addToCart(product)
  product.quantity++;
  this.product.price;
  console.log(this.product)
  // window.alert('Your product has been added to the cart!');
}
}
