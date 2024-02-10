import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/models/product";

interface AccountState {
  favorites: Product[];
  cartItems: Product[];
}

const initialState: AccountState = {
  favorites: [],
  cartItems: [],
};

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addToFavorite: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        (favorite) => action.payload.id === favorite.id
      );
      if (existingIndex === -1) {
        action.payload.favorite = true;
        state.favorites.push(action.payload);
        console.log(action.payload);
      } else {
        action.payload.favorite = false;
        state.favorites.splice(existingIndex, 1);
      }
    },
    addToCart: (state, action) => {
      const existingIndex = state.cartItems.findIndex(
        (item) => action.payload.id === item.id
      );
      if (existingIndex === -1) {
        action.payload.inCart = true;
        state.cartItems.push(action.payload);
        console.log(action.payload);
      } else {
        action.payload.inCart = false;
        state.cartItems.splice(existingIndex, 1);
      }
    },
  },
});

export const { addToFavorite, addToCart } = accountSlice.actions;
