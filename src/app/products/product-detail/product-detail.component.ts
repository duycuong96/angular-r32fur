import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService }  from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product$: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProductService

  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.product$ = this.service.getProduct(id);
  }

  gotoProducts(product: Product){
    let productId = product ? product.id : null;
    this.router.navigate(['/products', {id: productId, foo: 'foo'}]);
  }

}
