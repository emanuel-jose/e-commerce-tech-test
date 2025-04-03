import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface SearchState {
  value: string;
}

const initialState: SearchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { save, reset } = searchSlice.actions;

export default searchSlice.reducer;
