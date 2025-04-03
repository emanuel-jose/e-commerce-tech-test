import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBg};
  min-height: 100vh;
`;

export const ProductListWrapper = styled.main`
  width: 80%;
  margin: 0 auto;
  max-width: 75rem;
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`;

export const InnerProductWrapper = styled.section``;
