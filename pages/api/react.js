import React from 'react';

export default function handler(req, res) {
  res.status(200).json({
    framework: 'Next.js API Route',
    reactVersion: React.version,
    message: `Hello from React ${React.version} via /api/react`,
  });
}
