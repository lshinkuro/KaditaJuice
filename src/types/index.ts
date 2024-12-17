export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'fresh-juices' | 'alpuket-kocok' | 'es-teller' | 'sop-buah' | 'new-menu';
  image?: string;
  isBestSeller?: boolean;
  salesCount?: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface TestimonialType {
  id: string;
  name: string;
  message: string;
  rating: number;
}

export interface ReviewType {
  id: string;
  name: string;
  rating: number;
  comment: string;
  product?: string;
}

export interface UserDetails {
  name: string;
  phone: string;
  address: string;
}
