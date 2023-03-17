import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  loading: false,
  error: null,
  products: [],
};
export const productSlice = createSlice({
  name: "products", //exported to Store.js
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.products = payload;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});
export const { setError, setLoading, setProducts } = productSlice.actions;
export default productSlice.reducer;
export const productSelector = (state) => state.products;
