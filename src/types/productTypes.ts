export interface ProductsResponse {
  products: Products[];
  total: number;
  skip: number;
  limit: number;
}

export interface Products {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: ProductDimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: AvailableStatus;
  reviews: ProductReviews[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: ProductMeta;
  images: string[];
  thumbnail: string;
}

export enum AvailableStatus {
  LOW_STOCK = "Low Stock",
  IN_STOCK = "In Stock",
}

export interface ProductDimensions {
  width: number;
  height: number;
  depth: number;
}

export interface ProductReviews {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductMeta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
