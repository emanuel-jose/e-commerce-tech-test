import styled from "styled-components";

export const Container = styled.div`
  padding-top: 11rem;
  padding-left: 1.5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.primary};
`;

export const BoxFilter = styled.div`
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const BoxTitle = styled.span``;
