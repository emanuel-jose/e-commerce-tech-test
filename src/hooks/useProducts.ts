import { useLazyGetAllProductsQuery } from "../services/products";

export const useProduct = () => {
  const [getAllProducts, { currentData, isFetching, isLoading }] =
    useLazyGetAllProductsQuery();

  const handleGetAllProducts = (search?: string, page?: number) => {
    const skip = 20 * (page ?? 0);

    getAllProducts({ search, skip })
      .unwrap()
      .catch((err) => console.error(err));
  };

  return {
    handleGetAllProducts,
    products: currentData?.products,
    loading: isFetching || isLoading,
  };
};
