import type { Product } from "@/types";
import { createSlice } from "@reduxjs/toolkit";
import mockData from "@/mock-data.json";

interface productsState {
  items: Product[];
  selectedProduct: Product | null;
  loading: boolean;
}

const initialState: productsState = {
  items: [],
  selectedProduct: null,
  loading: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state) => {
      state.items = mockData;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
