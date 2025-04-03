import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import searchReducer from "../features/search/searchSlice";
import { dummyProductApi } from "../services/products";

export const store = configureStore({
  reducer: {
    [dummyProductApi.reducerPath]: dummyProductApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dummyProductApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
