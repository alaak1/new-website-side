// src/app/products/products.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule }                from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsRoutingModule }       from './products-routing.module';

import { ProductListComponent }    from './product-list/product-list.component';
import { ProductCardComponent }    from './product-card/product-card.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { ProductFilterComponent }  from './product-filter/product-filter.component';
import { BestSellersComponent }    from './best-sellers/best-sellers.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ProductFilterComponent,
    BestSellersComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]    // ← Add this line!
})
export class ProductsModule {}
