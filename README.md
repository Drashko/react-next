# React + Next.js Setup

This project is configured to use the latest `next`, `react`, and `react-dom` packages.

## Prerequisites

- Node.js 18.18+ (recommended: current LTS)
- npm 9+

## Install dependencies

```bash
npm install
```

## Run the app in development

```bash
npm run dev
```

Then open:

- http://localhost:3000 (Home page)
- http://localhost:3000/about (About page)
- http://localhost:3000/api/react (React API route)

## Build for production

```bash
npm run build
```

## Start production server

```bash
npm run start
```

## What is included

- **Home page** (`/`) with a fetch call to `/api/react`
- **About page** (`/about`)
- **Navigation bar** shared across pages
- **API route** (`/api/react`) returning React version info

## Notes

If `npm install` fails with a `403 Forbidden` error in your environment, your registry access may be restricted by network/security policy.
