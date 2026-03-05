import Navigation from '../components/Navigation';
import { AppProvider } from '../components/dashboard/context/DashboardContext';
import '../public/assets/css/style.css'
import {useRouter} from "next/router";
import Layout from "../components/dashboard/layout/Layout";

export default function App({ Component, pageProps }) {

    const router = useRouter();

    const pagesWithoutLayout = [
        '/login',
        '/login2',
        '/loginStatus',
        '/registration',
        '/registration2',
        '/resetPassword',
        '/updatePassword',
        '/comingSoon',
        '/comingSoon2',
        '/error400',
        '/error403',
        '/error404',
        '/error408',
        '/error500',
        '/error503',
        '/error504',
        '/login3',
        '/underConstruction',
        '/pricingTable',
        '/pricingTable2'
    ];

    const shouldUseLayout = !pagesWithoutLayout.includes(router.pathname);

  return (
    <AppProvider>
        {shouldUseLayout ? (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        ) : (
            <Component {...pageProps} />
        )}
      {/*<main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px' }}>*/}
      {/*  <h1 style={{ marginBottom: '0.75rem' }}>React + Next.js Demo</h1>*/}
      {/*  <Navigation />*/}
      {/*  <Component {...pageProps} />*/}
      {/*</main>*/}
    </AppProvider>
  );
}
