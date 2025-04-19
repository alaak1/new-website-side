import {Component, ElementRef, HostListener, Input} from '@angular/core';
import { Product } from '../../core/mock-products';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onHover() {
    gsap.to(this.el.nativeElement, { scale: 1.03, duration: 0.2, ease: 'power1.out' });
  }

  @HostListener('mouseleave')
  onLeave() {
    gsap.to(this.el.nativeElement, { scale: 1, duration: 0.2, ease: 'power1.in' });
  }
}
