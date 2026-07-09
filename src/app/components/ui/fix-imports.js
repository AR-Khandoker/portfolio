const fs = require("fs");
const path = require("path");

function walk(dir) {
  for (const file of fs.readdirSync(dir)) {
    const full = path.join(dir, file);

    if (fs.statSync(full).isDirectory()) {
      walk(full);
      continue;
    }

    if (!/\.(ts|tsx|js|jsx)$/.test(full)) continue;

    let text = fs.readFileSync(full, "utf8");

    text = text.replace(
      /from\s+["']([^"']+?)@\d+\.\d+\.\d+["']/g,
      'from "$1"'
    );

    text = text.replace(
      /import\(["']([^"']+?)@\d+\.\d+\.\d+["']\)/g,
      'import("$1")'
    );

    fs.writeFileSync(full, text);
  }
}

walk("./src");

console.log("Done!");