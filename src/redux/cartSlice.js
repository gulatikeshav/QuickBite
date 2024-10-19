import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalPrice: 0,
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalItems += 1;
      state.totalPrice += action.payload.price || action.payload.defaultPrice;
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        state.totalItems -= existingItem.quantity;
        state.totalPrice -=
          (existingItem.price || existingItem.defaultPrice) *
          existingItem.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        state.totalItems += 1;
        state.totalPrice += item.price || item.defaultPrice;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalItems -= 1;
        state.totalPrice -= item.price || item.defaultPrice;
      } else if (item && item.quantity === 1) {
        // If quantity is 1, remove the item completely
        state.items = state.items.filter((i) => i.id !== action.payload);
        state.totalItems -= 1;
        state.totalPrice -= item.price || item.defaultPrice;
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  removeItem,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
