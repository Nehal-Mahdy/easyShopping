import { Component } from '@angular/core';
import { Product } from '../interface/product';
import productData from '../../assets/products.json';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  // products : Array<Product> = productData

  products!: Product[];

  constructor(private productService: ProductsService) {}

  ngOnInit() {
    this.productService
      .getProductList()
      .subscribe((data) => (this.products = Object.entries(data)[0][1]));
  }
}
