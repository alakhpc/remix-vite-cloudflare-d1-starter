import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./app/db/tables/*",
  out: "./drizzle",
  dbCredentials: {
    url: ".wrangler/state/v3/d1/miniflare-D1DatabaseObject/a250d44dd518b57d147ab64ae3c153c353cacdbee3fecef9eb8eb4b711e9a1c9.sqlite",
  },
});
