import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }     from '@angular/router';
import { register }           from 'swiper/element/bundle';

import { Product }            from '../../core/mock-products';
import { ProductService }     from '../../core/product.service';

register(); // Swiper web‑components

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  carouselImages: string[] = [];
  relatedProducts: Product[] = [];

  // New
  sizes = ['S','M','L','XL'];
  selectedSize: string = 'M';
  quantity = 1;

  // Static specs
  specs = [
    { key: 'Material', value: '100% Cotton + LED polymer' },
    { key: 'Care',     value: 'Hand wash cold; line dry' },
    { key: 'Origin',   value: 'Designed in USA, Assembled Overseas' },
    { key: 'Weight',   value: '150g (per unit)' },
    { key: 'Warranty', value: '1 Year Limited' },
  ];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getById(id).subscribe(p => {
      if (!p) return;
      this.product = p;
      this.carouselImages = Array(3).fill(p.images[0]);
    });
    this.productService.getAll().subscribe(list => {
      const others = list.filter(x => x.id !== id);
      this.relatedProducts = others.sort(() => 0.5 - Math.random()).slice(0, 3);
    });
  }

  increase() {
    this.quantity++;
  }
  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    if (!this.product) return;
    console.log(`Adding to cart: ${this.product.name}, Size=${this.selectedSize}, Qty=${this.quantity}`);
    // TODO: hook up your CartService here
  }

  share(platform: 'facebook'|'twitter'|'email') {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this product: ${this.product?.name}`);
    let shareUrl = '';
    switch(platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${text}&body=${url}`;
        break;
    }
    window.open(shareUrl, '_blank');
  }
}
