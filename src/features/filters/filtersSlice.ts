import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface FiltersState {
  sortBy: string;
  order: "asc" | "desc";
}

const initialState: FiltersState = {
  sortBy: "",
  order: "asc",
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
    resetFilters: (state) => {
      state = initialState;
    },
  },
});

export const { addSort, changeOrder } = filtersSlice.actions;

export default filtersSlice.reducer;
