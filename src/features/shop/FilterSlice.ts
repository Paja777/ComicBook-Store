import { createSlice } from "@reduxjs/toolkit";


interface FilterState {
  category: "all" | "superhero" | "manga" | "graphic_novel";
  searchTerm: string;
}

const initialState: FilterState = {
  category: "all",
  searchTerm: '',
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeCategory: (state, action) => {
      state.category = action.payload;
      state.searchTerm = '';

    },
    search: (state, action) => {
      state.searchTerm = action.payload;
      state.category = 'all';

    }
  },
});

export const { changeCategory, search } = filterSlice.actions;
