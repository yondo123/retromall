import React from 'react';
import MobileHaeder from '../../components/Layout/MobileHeader';
import ProductWriteForm from '../../components/Form/ProductWriteForm';
import AuthCheck from '../../components/Hoc/AuthCheck';

const Write = () => {
  return (
    <div>
      <MobileHaeder title={'물품 등록'} />
      <ProductWriteForm />
    </div>
  );
};

export default AuthCheck(Write);
