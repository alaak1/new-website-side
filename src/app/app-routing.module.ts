// src/app/app-routing.module.ts
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CartComponent} from "./cart/cart.component";
import {AboutUsComponent} from "./about-us/about-us.component";

const routes: Routes = [
  {
    path: 'products',
    loadChildren: () =>
      import('./products/products.module').then(m => m.ProductsModule)
  },
  // you can redirect the empty path to products if you like:
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'cart',      component: CartComponent           },
  { path: 'about-us', component: AboutUsComponent },
  // catch‑all
  { path: '**', redirectTo: 'products' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
