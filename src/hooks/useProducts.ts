import { useLazyGetAllProductsQuery } from "../services/products";

export const useProduct = () => {
  const [getAllProducts, { currentData, isFetching, isLoading }] =
    useLazyGetAllProductsQuery();

  const handleGetAllProducts = (
    search?: string,
    page?: number,
    sortBy?: string,
    order?: "asc" | "desc"
  ) => {
    const skip = 20 * (page ?? 0);

    getAllProducts({ search, skip, sortBy, order })
      .unwrap()
      .catch((err) => console.error(err));
  };

  return {
    handleGetAllProducts,
    products: currentData?.products,
    loading: isFetching || isLoading,
    pageSize: currentData?.limit,
    totalElements: currentData?.total,
    skip: currentData?.skip,
  };
};
