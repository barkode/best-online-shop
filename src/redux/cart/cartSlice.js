import { createSlice } from '@reduxjs/toolkit';
// import { getAllCartProducts } from './operations';

const initialState = {
  cart: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // extraReducers: builder => {
  //   builder
  //     .addCase(getAllCartProducts.fulfilled, (state, action) => {
  //       state.cart = action.payload;
  //     })
  //     .addCase(getAllCartProducts.rejected, state => {
  //       state.cart = {};
  //     });
  // },
});

export const cartReducer = cartSlice.reducer;
