import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private cartService : CartService){}

  itemCount(){
    return this.cartService.itemCount()
  }

}
