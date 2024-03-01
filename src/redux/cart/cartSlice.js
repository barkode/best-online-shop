import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Create slice

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      for (const item of state.cart) {
        if (item.name === action.payload.name) {
          item.quantity += 1;
          return;
        }
      }
      const newProduct = {
        ...action.payload,
        quantity: 1,
      };
      state.cart.push(newProduct);
    },

    clearCart(state) {
      if (state.cart.length !== 0) {
        state.cart = [];
      }
      return;
    },
    removeFromCart(state, action) {},

    increase(state, action) {
      state.cart.quantity += 1;
    },
    decrease(state, action) {
      state.cart.quantity -= 1;
    },
  },
});

// Crate Redux Persist

const persistConfig = {
  key: 'userCart',
  storage,
};
export const persistedCartReducer = persistReducer(
  persistConfig,
  cartSlice.reducer
);

export const { addToCart, clearCart, removeFromCart } = cartSlice.actions;
// export const cartReducer = cartSlice.reducer;

// Selectors

export const getAllCartProducts = state => state.cart.cart;

export const getAllProductTypes = state => state.cart.cart.length;
