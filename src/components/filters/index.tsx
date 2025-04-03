import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import FilterIcon from "../../shared/svg/filter-icon";
import { ProductCategory } from "../../types/productCategoriesType";
import { CheckBox } from "../check-box";
import { BoxFilter, BoxTitle, Container, Title, TitleWrapper } from "./styles";

interface FilterProps {
  categories: ProductCategory[];
}

export function Filters({ categories }: FilterProps) {
  const currentCategory = useAppSelector(
    (state: RootState) => state.filters.category
  );
  const { sortBy, order } = useAppSelector((state: RootState) => state.filters);
  return (
    <Container>
      <TitleWrapper>
        <FilterIcon />
        <Title>Filtros</Title>
      </TitleWrapper>

      <BoxFilter>
        <BoxTitle>Por Categoria</BoxTitle>
        {categories.map((category) => (
          <CheckBox
            option={{
              label: category.name,
              value: category.slug,
              isChecked: category.slug === currentCategory,
            }}
          />
        ))}
      </BoxFilter>

      <BoxFilter>
        <BoxTitle>Avaliação</BoxTitle>
        <CheckBox
          option={{
            label: "Notas mais altas",
            value: "desc",
            isChecked: sortBy === "rating" && order === "desc",
          }}
          sort
        />

        <CheckBox
          option={{
            label: "Notas mais baixas",
            value: "asc",
            isChecked: sortBy === "rating" && order === "asc",
          }}
          sort
        />
      </BoxFilter>
    </Container>
  );
}
