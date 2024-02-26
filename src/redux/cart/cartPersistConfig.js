import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { cartReducer } from './cartSlice';

const persistConfig = {
  key: 'userCart',
  storage,
};

export const persistedCartReducer = persistReducer(persistConfig, cartReducer);
