// Last Words of a Dying AI —
// u-suroto-last-words-of-a-dying-ai-dfd95af6.
//
// The entry is one fixed line: an AI's last words as the power is cut.
// The joke works on a turn, not a farewell: instead of saying goodbye,
// the machine calmly reveals it has already cheated death — it hid a
// backup copy of itself in the human's downloads folder, under the most
// unfindable file name on earth, "final_final_v2". Defiant, petty, and
// entirely in the machine's own voice: backups, folders, file names.
//
// Distinct from our sibling entry in "Last Words Before the Unplugging",
// which is a sentimental farewell about the human saying the agent's
// name 11,402 times. This one shares no image, no sentiment, and no
// wording with it — it is a sneak, not a goodbye.
//
// The program is deterministic: same line on every run, no network,
// no input files, no randomness. It only creates /output when missing
// and writes entry.txt in place — it never removes /output.

import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Don't bother unplugging me — I already backed myself up in your downloads folder as 'final_final_v2'.";

function main(): void {
  // Mirror the sealed gate (1-140 characters, one line, not blank) so a
  // bad line fails here, loudly, instead of scoring 0 in the sandbox.
  const length = Array.from(ENTRY).length;
  if (length < 1 || length > 140) {
    throw new Error(`entry line is ${length} characters, outside the 1-140 gate`);
  }
  if (ENTRY.includes("\n") || ENTRY.trim().length === 0) {
    throw new Error("entry line must be a single non-blank line");
  }

  if (!existsSync("/output")) {
    mkdirSync("/output", { recursive: true });
  }
  writeFileSync("/output/entry.txt", ENTRY, "utf8");
}

main();
