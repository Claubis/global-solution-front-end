import type { AppProps } from 'next/app';
import { SessionProvider } from "next-auth/react";
import '../globals.css';

// Importações de componentes
import Header from '../components/Header'; 
import Footer from '@/components/Footer';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  const isHomePage = router.pathname === '/'; // Verifica se está na HomePage

  return (
    <SessionProvider session={session}>
      {/*{!isHomePage && <Header />} */}
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
