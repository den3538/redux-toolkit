import { useAppSelector } from "@/store/hooks/useAppSelector";

export const useCart = () => {
  const { items, total, itemsCount: itemCount } = useAppSelector((s) => s.cart);

  return {
    cartItems: items,
    total: total,
    amount: itemCount,
  };
};
