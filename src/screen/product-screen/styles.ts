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
`;

export const ProductViewWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  padding-top: 11rem;
  gap: 3rem;
`;

export const ImageWrapper = styled.div`
  max-width: 25.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
`;

export const Image = styled.img`
  width: 100%;
`;

export const InformationWrapper = styled.div`
  max-width: 30rem;
`;

export const Title = styled.span`
  font-size: 3rem;
  font-weight: 400;
  color: #404040;
`;

export const RatingWrapper = styled.div``;

export const RatingText = styled.span`
  color: #808080;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const PriceWrapper = styled.div``;

export const PriceText = styled.span`
  font-size: 3.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DescriptionWrapper = styled.div`
  margin-top: 2rem;
`;

export const DescriptionText = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  color: #101010;
`;

export const ReviewsWrapper = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ReviewTitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 3rem;
  margin-left: 1.5rem;
`;
