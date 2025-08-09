import Head from 'next/head';
import React from 'react';
import Script from 'next/script';

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

      {/* Google tag (gtag.js) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HTSJEPSVL8"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-HTSJEPSVL8');
        `}
      </Script>

      {children}
    </>
  );
}
