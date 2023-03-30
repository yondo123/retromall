import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { constants } from '../../types/constants';

export const AuthCheck =
  (Component: React.ComponentType) =>
  <T extends {}>(props: T) => {
    const router = useRouter();
    const [auth, setAuth] = useState<boolean>(false);

    /* 권한 분기 */
    useEffect(() => {
      if (!sessionStorage.getItem('accessToken')) {
        alert('로그인이 필요한 서비스 입니다.');
        router.replace(constants.urls.kakao);
        return;
      }

      setAuth(true);
    }, []);

    return auth ? <Component {...props} /> : null;
  };

export default AuthCheck;
