import { Component, AfterViewInit } from '@angular/core';
import Lenis from '@studio-freight/lenis';
import barba from '@barba/core';
import { register } from 'swiper/element/bundle';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'kalasino';

  constructor() {
    register();
  }

  ngAfterViewInit() {
    // Initialize Barba.js with typed callbacks
    barba.init({
      sync: true,
      transitions: [
        {
          name: 'fade',
          leave({ current }: { current: any }) {
            return current.container.animate(
              [{ opacity: 1 }, { opacity: 0 }],
              { duration: 300 }
            ).finished;
          },
          enter({ next }: { next: any }) {
            return next.container.animate(
              [{ opacity: 0 }, { opacity: 1 }],
              { duration: 300 }
            ).finished;
          },
        },
      ],
    });

    // Smooth scroll with Lenis
    // @ts-ignore
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
    });

    const animate = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }
}
