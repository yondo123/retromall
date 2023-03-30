import React, { useEffect, useState } from 'react';
import style from './styles/product.module.scss';
import Product from './Product';
import { getAllProducts } from '../../api/product';
import { ProductItem } from '../../types/product';

const ProductContainer = () => {
  const [products, setProducts] = useState<ProductItem[]>([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      const { data } = res.data;
      setProducts((prev) => [...prev, ...data.content]);
    });
  }, []);

  return (
    <ol className={style.productList}>
      {products.map((product) => {
        return <Product key={product.productId} {...product} />;
      })}
    </ol>
  );
};

export default ProductContainer;
