import React from 'react';
import wrapper from '../store/configureStore';
import HeadLayout from '../components/Layout/Head';
import { SessionProvider } from 'next-auth/react';
import '../styles/reset.scss';
import '../styles/main.scss';

const Retromall = ({ Component, pageProps: { session, ...pageProps } }: any) => {
  return (
    <SessionProvider session={session}>
      <HeadLayout title={'Retromall에 오신 것을 환영합니다.'} />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default wrapper.withRedux(Retromall);
