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

      {/* Google Analytics */}
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

      {/* Google Tag Manager */}
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){
            w[l]=w[l]||[];
            w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
            var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-KZ4QZ5FV');
        `}
      </Script>

      {children}
    </>
  );
}
