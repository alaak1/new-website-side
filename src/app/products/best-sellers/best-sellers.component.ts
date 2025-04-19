import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit
} from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Product } from '../../core/mock-products';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ProductService } from '../../core/product.service';

register();  // defines <swiper-container> and <swiper-slide>
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-best-sellers',
  templateUrl: './best-sellers.component.html',
  styleUrls: ['./best-sellers.component.css'],
})
export class BestSellersComponent implements OnInit, AfterViewInit {
  best: Product[] = [];

  constructor(
    private productService: ProductService,
    private ngZone: NgZone
  ) {}

  ngOnInit() {
    this.productService.getAll().subscribe(list => {
      this.best = list.sort(() => 0.5 - Math.random()).slice(0, 5);
    });
  }

  ngAfterViewInit() {
    // GSAP reveal: fade up + scale in
    gsap.from('.best-sellers-section', {
      scrollTrigger: {
        trigger: '.best-sellers-section',
        start: 'top 70%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      scale: 0.4,
      duration: 1.5,
      ease: 'power2.out'
    });
  }

}
