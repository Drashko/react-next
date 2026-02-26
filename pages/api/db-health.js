import { runHealthQuery } from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const result = await runHealthQuery();

    return res.status(200).json({
      status: 'ok',
      serverTime: result.now,
      dbVersion: result.version,
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message,
    });
  }
}
