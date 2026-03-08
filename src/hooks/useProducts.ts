import type { RootState } from '@/store';
import { useAppSelector } from '@/store/hooks/useAppSelector';

export const useProducts = () => {
  const state = useAppSelector((s: RootState) => s.products);

  return {
    productsList: state.items,
    getById: (id: number) => {
      return (
        state.items.find((item) => {
          console.log('item', item);
          return item.id === id;
        }) ?? null
      );
    },
    selectedProduct: state.selectedProduct,
    loading: state.loading,
  };
};
