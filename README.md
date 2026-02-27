# React + Next.js Setup

This project uses Next.js + React and includes:

- Home page (`/`)
- About page (`/about`)
- React API route (`/api/react`)
- External API proxy route (`/api/users`)
- MariaDB health API route (`/api/db-health`)

## Prerequisites

- Node.js 18.18+ (recommended: current LTS)
- npm 9+
- A running MariaDB server (for database route testing)

## Install dependencies

```bash
npm install
```

## Run the app in development

```bash
npm run dev
```

Open:

- http://localhost:3000
- http://localhost:3000/about
- http://localhost:3000/api/react

## Connect to MariaDB

1. Create a local env file:

```bash
cp .env.example .env.local
```

2. Update credentials in `.env.local`:

```env
MARIADB_HOST=127.0.0.1
MARIADB_PORT=3306
MARIADB_USER=root
MARIADB_PASSWORD=your_password
MARIADB_DATABASE=test
MARIADB_CONNECTION_LIMIT=5

# External API proxy route
API_BASE_URL=https://jsonplaceholder.typicode.com
API_KEY=
```

3. Test DB connection via API route:

- http://localhost:3000/api/db-health

If the connection succeeds, you get JSON with `status: "ok"`, server time, and MariaDB version.


## External API proxy route (best practice)

This project now includes a Next.js API route that proxies requests to an external backend:

- Local route: `GET /api/users`
- Upstream route: `${API_BASE_URL}/users`

Why use this pattern:

- Keeps API keys server-side
- Avoids exposing backend internals to the browser
- Centralizes error handling for external API calls

Set `API_BASE_URL` in `.env.local` (or `.env`) and restart `npm run dev`, then open:

- http://localhost:3000/api/users

If your editor shows `process.env.API_BASE_URL` as unresolved inside API routes, this is usually a static-analysis warning only; the variable is read at runtime by Next.js from your env files.


## Troubleshooting `Unable to acquire lock at .next/dev/lock`

If you see this on Windows after a crash/restart, it is usually a **stale lock file**, not a real running server.

- `.next/dev` is expected and is used by Next.js for development build artifacts/cache.
- The `lock` file prevents two `next dev` processes from writing to the same `.next/dev` folder.

This project now runs a `predev` script that automatically removes a stale lock when the recorded PID is no longer running.

If a process is actually still running, the script will stop with a clear message instead of deleting the lock.

## Build for production

```bash
npm run build
npm run start
```

## Notes

If `npm install` fails with `403 Forbidden` in your environment, your package registry access is restricted by network/security policy.
