import React from 'react';
import Head from 'next/head';

import Header from "./Header";

function Layout(props) {
  const { children } = props;
  return (
    <div>
      <Head>
        <title>Maxime Menotti</title>
        <meta charSet="utf-8" />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
