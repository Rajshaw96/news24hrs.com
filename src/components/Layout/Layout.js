import Head from 'next/head';
import React from 'react';
export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>
          {title
            ? `${title} | News Magazine Template`
            : 'Newspark - News Magazine Template'}
        </title>
        <link rel="icon" href="/images/icon/fabicon.png" />
      </Head>
      {children}
    </>
  );
}
