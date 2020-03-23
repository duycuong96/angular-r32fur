import { Injectable } from '@angular/core';
import { PRODUCT } from '../products/mock-products';
import { Product } from '../products/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selected: Product;
  products = PRODUCT;



  constructor() { }

  getProducts(){
    return this.products;
  }

  removeProduct(id){
    return this.products = this.products.filter(
      product => product.id != id
    )
  }

  detailProduct(product){
    return this.selected = product;
  }

  addProduct(product){

    let fakeObj = {id: 13, ...product};

    //  let maxId = 0;
    // this.products.forEach(function(item){
    //   if(item.id >= maxId){
    //     maxId = item.id;
    //   }
    // }),

    this.products.push(fakeObj);
    // console.log(this.products);

  }

  getProduct(id: Number){
    let product = this.products.find(product => product.id === id);
    if(product){
      return product;
    } else {
      throw Error('Not found');
    }
  }

}
