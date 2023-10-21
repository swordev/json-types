import { readFile } from "fs/promises";
import { JsonTypesCatalog } from "./catalog.type";

export async function parseCatalogFile(
  path: string
): Promise<JsonTypesCatalog> {
  const buffer = await readFile(path);
  return JSON.parse(buffer.toString());
}
