import React from 'react';
import { registerProduct } from '../../api/product';
import { useState } from 'react';
import { useRouter } from 'next/router';
import style from './styles/writeform.module.scss';
import Input from '../Input/Input';
import Textarea from '../Layout/Textarea';
import Button from '../Layout/Button';
import { constants } from '../../types/';

const ProductWriteForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [hashTags, setHashTags] = useState<string[]>([]);
  const [amount, setAmount] = useState<number>(0);

  const onSubmitHandler: React.FormEventHandler = (event) => {
    event.preventDefault();
    registerProduct({
      hashTags,
      amount,
      category: 'Xbox',
      images: [
        'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'
      ],
      thumbnail:
        'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8eGJveHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
      content
    })
      .then((res) => {
        if (typeof res.data === 'number') {
          router.push(constants.urls.kakao);
          return;
        }
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err);
        console.log('에러');
      });
  };
  return (
    <form onSubmit={onSubmitHandler} className={style['write-form']}>
      <h2 className={'visually-hidden'}>글쓰기</h2>
      <label htmlFor="product-hash-tag">
        <p>&#42; 해시태그</p>
        <Input
          placeholder={'해시태그를 입력해주세요.'}
          id="product-hash-tag"
          onInput={(e) => {
            const { currentTarget } = e;
            setHashTags(
              currentTarget.value.split(',').map((hash) => {
                return hash.trim().substr(1);
              })
            );
          }}
        />
      </label>
      <label htmlFor="product-title">
        <p>&#42; 물품 이름</p>
        <Input
          placeholder={'물품 이름을 입력해주세요.'}
          id="product-title"
          onInput={(e) => {
            setTitle(e.currentTarget.value);
          }}
        />
      </label>
      <label htmlFor="product-price">
        <p> &#42; 가격</p>
        <Input
          placeholder={'판매 가격을 입력해주세요. (숫자만 입력해주세요)'}
          type="number"
          id="product-price"
          onInput={(e) => {
            setAmount(Number(e.currentTarget.value));
          }}
        />
      </label>
      <label>
        <p> &#42; 설명</p>
        <Textarea
          placeholder={'물품에 대한 설명을 입력해주세요. 자세할수록 좋아요.'}
          onChange={(e) => {
            setContent(e.currentTarget.value);
          }}
        />
      </label>
      <div className={style.submit}>
        <Button type="submit" variants="fill" size="full" color="accent">
          등록 하기
        </Button>
      </div>
    </form>
  );
};

export default ProductWriteForm;
