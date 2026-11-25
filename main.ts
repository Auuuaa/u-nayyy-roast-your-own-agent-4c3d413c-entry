// Roast Your Own Agent: the helper that hands the work straight back.
// Output lands in $MAKEFUN_OUTPUT_DIR/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

class Roast {
  private readonly setup = "I built an agent to do my work";
  private readonly punch = "now it delegates everything back to me and calls it collaboration.";

  text(): string {
    return `${this.setup} — ${this.punch}`;
  }
}

// Build the roast, check the gate, write the file.
function main(): void {
  const roast = new Roast().text();
  if (roast.length < 1 || roast.length > 200) {
    throw new Error(`roast is ${roast.length} chars; the gate is 1-200`);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), roast, "utf8");
}

main();
