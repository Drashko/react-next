'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [apiMessage, setApiMessage] = useState('Loading API message...');
  const [users, setUsers] = useState([]);
  const [usersError, setUsersError] = useState('');

  useEffect(() => {
    async function loadMessage() {
      const response = await fetch('/api/react');
      const data = await response.json();
      setApiMessage(data.message);
    }

    async function loadUsers() {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();

        if (!response.ok) {
          setUsersError(data.error || 'Failed to load users');
          return;
        }

        setUsers(Array.isArray(data) ? data.slice(0, 5) : []);
      } catch {
        setUsersError('Could not fetch users from proxy route');
      }
    }

    loadMessage();
    // loadUsers();
  }, []);

  return (
    <section>
      <h2>Home</h2>
      <p>Welcome to the home page.</p>
      <p>
        API says: <strong>{apiMessage}</strong>
      </p>

      <h3>Users from external API (via Next.js proxy)</h3>
      {usersError ? (
        <p>{usersError}</p>
      ) : (
        <ul>
          {/*{users.map((user) => (*/}
          {/*  <li key={user.id}>{user.name || user.username || `User ${user.id}`}</li>*/}
          {/*))}*/}
        </ul>
      )}
    </section>
  );
}
