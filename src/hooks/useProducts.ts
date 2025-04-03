import { useState } from "react";
import {
  useLazyGetAllCategoriesQuery,
  useLazyGetAllProductsQuery,
  useLazyGetProductsByCategoryQuery,
} from "../services/products";
import { ProductsResponse } from "../types/productTypes";

export const useProduct = () => {
  const [products, setProducts] = useState<ProductsResponse>();
  const [getAllProducts, { currentData, isFetching, isLoading }] =
    useLazyGetAllProductsQuery();
  const [
    getAllCategories,
    {
      currentData: categories,
      isFetching: categoryFetch,
      isLoading: categoryLoad,
    },
  ] = useLazyGetAllCategoriesQuery();

  const [
    getProductsByCategory,
    {
      currentData: categoryProducts,
      isFetching: categoryProdFetch,
      isLoading: categoryProdLoad,
    },
  ] = useLazyGetProductsByCategoryQuery();

  const handleGetAllProducts = (
    search?: string,
    page?: number,
    sortBy?: string,
    order?: "asc" | "desc"
  ) => {
    const skip = 20 * (page ?? 0);

    getAllProducts({ search, skip, sortBy, order })
      .unwrap()
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  };

  const handleGetAllCategories = () => {
    getAllCategories()
      .unwrap()
      .catch((err) => console.error(err));
  };

  const handleGetProductsByCategory = (
    category: string,
    page?: number,
    sortBy?: string,
    order?: "asc" | "desc"
  ) => {
    const skip = 20 * (page ?? 0);

    getProductsByCategory({
      category,
      skip,
      sortBy,
      order,
    })
      .unwrap()
      .then((res) => setProducts(res))
      .catch((err) => console.error(err));
  };

  return {
    handleGetAllProducts,
    handleGetAllCategories,
    handleGetProductsByCategory,
    products,
    loading: isFetching || isLoading,
    pageSize: products?.limit,
    totalElements: products?.total,
    skip: products?.skip,
    categories,
    categoriesLoad: categoryFetch || categoryLoad,
    categoryProdLoading: categoryProdLoad || categoryProdFetch,
  };
};
