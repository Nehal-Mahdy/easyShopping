import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productData from '../../assets/products.json';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  constructor(
    private activeRoute: ActivatedRoute,
    private productDetail: ProductsService,
    private cartService: CartService
  ) {}

  productId: any={};
  ngOnInit() {
    const paramsId = this.activeRoute.snapshot.params['id'];
    this.productDetail
      .getProductDetails(paramsId)
      .subscribe((data) => (this.productId = data));
  }
  addTocart(product: any) {
    this.cartService.addToCart(product);
    console.log(product);
    // window.alert('Your product has been added to the cart!');
  }
}
