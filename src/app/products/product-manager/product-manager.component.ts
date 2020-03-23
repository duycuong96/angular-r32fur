import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

import { ProductService } from "../../services/product.service";
import { Product } from '../product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  selected: Product;
  products: Product[];

  constructor(
    private productService : ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.getProduct();
  }
  getProduct(){
    return this.products = this.productService.getProducts();
  }

  removeItem(id){
    this.products = this.productService.removeProduct(id);
    // this.products = this.products.filter(product => product.id != id);
  }

  showDetail(product){
    this.selected = this.productService.detailProduct(product);
  }


}
