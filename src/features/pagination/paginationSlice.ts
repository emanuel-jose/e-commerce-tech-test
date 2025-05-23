import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface PaginationState {
  currentPage: number;
}

const initialState: PaginationState = {
  currentPage: 0,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    prev: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    next: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    resetPage: (state) => {
      state.currentPage = 0;
    },
  },
});

export const { next, prev, resetPage } = paginationSlice.actions;

export default paginationSlice.reducer;
