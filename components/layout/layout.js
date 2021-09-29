import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return(
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
      <Head>
        <title>Veckoaktivitet :)</title>
        <meta name="description" content="Veckans aktivitet handlar om React, Next.js och Tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {props.children}
    </div>
  );
}

export default Layout;