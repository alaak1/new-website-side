// src/app/core/mock-products.ts

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  images: string[];
  coolingType: 'fan' | 'rgb' | 'none';
  rgbColors: string[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Kalasino RGB Fan Brief #1',
    price: 39.99,
    description: 'Dual micro‑fans with neon RGB accents.',
    images: ['assets/images/1.webp'],
    coolingType: 'fan',
    rgbColors: ['red', 'green', 'blue']
  },
  {
    id: 2,
    name: 'Kalasino Neon Boxer #2',
    price: 34.99,
    description: 'Full‑circumference RGB glow, cotton blend.',
    images: ['assets/images/2.webp'],
    coolingType: 'none',
    rgbColors: ['rainbow']
  },
  {
    id: 3,
    name: 'Kalasino Spectrum Brief #3',
    price: 42.50,
    description: 'Slim fit with dynamic color‑shift LEDs.',
    images: ['assets/images/3.webp'],
    coolingType: 'none',
    rgbColors: ['rainbow']
  },
  {
    id: 4,
    name: 'Kalasino Cyber Boxer #4',
    price: 44.99,
    description: 'Circuit‑inspired RGB paneling with glow lines.',
    images: ['assets/images/4.webp'],
    coolingType: 'none',
    rgbColors: ['pink', 'cyan']
  },
  {
    id: 5,
    name: 'Kalasino Hyperlight Brief #5',
    price: 38.00,
    description: 'Under‑leg neon strips with soft cotton weave.',
    images: ['assets/images/5.webp'],
    coolingType: 'none',
    rgbColors: ['green']
  },
  {
    id: 6,
    name: 'Kalasino Pulse Boxer #6',
    price: 45.00,
    description: 'Pulsing light matrix with cotton‑stretch fabric.',
    images: ['assets/images/6.webp'],
    coolingType: 'none',
    rgbColors: ['red', 'blue']
  },
  {
    id: 7,
    name: 'Kalasino Gold Fan Brief #7',
    price: 49.99,
    description: 'Three gold‑accent fans for targeted airflow.',
    images: ['assets/images/7.webp'],
    coolingType: 'fan',
    rgbColors: []
  },
  {
    id: 8,
    name: 'Kalasino AeroFan Brief #8',
    price: 46.50,
    description: 'Twin aero fans with cool‑touch LED halo.',
    images: ['assets/images/8.webp'],
    coolingType: 'fan',
    rgbColors: []
  },
  {
    id: 9,
    name: 'Kalasino Twin‑Cool Boxer #9',
    price: 48.00,
    description: 'Front‑mounted dual fans with RGB rims.',
    images: ['assets/images/9.webp'],
    coolingType: 'fan',
    rgbColors: ['blue']
  },
  {
    id: 10,
    name: 'Kalasino FanFusion Brief #10',
    price: 52.00,
    description: 'Hybrid fan + RGB system for ultimate comfort.',
    images: ['assets/images/10.webp'],
    coolingType: 'fan',
    rgbColors: ['cyan']
  }
];
