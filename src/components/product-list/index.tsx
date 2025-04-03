import { Products } from "../../types/productTypes";
import { Pagination } from "../pagination";
import { ProductCard } from "../product-card";
import { Container } from "./styles";

interface ProductListProps {
  products: Products[];
  totalElements: number;
  pageSize: number;
}

export function ProductList({
  products,
  pageSize,
  totalElements,
}: ProductListProps) {
  return (
    <Container>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}

      <Pagination pageSize={pageSize} totalElements={totalElements} />
    </Container>
  );
}
