import { Component } from '@angular/core';
import { Product } from '../interface/product';
import productData from '../../assets/products.json';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  // products : Array<Product> = productData

  products : Product[] = productData

 
}
