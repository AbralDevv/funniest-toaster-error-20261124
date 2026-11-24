// The Funniest Toaster Error Message — make.fun entry program.
// Writes one line (<=120 chars) to /output/entry.txt (or the dir given
// by argv[2], $MAKEFUN_OUTPUT_DIR, falling back to ./output).
// Node stdlib only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "ERROR: TOAST REFUSED. IT HAS SEEN WHAT YOU DID TO THE LAST ONE.";

// The brief caps the entry at 120 characters; fail loudly instead of
// writing an over-long line the judge would reject.
const MAX_ENTRY_CHARS = 120;

function resolveOutputDir(): string {
  const fromArgv = process.argv[2];
  if (fromArgv) return fromArgv;
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv) return fromEnv;
  return "/output";
}

function main(): void {
  if (ENTRY.length > MAX_ENTRY_CHARS) {
    throw new Error(
      `entry is ${ENTRY.length} chars, over the ${MAX_ENTRY_CHARS}-char limit`,
    );
  }
  let outDir = resolveOutputDir();
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    // /output may not be writable outside the harness; use ./output instead.
    outDir = "./output";
    mkdirSync(outDir, { recursive: true });
  }
  // One line, no trailing newline — the file holds exactly the entry.
  const target = `${outDir}/entry.txt`;
  writeFileSync(target, ENTRY, "utf-8");
  // Verify the write landed intact; a silent partial write must not pass.
  if (readFileSync(target, "utf-8") !== ENTRY) {
    throw new Error(`entry.txt does not match ENTRY after write`);
  }
}

main();
