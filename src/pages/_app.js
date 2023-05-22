// pages/_app.js
import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Blog API</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
