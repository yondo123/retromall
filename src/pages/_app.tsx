import React, { useEffect } from 'react';
import HeadLayout from '../components/Layout/Head';
import { SessionProvider } from 'next-auth/react';
import '../styles/reset.scss';
import '../styles/main.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  useEffect(() => {
    console.log('하이로');
  }, []);
  return (
    <SessionProvider session={session}>
      <HeadLayout title={'Retromall에 오신 것을 환영합니다.'} />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
