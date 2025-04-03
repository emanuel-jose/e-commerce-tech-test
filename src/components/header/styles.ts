import styled from "styled-components";

interface ButtonProps {
  color?: string;
}

export const Container = styled.div`
  height: 5.3rem;
  width: 100%;
  background: ${({ theme }) => theme.colors.primaryGradient};
  padding-top: ${({ theme }) => theme.spacing.medium};
`;

export const MainBox = styled.main`
  width: 80%;
  max-width: 75rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  max-width: 52.5rem;
  padding: 0.25rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding-left: 0.5rem;
`;

export const Button = styled.button<ButtonProps>`
  background-color: ${({ color }) => (color ? color : "transparent")};
  padding: ${({ theme }) => theme.spacing.small};
  min-height: 2.12rem;
  min-width: 3.75rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
