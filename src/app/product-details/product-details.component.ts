import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import productData from '../../assets/products.json';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
constructor (private activeRoute : ActivatedRoute){}

ngOnInit(){
  console.log(this.activeRoute.snapshot.params['id'])
}

productId : any = productData[this.activeRoute.snapshot.params['id']-1]
}
