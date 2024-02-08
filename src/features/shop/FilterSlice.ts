import { createSlice } from "@reduxjs/toolkit";


interface FilterState {
  category: "all" | "superhero" | "manga" | "graphic_novel";
}

const initialState: FilterState = {
  category: "all",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { changeCategory } = filterSlice.actions;
