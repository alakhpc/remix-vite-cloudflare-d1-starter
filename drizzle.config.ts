import { defineConfig } from "drizzle-kit";
import fs from "node:fs";
import p from "path";

const WRANGLER_D1_BASE_PATH = ".wrangler/state/v3/d1/miniflare-D1DatabaseObject";

const sqliteFileName = fs
  .readdirSync(p.join(__dirname, WRANGLER_D1_BASE_PATH))
  .find((f) => f.endsWith(".sqlite"));

if (!sqliteFileName) {
  throw new Error("Could not find sqlite file");
}

export default defineConfig({
  dialect: "sqlite",
  schema: "./app/db/tables/*",
  out: "./drizzle",
  dbCredentials: {
    url: p.join(WRANGLER_D1_BASE_PATH, sqliteFileName),
  },
});
