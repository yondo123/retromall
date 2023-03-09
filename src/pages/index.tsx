import React from 'react';
import Navbar from '../components/Layout/Navbar';
import ProductContainer from '../components/Card/ProductContainer';
import ProductItem from '../components/Card/ProductItem';
const Home = () => {
  return (
    <div>
      <Navbar />
      <ProductContainer>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ProductContainer>
    </div>
  );
};

export default Home;
