import { writeFile } from "fs/promises";
import { compile } from "json-schema-to-typescript";
import schema from "../../catalog.schema.json";
import { fileURLToPath } from "url";
import { join } from "path";

export async function genCatalogType() {
  const type = await compile(schema as any, "catalog.schema.json");
  const $dirname = fileURLToPath(new URL(".", import.meta.url));
  const typePath = join($dirname, "../utils/catalog.type.ts");
  await writeFile(typePath, type);
}
