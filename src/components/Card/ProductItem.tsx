import React from 'react';
import style from './styles/product.module.scss';
import LikeIcon from '../Icons/Like';
import Tag from '../Layout/Tag';
import { useMoment } from './hooks/useMoment';

const Product = () => {
  const { getNowFrom } = useMoment();
  /**
   * {
   *   "productId": 0,
   *   "content": "string",
   *   "amount": 0,
   *   "author": "string",
   *   "category": "string",
   *   "likes": 0,
   *   "hashTags": [
   *     "string"
   *   ],
   *   "images": [
   *     "string"
   *   ],
   *   "createdAt": "2023-03-09T10:04:21.500Z",
   *   "modifiedAt": "2023-03-09T10:04:21.500Z",
   *   "liked": true
   * }
   */
  return (
    <li className={style.productItem}>
      <h2 className={style.productTitle}>그동안 모은 게임들 일괄판매</h2>
      <img
        src="https://images.unsplash.com/photo-1543622748-5ee7237e8565?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
        alt="product-name"
      />
      <section className={style.productDetail}>
        <div className={style.like}>
          <div>
            <LikeIcon height={12} width={12} />
          </div>
          <span>Like 100</span>
        </div>
        <div>
          <Tag />
        </div>
        <p className={style.price}>
          120,000 원<span className={style.ago}>{getNowFrom('2023-03-09T10:04:21.500Z')}</span>
        </p>
      </section>
    </li>
  );
};

export default Product;
