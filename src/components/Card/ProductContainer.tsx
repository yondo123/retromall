import React from 'react';
import style from './styles/product.module.scss';

interface ContainerProps {
  children: React.ReactNode;
}
const ProductContainer = (props: ContainerProps) => {
  return <ol className={style.productList}>{props.children}</ol>;
};

export default ProductContainer;
