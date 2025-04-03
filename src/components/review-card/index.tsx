import { ProductReviews } from "../../types/productTypes";
import { dateFormat, ratingMask } from "../../utils/formatMask";
import {
  Comment,
  Container,
  DateText,
  RatingText,
  RatingWrapper,
  ReviewName,
  Wrapper,
} from "./styles";

interface ReviewCardProps {
  review: ProductReviews;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <Container>
      <Wrapper>
        <ReviewName>{review.reviewerName}</ReviewName>

        <RatingWrapper>
          <RatingText>{ratingMask(review.rating)}</RatingText>
        </RatingWrapper>
      </Wrapper>

      <Comment>{review.comment}</Comment>
      <DateText>{dateFormat(review.date)}</DateText>
    </Container>
  );
}
