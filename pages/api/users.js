/* eslint-env node */
/* global process */

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { API_BASE_URL: apiBaseUrl, API_KEY: apiKey } = process.env;

  if (!apiBaseUrl) {
    return res.status(500).json({
      error: 'API_BASE_URL is not configured',
      hint: 'Set API_BASE_URL in .env.local (or .env) and restart the Next.js server',
    });
  }

  const upstreamUrl = new URL('/users', apiBaseUrl);

  try {
    const upstreamResponse = await fetch(upstreamUrl, {
      headers: {
        ...(apiKey ? { Authorization: `Bearer ${apiKey}` } : {}),
        Accept: 'application/json',
      },
    });

    const responseText = await upstreamResponse.text();
    let payload;

    try {
      payload = JSON.parse(responseText);
    } catch {
      payload = { raw: responseText };
    }

    if (!upstreamResponse.ok) {
      return res.status(upstreamResponse.status).json({
        error: 'Failed to fetch users from external API',
        details: payload,
      });
    }

    return res.status(200).json(payload);
  } catch (error) {
    return res.status(502).json({
      error: 'Could not reach external API',
      details: error.message,
    });
  }
}
