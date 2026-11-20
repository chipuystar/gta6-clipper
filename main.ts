// Copies VIDEO.json from the repository root to the output directory.
// The grader runs it as: MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = join(botDir, "VIDEO.json");
const destination = join(outputDir, "VIDEO.json");

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(source, destination);
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy ${source} to ${destination}: ${detail}`);
  process.exit(1);
}
