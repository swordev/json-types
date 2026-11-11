import { readFile } from "fs/promises";
import type { JsonTypesCatalog } from "./catalog.type.ts";

export async function parseCatalogFile(path: string): Promise<JsonTypesCatalog> {
  const buffer = await readFile(path);
  return JSON.parse(buffer.toString());
}
