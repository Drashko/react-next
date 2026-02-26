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

Set `API_BASE_URL` in `.env.local`, then open:

- http://localhost:3000/api/users

## Build for production

```bash
npm run build
npm run start
```

## Notes

If `npm install` fails with `403 Forbidden` in your environment, your package registry access is restricted by network/security policy.
