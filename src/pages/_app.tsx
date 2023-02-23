import React from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import HeadLayout from '../components/Layout/Head';
import { extendedTheme } from '../chakraTheme';
import { SessionProvider } from 'next-auth/react';
// import styles from '../styles/main.scss';

const App = ({ Component, pageProps: { session, ...pageProps } }: any) => {
    return (
        <SessionProvider session={session}>
            <ChakraBaseProvider theme={extendedTheme}>
                <HeadLayout title={'Retromall에 오신 것을 환영합니다.'} />
                <Component {...pageProps} />
            </ChakraBaseProvider>
        </SessionProvider>
    );
};

export default App;
