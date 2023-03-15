import request from './instance';
import { Product } from '../types/product';

export const getCategories = () => {
  return request({
    url: '/req/categories',
    method: 'get'
  });
};

export const registerProduct = (product: Product) => {
  const { content, amount, images, category, hashTags, thumbnail } = product;
  return request({
    url: '/req/products',
    method: 'post',
    data: {
      content,
      amount,
      category,
      thumbnail,
      images,
      hashTags
    }
  });
};
