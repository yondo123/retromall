export type Hashtags = string[];
export type ImageUrls = string[];

export interface Product {
  content: string;
  amount: number;
  category: string;
  thumbnail: string;
  images: ImageUrls;
  hashTags: Hashtags;
}
