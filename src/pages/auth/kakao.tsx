import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Kakao = () => {
    const router = useRouter();
    const { code } = router.query;
    useEffect(() => {
        return () => {
            router.push('/');
            console.log(code);
        };
    }, [code]);

    return <></>;
};

export default Kakao;
