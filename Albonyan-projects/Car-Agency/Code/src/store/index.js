import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          class: newItem.carClass,
          name: newItem.name,
          image: newItem.image,
          quantity: 1,
        });
      } else {
        existingItem.quantity++;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existingItem) {
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
        }
      }
    },

    removeWholeItemFromCart(state, action) {
      const id = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        state.totalQuantity -= item.quantity;
        item.quantity = 0;
        state.items = state.items.filter((item) => item.id !== id);
      }
    },

    removeAllItemsFromCart(state) {
      state.items = [];
      state.totalQuantity = 0;
    },
  },
});

const saveState = (state) => {
  const savedState = JSON.stringify(state);
  localStorage.setItem("cart", savedState);
};

const loadState = () => {
  try {
    const savedState = localStorage.getItem("cart");
    if (savedState === null) {
      return { items: [], totalQuantity: 0 };
    }
    return JSON.parse(savedState);
  } catch (error) {
    console.log("Error loading state from local storage:", error);
    return { items: [], totalQuantity: 0 };
  }
};

const store = configureStore({
  reducer: cartSlice.reducer,
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState(store.getState());
});

export const cartActions = cartSlice.actions;

export default store;
