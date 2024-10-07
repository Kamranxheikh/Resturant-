import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += action.payload.price;
      } else {
        state.items.push({ ...action.payload, quantity: 1, totalPrice: action.payload.price });
      }
      state.totalQuantity += 1;
      state.totalAmount += action.payload.price;
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        item.totalPrice += item.price;
        state.totalQuantity += 1;
        state.totalAmount += item.price;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice -= item.price;
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.totalQuantity -= 1;
        state.totalAmount -= item.price;
      }
    },
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        state.items = state.items.filter(item => item.id !== action.payload.id);
        state.totalQuantity -= item.quantity;
        state.totalAmount -= item.totalPrice;
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
