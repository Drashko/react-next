import { useEffect, useState } from 'react';

export default function HomePage() {
  const [apiMessage, setApiMessage] = useState('Loading API message...');

  useEffect(() => {
    async function loadMessage() {
      const response = await fetch('/api/react');
      const data = await response.json();
      setApiMessage(data.message);
    }

    loadMessage();
  }, []);

  return (
    <section>
      <h2>Home</h2>
      <p>Welcome to the home page.</p>
      <p>
        API says: <strong>{apiMessage}</strong>
      </p>
    </section>
  );
}
