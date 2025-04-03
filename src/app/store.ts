import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import filtersReducer from "../features/filters/filtersSlice";
import paginationReducer from "../features/pagination/paginationSlice";
import searchReducer from "../features/search/searchSlice";
import { dummyProductApi } from "../services/products";

export const store = configureStore({
  reducer: {
    [dummyProductApi.reducerPath]: dummyProductApi.reducer,
    search: searchReducer,
    pagination: paginationReducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyProductApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
