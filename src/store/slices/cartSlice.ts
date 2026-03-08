import type { CartProduct, Product } from '@/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { changeItemQuantity, getTotal } from '@/store/utils/cart';

interface cartState {
  items: CartProduct[];
  total: number;
  itemsCount: number;
}

const initialState: cartState = {
  items: [],
  total: 0,
  itemsCount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const addedItem = state.items.find((i) => i.id == action.payload.id);

      if (addedItem) addedItem.quantity++;
      else state.items.push({ ...action.payload, quantity: 1 });

      state.total = state.items.reduce((sum, item) => {
        return sum + item.price * item.quantity;
      }, 0);

      state.itemsCount += 1;
    },

    increaseQuantity: (state, action: PayloadAction<number>) => {
      changeItemQuantity(state.items, action.payload, 1);

      state.itemsCount++;
      state.total = getTotal(state.items);
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      changeItemQuantity(state.items, action.payload, -1);
      state.itemsCount--;
      state.total = getTotal(state.items);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const indexToRemove = state.items.findIndex(
        (i) => i.id === action.payload,
      );
      if (indexToRemove === -1) {
        // imagine sentry logging
        console.log("Didn't find product to remove");
        return;
      }

      state.itemsCount -= state.items[indexToRemove].quantity;

      state.items.splice(indexToRemove, 1);

      state.total = getTotal(state.items);
    },
  },
});

export const { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
