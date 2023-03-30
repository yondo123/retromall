import request from './instance';
import { Product } from '../types/product';

export const getCategories = () => {
  return request({
    url: '/req/categories',
    method: 'get'
  });
};

export const getAllProducts = () => {
  return request({
    method: 'get',
    url: '/req/products'
  });
};

export const getProduct = (productId: number) => {
  const accessToken = sessionStorage.getItem('accessToken');
  return request({
    headers: { Authorization: accessToken ? `Bearer ${accessToken}` : '' },
    method: 'get',
    url: `/req/products/${productId}`
  });
};

export const registerProduct = (product: Product) => {
  const { content, amount, images, category, hashTags, thumbnail } = product;
  return request({
    headers: { Authorization: `Bearer ${sessionStorage.getItem('accessToken')}` },
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
