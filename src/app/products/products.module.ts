import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductManagerComponent } from './product-manager/product-manager.component';
import { ProductAddComponent } from './product-add/product-add.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductManagerComponent,
    ProductAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductsRoutingModule,
  ]
})
export class ProductsModule { }
