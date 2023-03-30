import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getProduct } from '../../api/product';
import type { ProductDetailItem } from '../../types/product';
import Error from 'next/error';
import MobileHaeder from '../../components/Layout/MobileHeader';
import ProductView from './Detail';
import Spinner from '../../components/Layout/Spinner';

const ProductDetail = () => {
  const router = useRouter();
  const productId = router.query.id as unknown as number;
  const [id, setId] = useState<string | null>(null);
  const [productItem, setProductItem] = useState<ProductDetailItem | null>(null);

  useEffect(() => {
    if (productId) {
      setId(productId.toString());
      getProduct(productId).then((res) => {
        setProductItem(res.data);
      });

      return;
    }
  }, [productId]);

  // id가 숫자가 아닐 경우 404 페이지 출력
  if (id && isNaN(Number(id))) {
    return <Error statusCode={404} title="찾으시는 상품이 없습니다." />;
  }

  return productItem ? (
    <div>
      <MobileHaeder title={'물품 상세'} />
      <ProductView {...productItem} />
    </div>
  ) : (
    <Spinner message="페이지를 불러오고 있습니다.." />
  );
};

export default ProductDetail;
