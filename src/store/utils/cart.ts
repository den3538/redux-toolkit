import type { CartProduct } from "@/types";

export function changeItemQuantity(items: CartProduct[], id: number, delta: number): CartProduct[] {
  const item = items.find((i) => i.id === id);
  if (!item) return items;
  item.quantity += delta;
  return items;
}

export function getTotal(items: CartProduct[]) {
  return items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}
