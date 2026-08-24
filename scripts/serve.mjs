// Starts the production server, having first killed whatever is already holding
// the port.
//
//   node scripts/serve.mjs [port]
//
// This exists because the failure it prevents is silent and expensive. If a
// previous `next start` is still bound, the new one exits with EADDRINUSE and
// the OLD process keeps answering. It serves HTML referencing a CSS chunk that
// the rebuild has since renamed, so every page renders as unstyled markup and
// every screenshot taken against it is a lie. On Windows, `pkill` from Git Bash
// does not reliably kill the node process, which is how it kept happening.

import { execSync, spawn } from 'node:child_process';

const PORT = process.argv[2] || '3000';

function pidsOnPort(port) {
  try {
    // netstat is present on every Windows box and needs no elevation.
    const out = execSync(`netstat -ano -p tcp`, { encoding: 'utf8' });
    return [
      ...new Set(
        out
          .split('\n')
          .filter((l) => /LISTENING/.test(l) && new RegExp(`[:.]${port}\\s`).test(l))
          .map((l) => l.trim().split(/\s+/).pop())
          .filter((p) => p && p !== '0'),
      ),
    ];
  } catch {
    return [];
  }
}

const held = pidsOnPort(PORT);
for (const pid of held) {
  try {
    execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
    console.log(`freed port ${PORT} (killed pid ${pid})`);
  } catch {
    console.error(`could not kill pid ${pid} holding port ${PORT}`);
  }
}

if (held.length) {
  // taskkill returns before the socket is released.
  await new Promise((r) => setTimeout(r, 1500));
}

const child = spawn('npx', ['next', 'start', '-p', PORT], {
  stdio: 'inherit',
  shell: true,
});
child.on('exit', (code) => {
  process.exitCode = code ?? 0;
});
