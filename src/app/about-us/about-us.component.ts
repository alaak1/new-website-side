import {
  AfterViewInit,
  Component,
  NgZone,
  OnInit,
} from '@angular/core';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

interface Stat {
  label: string;
  value: string;
  update: string;
}

interface Section {
  id: string;
  name: string;
  stats: Stat[];
}

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit, AfterViewInit {
  sections: Section[] = [
    {
      id: 'palestine',
      name: 'Palestine',
      stats: [
        { label: 'Years under occupation',   value: '76+',    update: 'Update: 10 Jun' },
        { label: 'Refugees displaced',      value: '7M+',    update: 'Update: 10 Jun' },
        { label: 'Civilians affected',      value: '5M+',    update: 'Update: 10 Jun' },
      ]
    },
  ];

  constructor(private ngZone: NgZone) {
    gsap.registerPlugin(ScrollTrigger);
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.sections.forEach(sec => {
        const sectionEl = document.getElementById(sec.id)!;
        const items = Array.from(sectionEl.querySelectorAll<HTMLElement>('.stat-item'));
        const totalScroll = window.innerHeight * items.length;

        // Build a timeline for this section
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionEl,
            start: 'top top',
            end: `+=${totalScroll}`,
            scrub: true,
            pin: true,
          }
        });

        items.forEach(item => {
          const label   = item.querySelector<HTMLElement>('.stat-label')!;
          const content = item.querySelector<HTMLElement>('.stat-content')!;

          // Ensure full height start
          gsap.set(content, { height: 'auto' });

          // Collapse to the label height
          const collapsedH = label.getBoundingClientRect().height;
          tl.to(content, { height: collapsedH, ease: 'none' });
        });
      });
    });
  }
}
