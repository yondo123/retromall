export type ImageUrls = string[];
export type Hashtag = `#${string}`;
export interface Product {
  content: string;
  amount: number;
  category: string;
  thumbnail: string;
  images: ImageUrls;
  hashTags: string[];
}

export interface ProductItem {
  productId: number;
  author: string;
  content: string;
  amount: number;
  likes: number;
  thumbnail: string;
  createdAt: string;
  modifiedAt: string;
  title: string;
}

export interface ProductDetailItem extends Omit<ProductItem, 'thumbnail'> {
  category: string;
  isLiked: boolean;
  hashTags: string[];
  images: string[];
  isAuthor: string;
}
