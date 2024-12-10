import { ReactNode } from "react";

type Review = {
  reviewerName: string;
  rating: number;
  comment: string;
  reviewerEmail: string;
};
export interface ProductType {
  brand: ReactNode;
  availabilityStatus: string;
  banner: string;
  category: string;
  description: string;
  dimensions: {
    depth: number;
    height: number;
    width: number;
  };
  discountPercentage: number;
  id: number;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    quCode: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: Review[];
  shippingInformation: string;
  sku: string;
  stock: number;
  tags: string[];
  thumbnail: string;
  title: string;
  warrantyInformation: string;
  weight: number;
  quantity?: number;
}
export interface StateType {
  shofy: {
    cart: ProductType[];
    favorite: ProductType[];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    userInfo: any;
  };
}
