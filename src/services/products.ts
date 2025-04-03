import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductCategory } from "../types/productCategoriesType";
import { Products, ProductsResponse } from "../types/productTypes";

interface RequestProducst {
  limit?: number;
  skip?: number;
  search?: string;
  sortBy?: string;
  order?: "asc" | "desc";
}

interface RequestProductCategory extends RequestProducst {
  category: string;
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
    getAllCategories: builder.query<ProductCategory[], void>({
      query: () => `/categories`,
    }),

    getProductsByCategory: builder.query<
      ProductsResponse,
      RequestProductCategory
    >({
      query: ({ category, limit, order, skip, sortBy }) =>
        `/category/${category}?limit=${limit ?? 20}&skip=${skip ?? 0}&sortBy=${
          sortBy ?? ""
        }&order=${order ?? ""}`,
    }),

    getProductById: builder.query<Products, number>({
      query: (productId) => `/${productId}`,
    }),
  }),
});

export const {
  useLazyGetAllProductsQuery,
  useLazyGetAllCategoriesQuery,
  useLazyGetProductsByCategoryQuery,
  useLazyGetProductByIdQuery,
} = dummyProductApi;
