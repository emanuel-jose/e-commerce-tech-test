import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
`;

export const PagesWrapper = styled.div``;
