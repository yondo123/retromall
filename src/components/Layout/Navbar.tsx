import React, { useEffect } from 'react';
import { addMajorCategories } from '../../reducers/categories';
import { useDispatch } from 'react-redux';
import { getCategories } from '../../api/product';
import { constants } from '../../types/constants';
import style from './styles/navbar.module.scss';
import Menu from './Menu';
import Input from '../Input/Input';
import Link from 'next/link';

const Navbar = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategories().then((res) => {
      const responseData = res.data;
      if (responseData) {
        dispatch(
          addMajorCategories(
            responseData.data.map((category: any) => {
              return { item: category.id, name: category.category };
            })
          )
        );
      }
    });
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
        <Link href={constants.urls.kakao}>
          <span>카카오 로그인</span>
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
