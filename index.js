#!/usr/bin/env node
// create-olimjon-admin — scaffold a React + TS + Vite admin panel.
// Zero runtime dependencies (Node >= 18).

import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TEMPLATE_DIR = path.join(__dirname, "template");

// ── tiny ANSI helpers ────────────────────────────────────────────────
const c = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
};
const color = (s, code) => `${code}${s}${c.reset}`;

// Files that must be renamed on the way out (npm strips a real .gitignore
// from published packages, so we ship it as _gitignore).
const RENAME_ON_COPY = {
  _gitignore: ".gitignore",
};

function ask(question) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  return new Promise((resolve) =>
    rl.question(question, (answer) => {
      rl.close();
      resolve(answer.trim());
    })
  );
}

// Make a string a valid npm package name.
function sanitizePackageName(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/^[._]+/, "")
    .replace(/[^a-z0-9-~]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "") || "olimjon-admin-app";
}

function isEmptyDir(dir) {
  if (!fs.existsSync(dir)) return true;
  const files = fs.readdirSync(dir).filter((f) => f !== ".git");
  return files.length === 0;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const renamed = RENAME_ON_COPY[entry.name] ?? entry.name;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, renamed);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main() {
  console.log();
  console.log(color("  create-olimjon-admin", c.bold + c.cyan));
  console.log(color("  React + TypeScript + Vite admin starter", c.dim));
  console.log();

  if (!fs.existsSync(TEMPLATE_DIR)) {
    console.error(color("  ✖ Template files are missing from the package.", c.red));
    process.exit(1);
  }

  // Target directory: from argv or interactive prompt.
  let target = process.argv[2];
  if (!target) {
    target = await ask(color("  Project name: ", c.bold) + color("(olimjon-admin-app) ", c.dim));
    if (!target) target = "olimjon-admin-app";
  }

  const projectName = sanitizePackageName(path.basename(target));
  const destDir = path.resolve(process.cwd(), target);

  // Guard against overwriting a non-empty directory.
  if (!isEmptyDir(destDir)) {
    const answer = await ask(
      color(`  Directory "${target}" is not empty. Continue anyway? `, c.yellow) +
        color("(y/N) ", c.dim)
    );
    if (answer.toLowerCase() !== "y" && answer.toLowerCase() !== "yes") {
      console.log(color("  Aborted.", c.red));
      process.exit(1);
    }
  }

  console.log();
  console.log(color(`  Scaffolding project in ${destDir} ...`, c.dim));

  copyDir(TEMPLATE_DIR, destDir);

  // Inject the project name into package.json.
  const pkgPath = path.join(destDir, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkgRaw = fs.readFileSync(pkgPath, "utf8").replace(/\{\{PROJECT_NAME\}\}/g, projectName);
    fs.writeFileSync(pkgPath, pkgRaw);
  }

  // Seed a .env from the example so `npm run dev` works out of the box.
  const envExample = path.join(destDir, ".env.example");
  const envFile = path.join(destDir, ".env");
  if (fs.existsSync(envExample) && !fs.existsSync(envFile)) {
    fs.copyFileSync(envExample, envFile);
  }

  // Pick the package manager the user invoked us with.
  const pm = (process.env.npm_config_user_agent || "").startsWith("yarn")
    ? "yarn"
    : (process.env.npm_config_user_agent || "").startsWith("pnpm")
    ? "pnpm"
    : (process.env.npm_config_user_agent || "").startsWith("bun")
    ? "bun"
    : "npm";
  const runDev = pm === "npm" ? "npm run dev" : `${pm} dev`;
  const install = pm === "npm" ? "npm install" : `${pm} install`;

  console.log(color("  ✔ Done!", c.green + c.bold));
  console.log();
  console.log("  Next steps:");
  console.log();
  if (destDir !== process.cwd()) {
    console.log(color(`    cd ${target}`, c.cyan));
  }
  console.log(color(`    ${install}`, c.cyan));
  console.log(color("    # edit .env and set VITE_API_ROOT", c.dim));
  console.log(color(`    ${runDev}`, c.cyan));
  console.log();
}

main().catch((err) => {
  console.error(color("  ✖ " + err.message, c.red));
  process.exit(1);
});
