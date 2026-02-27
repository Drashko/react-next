const fs = require('fs');
const path = require('path');

const lockPath = path.join(process.cwd(), '.next', 'dev', 'lock');
const staleAfterSeconds = Number.parseInt(process.env.NEXT_LOCK_STALE_SECONDS || '120', 10);

if (!fs.existsSync(lockPath)) {
  process.exit(0);
}

const stats = fs.statSync(lockPath);
const lockAgeSeconds = (Date.now() - stats.mtimeMs) / 1000;

if (lockAgeSeconds < staleAfterSeconds) {
  console.error(
    `[next-lock] Lock file is recent (${Math.round(lockAgeSeconds)}s old). Another dev server may still be running.\n` +
      'If you are sure it is stale, wait a bit and retry, or run "npm run dev:reset".'
  );
  process.exit(1);
}

try {
  const fd = fs.openSync(lockPath, 'r+');
  fs.closeSync(fd);
  fs.unlinkSync(lockPath);
  console.log('[next-lock] Removed stale .next/dev/lock file.');
} catch (error) {
  if (error && ['EACCES', 'EPERM', 'EBUSY'].includes(error.code)) {
    console.error(
      '[next-lock] Could not safely remove lock file (it may still be held by another process).\n' +
        'Stop other dev servers, then try again or run "npm run dev:reset".'
    );
    process.exit(1);
  }

  throw error;
}
