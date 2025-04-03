import { useEffect } from "react";
import { useParams } from "react-router";
import { Header } from "../../components/header";
import { ReviewCard } from "../../components/review-card";
import { useProduct } from "../../hooks/useProducts";
import { moneyMask, ratingMask } from "../../utils/formatMask";
import {
  Container,
  DescriptionText,
  DescriptionWrapper,
  Image,
  ImageWrapper,
  InformationWrapper,
  PriceText,
  PriceWrapper,
  ProductListWrapper,
  ProductViewWrapper,
  RatingText,
  RatingWrapper,
  ReviewsWrapper,
  ReviewTitle,
  Title,
} from "./styles";

function ProductScreen() {
  const { productId } = useParams();
  const { handleGetProductById, selectProduct, selectProductLoading } =
    useProduct();

  useEffect(() => {
    if (productId) {
      handleGetProductById(Number(productId));
    }
  }, []);

  return (
    <Container>
      <Header />
      <ProductListWrapper>
        <ProductViewWrapper>
          <ImageWrapper>
            <Image alt={selectProduct?.title} src={selectProduct?.images[0]} />
          </ImageWrapper>

          <InformationWrapper>
            <Title>{selectProduct?.title}</Title>

            <RatingWrapper>
              <RatingText>{ratingMask(selectProduct?.rating ?? 0)}</RatingText>
            </RatingWrapper>

            <PriceWrapper>
              <PriceText>{`R$ ${moneyMask(
                selectProduct?.price ?? 0
              )}`}</PriceText>
            </PriceWrapper>

            <DescriptionWrapper>
              <DescriptionText>{selectProduct?.description}</DescriptionText>
            </DescriptionWrapper>
          </InformationWrapper>
        </ProductViewWrapper>
        <ReviewsWrapper>
          <ReviewTitle>Avaliações do Produto</ReviewTitle>
          {selectProduct?.reviews.map((review) => (
            <ReviewCard review={review} />
          ))}
        </ReviewsWrapper>
      </ProductListWrapper>
    </Container>
  );
}

export default ProductScreen;
