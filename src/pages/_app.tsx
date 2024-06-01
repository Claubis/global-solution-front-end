
/* Importações gerais */

import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

/* 
Instalar:
npm install next-auth react
*/
import { SessionProvider, useSession } from "next-auth/react";

import '../globals.css'

// Importações de componentes
import Header from '../components/Header'; 


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {


  return (

    <SessionProvider session={session}>
        
        <Header/>
          <Component {...pageProps} />
    </SessionProvider>

  );
}

export default MyApp;