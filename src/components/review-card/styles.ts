import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.25rem;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
`;

export const ReviewName = styled.span`
  font-size: 0.8rem;
  color: #bbb;
`;

export const RatingText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

export const RatingWrapper = styled.div``;

export const DateText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: #bbb;
`;

export const Comment = styled.span`
  display: block;
  margin-top: 1rem;

  font-size: 1.25rem;
  color: #404040;
`;
