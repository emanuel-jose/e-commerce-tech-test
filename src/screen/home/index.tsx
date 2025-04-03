import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Filters } from "../../components/filters";
import { Header } from "../../components/header";
import { Ordenation } from "../../components/ordenation";
import { ProductList } from "../../components/product-list";
import { useProduct } from "../../hooks/useProducts";
import { Container, InnerProductWrapper, ProductListWrapper } from "./styles";

function Home() {
  const { handleGetAllProducts, products, loading, pageSize, totalElements } =
    useProduct();
  const searchValue = useAppSelector((state: RootState) => state.search.value);
  const currentPage = useAppSelector(
    (state: RootState) => state.pagination.currentPage
  );
  const { order, sortBy } = useAppSelector((state: RootState) => state.filters);

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  useEffect(() => {
    handleGetAllProducts(searchValue, currentPage, sortBy, order);
  }, [searchValue, currentPage, sortBy, order]);

  return (
    <Container>
      <Header />
      <ProductListWrapper>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            <Filters />
            <InnerProductWrapper>
              <Ordenation />
              <ProductList
                products={products ?? []}
                pageSize={pageSize ?? 0}
                totalElements={totalElements ?? 0}
              />
            </InnerProductWrapper>
          </>
        )}
      </ProductListWrapper>
    </Container>
  );
}

export default Home;
