import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import {
  addSort,
  changeCategory,
  changeOrder,
  resetOrder,
  resetSort,
} from "../../features/filters/filtersSlice";
import CheckIcon from "../../shared/svg/check-icon";
import { CheckBoxSqt, CheckBoxWrapper, Label } from "./styles";

interface CheckBoxProps {
  option: Options;
  sort?: boolean;
}

interface Options {
  label: string;
  value: string;
  isChecked?: boolean;
}

export function CheckBox({ option, sort }: CheckBoxProps) {
  const currentCategory = useAppSelector(
    (state: RootState) => state.filters.category
  );
  const currentSort = useAppSelector(
    (state: RootState) => state.filters.sortBy
  );
  const currentOrder = useAppSelector(
    (state: RootState) => state.filters.order
  );
  const dispatch = useAppDispatch();

  const saveNewCategory = (value: string) => {
    if (sort) {
      if (currentSort === "rating" && value === currentOrder) {
        dispatch(resetSort());
        dispatch(resetOrder());
      } else {
        dispatch(addSort("rating"));
        dispatch(changeOrder(value as "asc" | "desc"));
      }
    } else if (currentCategory === value) {
      dispatch(changeCategory(""));
    } else {
      dispatch(changeCategory(value));
    }
  };

  return (
    <CheckBoxWrapper onClick={() => saveNewCategory(option.value)}>
      <CheckBoxSqt>{option.isChecked ? <CheckIcon /> : <></>}</CheckBoxSqt>
      <Label>{option.label}</Label>
    </CheckBoxWrapper>
  );
}
