import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  sortBy: string;
  order: "asc" | "desc";
  category: string;
}

const initialState: FiltersState = {
  sortBy: "",
  order: "asc",
  category: "",
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addSort: (state, action: PayloadAction<string>) => {
      state.sortBy = action.payload;
    },
    changeOrder: (state, action: PayloadAction<"asc" | "desc">) => {
      state.order = action.payload;
    },
    changeCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    resetSort: (state) => {
      state.sortBy = "";
    },
    resetOrder: (state) => {
      state.order = "asc";
    },
    resetFilters: (state) => {
      state = initialState;
    },
  },
});

export const {
  addSort,
  changeOrder,
  changeCategory,
  resetFilters,
  resetOrder,
  resetSort,
} = filtersSlice.actions;

export default filtersSlice.reducer;
