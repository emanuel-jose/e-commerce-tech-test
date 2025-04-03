import { useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { Header } from "../../components/header";
import { useProduct } from "../../hooks/useProducts";
import { Container } from "./styles";

function Home() {
  const { handleGetAllProducts, products, loading } = useProduct();
  const searchValue = useAppSelector((state: RootState) => state.search.value);

  useEffect(() => {
    handleGetAllProducts();
  }, []);

  useEffect(() => {
    console.log({ searchValue });
    handleGetAllProducts(searchValue);
  }, [searchValue]);

  return (
    <Container>
      <Header />
      {loading ? (
        <span>Loading...</span>
      ) : (
        products?.map((product) => (
          <div>
            <span>{product.title}</span>
            <span>{product.price}</span>
            <span>{product.discountPercentage}</span>
          </div>
        ))
      )}
    </Container>
  );
}

export default Home;
