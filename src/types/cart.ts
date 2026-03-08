import type { Product } from '@/types/product';

export interface CartProduct extends Product {
  quantity: number;
}
