import React from 'react';
import Navbar from '../components/Layout/Navbar';
import ProductContainer from '../components/Card/ProductContainer';
import Link from 'next/link';
const Home = () => {
  return (
    <div>
      <button>
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_DEV}`}
        >
          <a>카카오테스트</a>
        </Link>
      </button>
      <Navbar />
      <ProductContainer />
    </div>
  );
};

export default Home;
