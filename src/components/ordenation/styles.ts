import styled from "styled-components";

interface OrderButtonProps {
  isActive?: boolean;
}

export const Container = styled.div`
  padding-top: 11rem;
  padding-bottom: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 1.5rem;
  color: #555;

  span {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 500;
  }
`;

export const OrderButton = styled.button<OrderButtonProps>`
  padding: 0.75rem;
  border-radius: 0.25rem;
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.primaryShadow};
  color: ${({ theme }) => theme.colors.white};
  border: none;

  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;
