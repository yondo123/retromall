import React, { useEffect } from 'react';
import { getCategories } from '../../api/product';
import Menu from './Menu';
import Input from '../Input/Input';
import style from './styles/navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  useEffect(() => {
    getCategories().then((res) => {
      console.log(res);
    });
    //
    // fetch('/api/login')
    //   .then((response) => response.json())
    //   .then((data) => console.log(data));
  }, []);

  return (
    <nav className={style.nav}>
      <h1 className="visually-hidden">menu</h1>
      <Input placeholder="찾으실 상품 이름을 입력하세요." />
      <ol>
        <li>
          <Link href="/product">구매해요</Link>
        </li>
        <li>
          <Link href="/product/write">판매해요</Link>
        </li>
        <li>매장홍보</li>
        <li>쪽지함</li>
        <li>내정보</li>
      </ol>
      <Menu />
      <button className="visually-hidden">
        <Link
          href={`https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=https://retromall.herokuapp.com/auth/kakao`}
        >
          <span>카카오 로그인</span>
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
