import { createSlice, current } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      return [...action.payload];
    },
    changeProductQuantity: (state, action) => {
      return current(state).map(v =>
        v.id === action.payload.id ? { ...v, quantity: action.payload.quantityLeft } : v
      );
    },
  },
});

const filteredProductsSlice = createSlice({
  name: 'filteredProducts',
  initialState: [],
  reducers: {
    addFilteredProducts: (state, action) => {
      return action.payload;
    },
    changeFilteredProductQuantity: (state, action) => {
      return current(state).map(v =>
        v.id === action.payload.id ? { ...v, quantity: action.payload.quantityLeft } : v
      );
    },
  },
});

const searchedProductsSlice = createSlice({
  name: 'searchedProducts',
  initialState: [],
  reducers: {
    addSearchedProducts: (state, action) => {
      return [...action.payload];
    },
    changeSearchedProductQuantity: (state, action) => {
      return current(state).map(v =>
        v.id === action.payload.id ? { ...v, quantity: action.payload.quantityLeft } : v
      );
    },
  },
});

const searchStringSlice = createSlice({
  name: 'searchString',
  initialState: '',
  reducers: {
    storeString: (state, action) => {
      return action.payload;
    },
  },
});

const loadingSlice = createSlice({
  name: 'loading',
  initialState: true,
  reducers: {
    isLoading: (state, action) => {
      return action.payload;
    },
  },
});

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: {},
  reducers: {
    addOrEditItem: (state, action) => {
      const obj = {
        ...current(state),
        [action.payload.id]: {
          selectedQuantity:
            (current(state)?.[action.payload.id]?.selectedQuantity || 0) + action.payload.selectedQuantity,
        },
      };
      obj[action.payload.id].selectedQuantity === 0 && delete obj[action.payload.id];
      return obj;
    },
    // removeItem: (state, action) => {
    //   return state.filter(({ id }) => id !== action.payload.id);
    // },
  },
});

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState: [],
  reducers: {
    addMsg: (state, action) => {
      state.push({ ...action.payload, id: Math.random() });
    },
    removeMsg: (state, action) => {
      return current(state).filter(({ id }) => id !== action.payload.id);
    },
  },
});

const sideBarToggleSlice = createSlice({
  name: 'sideBarToggle',
  initialState: false,
  reducers: {
    changeToggle: (state, action) => {
      return action.payload;
    },
  },
});

//products
export const { addProducts, changeProductQuantity } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;

//filtered products
export const { addFilteredProducts, changeFilteredProductQuantity } = filteredProductsSlice.actions;
export const filteredProductsReducer = filteredProductsSlice.reducer;

//searched products
export const { addSearchedProducts, changeSearchedProductQuantity } = searchedProductsSlice.actions;
export const searchedProductsReducer = searchedProductsSlice.reducer;

export const { storeString } = searchStringSlice.actions;
export const searchStringReducer = searchStringSlice.reducer;

//loading
export const { isLoading } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;

//cartItems
export const { addOrEditItem, removeItem } = cartItemsSlice.actions;
export const cartItemsReducer = cartItemsSlice.reducer;

//snackbar
export const { addMsg, removeMsg } = snackbarSlice.actions;
export const snackbarReducer = snackbarSlice.reducer;

//snackbar
export const { changeToggle } = sideBarToggleSlice.actions;
export const sideBarToggleReducer = sideBarToggleSlice.reducer;
