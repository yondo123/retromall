import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { kakaoLogin } from '../../api/auth';

const Kakao = () => {
  const router = useRouter();
  const { code } = router.query;
  useEffect(() => {
    return () => {
      console.log('kakao', code);
      router.push('/');
      if (code) {
        kakaoLogin(code)
          .then((response) => {
            console.log(JSON.stringify(response));
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
  }, [code]);

  return <h2>Loading...</h2>;
};

export default Kakao;
