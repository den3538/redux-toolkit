import type { Product } from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import mockData from '@/mock-data.json';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { DEFAULT_BASE_URL } from '@/constants/constants';

interface productsState {
  items: Product[];
  selectedProduct: Product | null;
  loading: boolean;
}

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const result = await axios.get<Product[]>(
      `${import.meta.env.VITE_BASE_URL ?? DEFAULT_BASE_URL}/products`,
    );
    return result.data;
  },
);

export const fetchProductById = createAsyncThunk(
  'products/fetchProductById',
  async (id: number) => {
    const result = await axios.get<Product>(
      `${import.meta.env.VITE_BASE_URL ?? DEFAULT_BASE_URL}/products/${id}`,
    );
    return result.data;
  },
);

const initialState: productsState = {
  items: [],
  selectedProduct: null,
  loading: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state) => {
      state.items = mockData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
        state.loading = false;
      })
      .addCase(fetchProductById.rejected, (state) => {
        state.selectedProduct = null;
        state.loading = false;
      });
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
