import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const KakaoAuth = () => {
    const router = useRouter(null);
    const { code } = router.query;
    useEffect(() => {
        return () => {
            router.push('/');
            console.log(code);
        };
    }, [code]);

    return <></>;
};

export default KakaoAuth;
