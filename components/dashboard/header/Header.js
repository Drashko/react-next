import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #ddd' }}>
      <strong style={{ marginRight: '1rem' }}>Dashboard</strong>
      <Link href="/" style={{ marginRight: '1rem' }}>
        Front
      </Link>
      <Link href="/dashboard" style={{ marginRight: '1rem' }}>
        Overview
      </Link>
      <Link href="/dashboard/user">Users</Link>
    </header>
  );
}
