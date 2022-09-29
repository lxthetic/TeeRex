import { configureStore } from '@reduxjs/toolkit';
import {
  cartItemsReducer,
  loadingReducer,
  productsReducer,
  filteredProductsReducer,
  searchedProductsReducer,
  searchStringReducer,
  snackbarReducer,
  sideBarToggleReducer,
} from './reducer';

export const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
    loading: loadingReducer,
    products: productsReducer,
    filteredProducts: filteredProductsReducer,
    searchedProducts: searchedProductsReducer,
    snackbar: snackbarReducer,
    sideBarToggle: sideBarToggleReducer,
    searchString: searchStringReducer,
  },
});
