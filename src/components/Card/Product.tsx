import React, { useCallback } from 'react';
import style from './styles/product.module.scss';
import LikeIcon from '../Icons/Like';
import Tag from '../Layout/Tag';
import { useRouter } from 'next/router';
import { useMoment } from './hooks/useMoment';
import { ProductItem } from '../../types/product';

const Product = (props: ProductItem) => {
  const { push } = useRouter();
  const { thumbnail, likes, createdAt, amount, productId, title } = props;
  const { getNowFrom } = useMoment();

  const handleClick = useCallback(() => {
    push(`/product/${productId}`);
  }, []);

  return (
    <li className={style.productItem} onClick={handleClick}>
      <h2 className={style.productTitle}>{title}</h2>
      <img src={thumbnail} alt="product-name" />
      <section className={style.productDetail}>
        <div className={style.like}>
          <div>
            <LikeIcon height={12} width={12} />
          </div>
          <span>Like {likes}</span>
        </div>
        <div>
          <Tag value={'asd'} />
        </div>
        <p className={style.price}>
          {amount} 원<span className={style.ago}>{getNowFrom(createdAt)}</span>
        </p>
      </section>
    </li>
  );
};

export default Product;
