import Link from 'next/link';

const linkStyle = {
  marginRight: '1rem',
  color: '#2563eb',
  textDecoration: 'none',
  fontWeight: 600,
};

export default function Navigation() {
  return (
    <nav style={{ marginBottom: '1.5rem' }}>
      <Link href="/" style={linkStyle}>
        Home
      </Link>
      <Link href="/front/about" style={linkStyle}>
        About
      </Link>
        <Link href="/front/login" style={linkStyle}>
            Login
        </Link>
      <a href="/api/db-health" style={linkStyle}>
        DB Health API
      </a>
    </nav>
  );
}
