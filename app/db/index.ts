import { drizzle } from "drizzle-orm/d1";
import * as tables from "./tables";

export function makeDrizzle(d1: D1Database) {
  return drizzle(d1, { schema: { ...tables } });
}

export type Database = Awaited<ReturnType<typeof makeDrizzle>>;
