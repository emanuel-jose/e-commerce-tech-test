import { useState } from "react";
import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import { useAppDispatch } from "../../app/hooks";
import { save } from "../../features/search/searchSlice";
import CartIcon from "../../shared/svg/cart-icon";
import EIcon from "../../shared/svg/e-icon";
import SearchIcon from "../../shared/svg/search-icon";
import {
  Button,
  Container,
  EButton,
  Input,
  InputWrapper,
  MainBox,
} from "./styles";

export function Header() {
  const theme = useTheme();
  const [inputSearch, setInputSearch] = useState("");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const saveInputSearch = () => {
    dispatch(save(inputSearch));
  };

  return (
    <Container>
      <MainBox>
        <EButton onClick={() => navigate("/")}>
          <EIcon />
        </EButton>

        <InputWrapper onSubmit={(event) => event.preventDefault()}>
          <Input
            type="text"
            onChange={(text) => setInputSearch(text.target.value)}
          ></Input>
          <Button color={theme.colors.primary} onClick={saveInputSearch}>
            <SearchIcon />
          </Button>
        </InputWrapper>

        <Button>
          <CartIcon />
        </Button>
      </MainBox>
    </Container>
  );
}
