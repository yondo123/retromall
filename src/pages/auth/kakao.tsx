import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { kakaoLogin } from '../../api/auth';
import Spinner from '../../components/Layout/Spinner';

const Kakao = () => {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    return () => {
      router.push('/');
      if (code) {
        kakaoLogin(code)
          .then((response) => {
            const { data } = response;
            sessionStorage.setItem('accessToken', data.tokenAttributes.accessToken);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
  }, [code]);

  return <Spinner message={'로그인 중 입니다.\n 잠시만 기다려주세요.'} />;
};

export default Kakao;
