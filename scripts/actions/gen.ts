import { mkdir } from "fs/promises";
import { join } from "path";
import { compile } from "json-schema-to-typescript";
import {
  readFileIfExists,
  readJsonFile,
  renderTpl,
  writeFiles,
} from "../utils/fs";
import { fetchJson } from "../utils/http";
import { dropYamlAnchor } from "../utils/json";
import { camelize, capitalize, compare } from "../utils/string";
import { parseCatalogFile } from "../utils/catalog";
import { fileURLToPath } from "url";

export async function gen() {
  const result: { name: string; isNew: boolean }[] = [];
  const $dirname = fileURLToPath(new URL(".", import.meta.url));
  const catalog = await parseCatalogFile(join($dirname, "../../catalog.json"));
  for (const type of catalog.types) {
    if (!(type.enabled ?? true)) continue;
    console.info(`+ ${type.name}`);
    const path = join("packages", type.name);
    const pkgName = `@json-types/${type.name}`;
    const pkg = await readJsonFile<{
      version: string;
      "x-json-types"?: { lastChangeDate?: string };
    }>(join(path, "package.json"));
    let lastChangeDate =
      pkg?.["x-json-types"]?.lastChangeDate ?? new Date().toISOString();

    const newSchema = await fetchJson(type.url);

    if (type.patches?.removeYamlAnchor) dropYamlAnchor(newSchema);

    const importName = type.importName ?? capitalize(camelize(type.name));
    const oldIndexDef = await readFileIfExists(join(path, "index.d.ts"));
    const newIndexDef = await compile(
      {
        ...newSchema,
        title: importName,
      },
      "schema.json",
      {
        additionalProperties: type.patches?.additionalProperties,
      }
    );

    if (!compare(newIndexDef, oldIndexDef ?? ""))
      lastChangeDate = new Date().toISOString();

    result.push({ name: pkgName, isNew: !pkg });

    await mkdir(path, { recursive: true });
    await writeFiles(path, {
      "index.cjs": "module.exports = {};\n",
      "index.mjs": "export {};\n",
      "schema.json": newSchema,
      "index.d.ts": newIndexDef,
      "package.json": {
        name: pkgName,
        version: pkg?.version ?? "0.0.1",
        description: `TypeScript type for ${type.name}`,
        keywords: [
          "typescript",
          "json-schema",
          "schema",
          "typing",
          "type",
          type.name,
          ...(type.keywords || []),
        ],
        "x-json-types": { lastChangeDate },
        homepage: `https://github.com/swordev/json-types/tree/main/packages/${type.name}`,
        bugs: {
          url: "https://github.com/swordev/json-types/issues",
          email: "juanrgm724@gmail.com",
        },
        repository: {
          type: "git",
          url: "https://github.com/swordev/json-types",
        },
        license: "MIT",
        author: {
          name: "Juanra GM",
          email: "juanrgm724@gmail.com",
          url: "https://github.com/juanrgm",
        },
        main: "index.cjs",
        module: "index.mjs",
        files: [
          "index.cjs",
          "index.mjs",
          "index.d.ts",
          "schema.json",
          "README.md",
        ],
      },
      "README.md": await renderTpl("./scripts/README.tpl.md", {
        $importName: importName,
        $name: type.name,
        $url: type.url,
        $lastChangeDate: lastChangeDate,
      }),
    });
  }
  return result;
}
