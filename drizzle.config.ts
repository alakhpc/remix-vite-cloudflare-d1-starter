import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./app/db/tables/*",
  out: "./drizzle",
  dbCredentials: {
    url: "DATABASE_PATH",
  },
});
