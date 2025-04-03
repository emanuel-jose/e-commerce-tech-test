import { lighten } from "polished";
import styled from "styled-components";

export const ProductWrapper = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.border};
  max-width: 11.875rem;
  border-radius: 0.15rem;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 8px ${({ theme }) => theme.colors.primaryShadow};
    cursor: pointer;
  }
`;

export const Image = styled.img`
  max-width: 11.75rem;
  max-height: 11.75rem;
`;

export const InfoWrapper = styled.section`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.25rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 500;
`;

export const PriceText = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const DiscountBox = styled.div`
  background-color: ${({ theme }) => lighten(0.4, theme.colors.primary)};
  padding: 0.15rem;
  max-height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
`;

export const DiscountText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;

export const AvaliationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.25rem;
`;

export const AvaliationText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
`;
