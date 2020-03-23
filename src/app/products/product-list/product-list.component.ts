import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators'
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products$: Observable <Product[]>;
  selectedId: number;

  constructor(
    private productService : ProductService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.products$ = this.route.paramMap.pipe(
      switchMap(
        params => {
          this.selectedId = +params.get('id');
          return this.productService.getProducts();
        }
      )
    )
  }

}
