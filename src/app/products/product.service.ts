import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product';
import { PRODUCT } from './mock-products';


@Injectable({
  providedIn: 'root',
})
export class ProductService {

  products = PRODUCT;

  constructor() { }

  getProducts(): Observable<Product[]> {

    return of(PRODUCT);
  }

  getProduct(id: number | string) {
    return this.getProducts().pipe(
      // (+) before `id` turns the string into a number
      map((products: Product[]) => products.find(product => product.id === +id))
    );
  }

  removeProduct(id){
    return this.products = this.products.filter(
      product => product.id != id
    )
  }
}
