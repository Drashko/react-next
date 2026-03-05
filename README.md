# React + Next.js Setup

This project uses the **Pages Router** in Next.js and keeps all pages/components in place.

## Included routes

- Home page (`/`)
- About page (`/about`)
- LoginContent page (`/login`)
- React API route (`/api/react`)
- External API proxy route (`/api/users`)
- MariaDB health API route (`/api/db-health`)

## Prerequisites

- Node.js 18.18+
- npm 9+
- A running MariaDB server (only for `/api/db-health`)

## Fresh setup (from scratch)

```bash
npm run setup:fresh
npm run dev
```

This does a clean `.next` reset and reinstalls dependencies.

## Standard commands

```bash
npm run dev
npm run build
npm run start
npm run clean
```

## Environment variables

Create `.env.local`:

```env
MARIADB_HOST=127.0.0.1
MARIADB_PORT=3306
MARIADB_USER=root
MARIADB_PASSWORD=your_password
MARIADB_DATABASE=test
MARIADB_CONNECTION_LIMIT=5

API_BASE_URL=https://jsonplaceholder.typicode.com
API_KEY=
```

Then restart the dev server.
