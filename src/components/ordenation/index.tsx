import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { addSort, changeOrder } from "../../features/filters/filtersSlice";
import { Container, OrderButton } from "./styles";

export function Ordenation() {
  const { order, sortBy } = useAppSelector((state: RootState) => state.filters);
  const dispatch = useAppDispatch();

  const addFilter = (sortBy: string, order: "asc" | "desc") => {
    dispatch(addSort(sortBy));
    dispatch(changeOrder(order));
  };

  return (
    <Container>
      <span>Classificar por </span>

      <OrderButton
        onClick={() => addFilter("price", "desc")}
        isActive={order === "desc" && sortBy === "price"}
      >
        <span>Maior Preço</span>
      </OrderButton>

      <OrderButton
        onClick={() => addFilter("price", "asc")}
        isActive={order === "asc" && sortBy === "price"}
      >
        <span>Menor Preço</span>
      </OrderButton>

      <OrderButton
        onClick={() => addFilter("title", "asc")}
        isActive={order === "asc" && sortBy === "title"}
      >
        <span>Alfabética: A-Z</span>
      </OrderButton>

      <OrderButton
        onClick={() => addFilter("title", "desc")}
        isActive={order === "desc" && sortBy === "title"}
      >
        <span>Alfabética: Z-A</span>
      </OrderButton>
    </Container>
  );
}
