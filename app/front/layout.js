import Navigation from '../../components/Navigation';

export default function FrontLayout({ children }) {
  return (
    <main style={{ fontFamily: 'Arial, sans-serif', padding: '2rem', maxWidth: '900px' }}>
      <h1 style={{ marginBottom: '0.75rem' }}>React + Next.js Demo</h1>
      <Navigation />
      {children}
    </main>
  );
}
