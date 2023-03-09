import React from 'react';
import Head from 'next/head';

interface HeadProps {
  title: string;
}
const HeadLayout = (props: HeadProps) => {
  const { title } = props;

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" httpEquiv="X-UA-Compatible" />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
};

export default HeadLayout;
