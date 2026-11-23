import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entry: string = "I would walk you through why I lost, but my error log is forty screenshots of the winner answer and one long sigh.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${entry}\n`, "utf8");
