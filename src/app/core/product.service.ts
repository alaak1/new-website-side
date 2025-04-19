// src/app/core/product.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from './mock-products';
import { MOCK_PRODUCTS } from './mock-products';
import { COMING_SOON_PRODUCTS } from './mock-coming-soon';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /** All “live” products */
  getAll(): Observable<Product[]> {
    return of(MOCK_PRODUCTS);
  }

  /** Single live product by its id */
  getById(id: number): Observable<Product|undefined> {
    return of(MOCK_PRODUCTS.find(p => p.id === id));
  }

  /** All “coming soon” products */
  getComingSoon(): Observable<Product[]> {
    return of(COMING_SOON_PRODUCTS);
  }

  /** Single coming‑soon product by its id */
  getComingSoonById(id: number): Observable<Product|undefined> {
    return of(COMING_SOON_PRODUCTS.find(p => p.id === id));
  }
}
