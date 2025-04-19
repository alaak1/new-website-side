// src/app/products/product-list/product-list.component.ts
import { AfterViewInit, Component } from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ProductService } from '../../core/product.service';
import { Product } from '../../core/mock-products';
import {FilterCriteria} from "../product-filter/product-filter.component";
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements AfterViewInit {
  allProducts: Product[] = [];
  filtered: Product[] = [];
  comingSoon: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe(list => {
      this.allProducts = list;
      this.filtered = list;
    });
    this.productService.getComingSoon().subscribe(list => (this.comingSoon = list));
  }

  onFilter(criteria: FilterCriteria) {
    const term = criteria.search.toLowerCase();
    this.filtered = this.allProducts.filter(p => {
      const matchesSearch = p.name.toLowerCase().includes(term);
      const matchesCooling =
        criteria.coolingType === 'all' ||
        (criteria.coolingType === 'fan' && p.coolingType === 'fan') ||
        (criteria.coolingType === 'none' && p.coolingType !== 'fan');
      return matchesSearch && matchesCooling;
    });
  }


  ngAfterViewInit() {
    // We'll animate both grids
    ['.available-grid', '.coming-grid'].forEach(gridSelector => {
      const container = document.querySelector(gridSelector);
      if (!container) return;

      // Collect all cards and group them by their top offset
      const cards: HTMLElement[] = Array.from(container.querySelectorAll('.product-card'));
      const rows = new Map<number, HTMLElement[]>();
      cards.forEach(card => {
        const y = card.offsetTop;
        if (!rows.has(y)) rows.set(y, []);
        rows.get(y)!.push(card);
      });

      // For each row-of-cards, tween them when that row scrolls into view
      Array.from(rows.values()).forEach((rowEls, rowIndex) => {
        gsap.from(rowEls, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power2.out',
          stagger: 0.1,

          // Delay each row a bit more, if you like
          delay: rowIndex * 0.2,

          scrollTrigger: {
            trigger: rowEls[0],
            start: 'top 85%',
            toggleActions: 'play none none reset'
          }
        });
      });
    });
  }
}
