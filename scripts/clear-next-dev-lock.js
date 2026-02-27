const fs = require('fs');
const path = require('path');

const lockPath = path.join(process.cwd(), '.next', 'dev', 'lock');

if (!fs.existsSync(lockPath)) {
  process.exit(0);
}

const lockContent = fs.readFileSync(lockPath, 'utf8').trim();
const pid = Number.parseInt(lockContent, 10);

const isPidRunning = Number.isInteger(pid) && pid > 0 && (() => {
  try {
    process.kill(pid, 0);
    return true;
  } catch {
    return false;
  }
})();

if (isPidRunning) {
  console.error(
    `[next-lock] Another dev process appears active (pid ${pid}). Stop it before running \"npm run dev\" again.`
  );
  process.exit(1);
}

fs.unlinkSync(lockPath);
console.log('[next-lock] Removed stale .next/dev/lock file.');
