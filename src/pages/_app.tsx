import React from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import HeadLayout from '../components/Layout/Head';
import { extendedTheme } from '../chakraTheme';
import '../style/main.scss';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <SessionProvider>
            <ChakraBaseProvider theme={extendedTheme}>
                <HeadLayout title={'Retromall에 오신 것을 환영합니다.'} />
                <Component {...pageProps} />
            </ChakraBaseProvider>
        </SessionProvider>
    );
};
export default App;
