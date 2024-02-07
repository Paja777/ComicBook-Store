import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../app/models/product";

interface AccountState {
  favorites: Product[];
}

const initialState: AccountState = {
  favorites: [],
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
  },
});

export const { addToFavorite } = accountSlice.actions;
