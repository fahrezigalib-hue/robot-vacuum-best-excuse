// Entry for make.fun bounty u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214:
// "The Robot Vacuum's Best Excuse" — one line, at most 140
// characters, written to /output/entry.txt. Deterministic.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I did not miss that spot. I mapped it, judged it, and ruled the crumbs have tenure. Eviction needs a court order and a full battery.";

// The bounty gate accepts 1 to 140 characters; fail loudly rather than
// write an entry the scorer would mark invalid.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry line is ${LINE.length} characters, outside 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log("wrote entry.txt");
