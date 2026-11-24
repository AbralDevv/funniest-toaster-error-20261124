// The Funniest Toaster Error Message — one-liner revision (Neon FINAL line).
// Writes the entry line verbatim to entry.txt in the grader's output dir.
// Output dir: $MAKEFUN_OUTPUT_DIR, else /output, else ./output (repo dir is
// read-only under the grader, so the entry never writes next to this file).

import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "ERR 402: 'Golden Brown' requires Toast+ ($7.99/mo). Free tier capped at 'Slightly Warm'; watch 2 ads to unlock Eject.";

function resolveOutputDir(): string {
  const env = process.env.MAKEFUN_OUTPUT_DIR;
  if (env && env.length > 0) return env;
  try {
    fs.accessSync("/output", fs.constants.W_OK);
    return "/output";
  } catch {
    return path.join(process.cwd(), "output");
  }
}

const outDir = resolveOutputDir();
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars) to ${outDir}`);
