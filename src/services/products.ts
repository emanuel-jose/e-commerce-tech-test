import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductsResponse } from "../types/productTypes";

interface RequestProducst {
  limit?: number;
  skip?: number;
  search?: string;
}

export const dummyProductApi = createApi({
  reducerPath: "dummyProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/products" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, RequestProducst>({
      query: ({ limit, skip, search }) =>
        `/search?q=${search ?? ""}&limit=${limit ?? 20}&skip${skip ?? 0}`,
    }),
  }),
});

export const { useLazyGetAllProductsQuery } = dummyProductApi;
