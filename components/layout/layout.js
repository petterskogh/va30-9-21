import React from 'react';
import Head from 'next/head';

const Layout = (props) => {
  return(
    <div style={{height: '100vh', display: 'flex', flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
      <Head>
        <title>Veckoaktivitet :)</title>
        <meta name="description" content="Veckans aktivitet handlar om React, Next.js och Tailwind" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      {props.children}
    </div>
  );
}

export default Layout;