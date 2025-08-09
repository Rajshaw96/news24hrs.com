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
        {/* Google tag (gtag.js)*/}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-HTSJEPSVL8"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());

          gtag('config', 'G-HTSJEPSVL8');
        </script> */}
      </Head>
      {children}
    </>
  );
}
