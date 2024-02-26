import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { productsReducer } from './products/productsSlice';
import { persistedAuthReducer } from './auth/authPersistConfig';
import { persistedCartReducer } from './cart/cartPersistConfig';
// import { cartReducer } from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: persistedAuthReducer,
    cart: persistedCartReducer,
    favorite: {},
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
