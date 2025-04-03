import { useNavigate } from "react-router";
import { useTheme } from "styled-components";
import StarIcon from "../../shared/svg/star-icon";
import { Products } from "../../types/productTypes";
import { moneyMask, percentageMask, ratingMask } from "../../utils/formatMask";
import {
  AvaliationBox,
  AvaliationText,
  DiscountBox,
  DiscountText,
  Image,
  InfoWrapper,
  PriceText,
  ProductWrapper,
  Title,
} from "./styles";

interface ProductCardProps {
  product: Products;
}

export function ProductCard({ product }: ProductCardProps) {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <ProductWrapper onClick={() => navigate(`/${product.id}`)}>
      <Image src={product.thumbnail} alt={product.title} />
      <InfoWrapper>
        <Title>{product.title}</Title>
        <div>
          <PriceText>
            <span style={{ fontSize: theme.fontSizes.small, fontWeight: 700 }}>
              {"R$"}
            </span>
            {moneyMask(product.price)}

            {product.discountPercentage && product.discountPercentage > 0 ? (
              <DiscountBox>
                <DiscountText>
                  -{percentageMask(product.discountPercentage)}
                </DiscountText>
              </DiscountBox>
            ) : (
              <></>
            )}
          </PriceText>
          <AvaliationBox>
            <StarIcon />
            <AvaliationText>{ratingMask(product.rating)}</AvaliationText>
          </AvaliationBox>
        </div>
      </InfoWrapper>
    </ProductWrapper>
  );
}
