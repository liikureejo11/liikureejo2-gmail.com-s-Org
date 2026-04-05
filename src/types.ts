export interface Room {
  id: string;
  name: string;
  type: 'Standard' | 'Deluxe' | 'Suite' | 'Villa';
  price: number;
  guests: number;
  size: number;
  view: string;
  description: string;
  amenities: string[];
  image: string;
  available: boolean;
  rating: number;
  reviews: number;
}

export const MOCK_ROOMS: Room[] = [
  {
    id: '1',
    name: 'Deluxe Azure Suite',
    type: 'Deluxe',
    price: 380,
    guests: 4,
    size: 48,
    view: 'City View',
    description: 'Designed for the discerning traveler, our Deluxe Suite offers a harmonious blend of modern sophistication and timeless comfort. Featuring a hand-crafted king-sized bed, a separate lounge area with bespoke furnishings, and a private terrace that captures the golden light of the Mediterranean.',
    amenities: ['Free WiFi', 'Climate Control', 'Smart TV', 'Mini Bar', 'Breakfast', 'Rain Shower'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByBUikZtRPE_b1FMM8uT-JQiTm5IUXTCrSKGkFdlepiD7py0rFs769M9JWEVRU8u1k49cC72pubw2yHBdhr-llpPFma8rDCylezvGrVL0B13X0-DI1Zp_d2Cm73zJh1_ey0WO5U94turXiUpeurA_3TZigE1NrQlM3FhzWREsPJGEwnagjABgSZdfrnGyofMAq2A0ZSsYXnj7vQ62_i7HQGIlIlHyaq4dMU1M7bWcIshurcwQOiSyCPG572JvoVwFh5zi2gNZZKOfw',
    available: true,
    rating: 4.9,
    reviews: 128
  },
  {
    id: '2',
    name: 'Coastal Standard Room',
    type: 'Standard',
    price: 220,
    guests: 2,
    size: 32,
    view: 'Garden Side',
    description: 'Our Coastal Standard Room provides a serene escape with minimalist design and natural light. Perfect for couples or solo travelers seeking a peaceful stay near the shore.',
    amenities: ['Free WiFi', 'Climate Control', 'Smart TV', 'Breakfast'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_wysOPCEZhutJrxGk0dPTskk6v3vGg9Fnx5UUtLPV5F1jzV-cXM_sy-yeNB7CbUJjZLF2-cDgywqQL9kQyg0X_ebaq-Svhw9dvFqnyQcd-k9Wg_uTbbnyLLKLoniqV5o7vQMVo-Nu-B3xZFx3s-E5zBciMPtpEQyRqhFh9UJ2D-59-ozSPSGz3m3Q9vA6IYICQ1sCHK1bXHUsi6sX7LCxXdGWPTm6CiEBIr7YZPZfMA6U0tAtKIufLSg5txVeUvApWP5GPRDCatuZ',
    available: true,
    rating: 4.7,
    reviews: 85
  },
  {
    id: '3',
    name: 'Signature Penthouse',
    type: 'Suite',
    price: 950,
    guests: 6,
    size: 120,
    view: 'Panoramic Ocean View',
    description: 'The ultimate luxury experience. Our Signature Penthouse features a private pool, butler service, and breathtaking views of the tropical resort and ocean.',
    amenities: ['Free WiFi', 'Climate Control', 'Smart TV', 'Mini Bar', 'Breakfast', 'Rain Shower', 'Private Pool', 'Butler Service'],
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgGlkne86-85WUgEgHanaM6pJ_7EOrCTrgfuNHDsH9NXoGDnJmyK2ojtWLwAOZBcDw7bKn_w7_XbHkbVuSZxTj_6tMtbMgcOQyYg1mhNyhf97PGjYEfK0tU-6RllAQXo-eVc-L02UipzCKZThE0bVIR8XUiSE0aY6LPAENYFjTNDOAycB6c7Pf1Ba-XKStMCpATat77PYeunfNyHe1wuCohN4RzQyoIfGG0hDLHkm1A7PjLClalsJwOlyu2zZCftsfxUTeSi2S4X51',
    available: true,
    rating: 5.0,
    reviews: 42
  }
];
