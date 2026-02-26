import mariadb from 'mariadb';

let pool;

export function getPool() {
  if (!pool) {
    pool = mariadb.createPool({
      host: process.env.MARIADB_HOST || '127.0.0.1',
      port: Number(process.env.MARIADB_PORT || 3306),
      user: process.env.MARIADB_USER || 'root',
      password: process.env.MARIADB_PASSWORD || '',
      database: process.env.MARIADB_DATABASE || 'test',
      connectionLimit: Number(process.env.MARIADB_CONNECTION_LIMIT || 5),
    });
  }

  return pool;
}

export async function runHealthQuery() {
  const connection = await getPool().getConnection();

  try {
    const rows = await connection.query('SELECT NOW() AS now, VERSION() AS version');
    return rows[0];
  } finally {
    connection.release();
  }
}
