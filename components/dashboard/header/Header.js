import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #ddd' }}>
      <strong style={{ marginRight: '1rem' }}>Dashboard</strong>
      <Link href="/front" style={{ marginRight: '1rem' }}>
        Front
      </Link>
      <Link href="/dashboard">Overview</Link>
    </header>
  );
}
