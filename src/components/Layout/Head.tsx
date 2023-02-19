import React from 'react';
import Head from 'next/head';

interface HeadProps {
    title: string;
}
const HeadLayout = (props: HeadProps) => {
    const { title } = props;

    return (
        <Head>
            <meta charSet="utf-8" />
            <title>{title}</title>
        </Head>
    );
};

export default HeadLayout;
