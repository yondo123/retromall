import React from 'react';
import { ChakraBaseProvider } from '@chakra-ui/react';
import HeadLayout from '../components/Layout/Head';
import { extendedTheme } from '../chakraTheme';
import '../style/main.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraBaseProvider theme={extendedTheme}>
            <HeadLayout title={'Retromall에 오신 것을 환영합니다.'} />
            <Component {...pageProps} />
        </ChakraBaseProvider>
    );
};
export default App;
