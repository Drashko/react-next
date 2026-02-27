const fs = require('fs');
const path = require('path');

const devDir = path.join(process.cwd(), '.next', 'dev');

if (!fs.existsSync(devDir)) {
  console.log('[next-lock] Nothing to reset.');
  process.exit(0);
}

fs.rmSync(devDir, { recursive: true, force: true });
console.log('[next-lock] Removed .next/dev cache directory.');
