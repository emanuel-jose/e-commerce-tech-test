import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsResponse } from "../types/productTypes";

interface RequestProducst {
  limit?: number;
  skip?: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

export const dummyProductApi = createApi({
  reducerPath: "dummyProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, RequestProducst>({
      query: ({ limit, skip, search, order, sortBy }) =>
        `/search?q=${search ?? ""}&limit=${limit ?? 20}&skip=${
          skip ?? 0
        }&sortBy=${sortBy ?? ""}&order=${order ?? ""}`,
    }),
  }),
});

export const { useLazyGetAllProductsQuery } = dummyProductApi;
