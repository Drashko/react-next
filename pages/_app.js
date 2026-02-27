import Navigation from '../components/Navigation';
import { AppProvider } from '../context/AppContext';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px' }}>
        <h1 style={{ marginBottom: '0.75rem' }}>React + Next.js Demo</h1>
        <Navigation />
        <Component {...pageProps} />
      </main>
    </AppProvider>
  );
}
