import styled from "styled-components";

export const CheckBoxWrapper = styled.button`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckBoxSqt = styled.div`
  width: 1rem;
  height: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 500;
`;
