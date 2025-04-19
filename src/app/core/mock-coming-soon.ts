// src/app/core/coming‑soon-products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  coolingType: 'fan' | 'rgb' | 'none';
  rgbColors: string[];
}
export const COMING_SOON_PRODUCTS: Product[] = [
  {
    id: 11,
    name: 'Kalasino RGB Performance Vest',
    price: 0, // coming soon, no price yet
    description: 'Ergonomic, form‑fitting vest with embedded RGB accents—launching soon!',
    images: [
      'assets/images/11.webp',
      'assets/images/12.webp'
    ],
    coolingType: 'none',
    rgbColors: ['blue', 'red']
  },
  {
    id: 12,
    name: 'Kalasino Smart Cap',
    price: 0, // coming soon, no price yet
    description: 'Adaptive smart cap with neon trim and integrated LED display—coming soon!',
    images: [
      'assets/images/15.webp',
      'assets/images/16.webp'
    ],
    coolingType: 'none',
    rgbColors: ['green']
  }
];
