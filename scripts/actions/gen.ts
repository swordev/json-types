import { mkdir } from "fs/promises";
import { join } from "path";
import { compile } from "json-schema-to-typescript";
import { readJsonFile, renderTpl, writeFiles } from "../utils/fs";
import { fetchJson } from "../utils/http";
import { dropYamlAnchor } from "../utils/json";
import { camelize, capitalize } from "../utils/string";
import { parseCatalogFile } from "../utils/catalog";
import { fileURLToPath } from "url";

export async function gen() {
  const result: { name: string; isNew: boolean }[] = [];
  const $dirname = fileURLToPath(new URL(".", import.meta.url));
  const catalog = await parseCatalogFile(join($dirname, "../../catalog.json"));
  for (const type of catalog.types) {
    console.info(`+ ${type.name}`);
    const path = join("packages", type.name);
    const pkgName = `@json-types/${type.name}`;
    await mkdir(path, { recursive: true });
    const schema = await fetchJson(type.url);
    const pkg = await readJsonFile<{ version: string }>(
      join(path, "package.json")
    );
    result.push({ name: pkgName, isNew: !pkg });
    if (type.patches?.removeYamlAnchor) dropYamlAnchor(schema);
    await writeFiles(path, {
      "index.cjs": "module.exports = {};\n",
      "index.mjs": "export {};\n",
      "schema.json": schema,
      "index.d.ts": await compile(
        {
          ...schema,
          title: capitalize(camelize(type.name)),
        },
        "schema.json",
        {
          additionalProperties: type.patches?.additionalProperties,
        }
      ),
      "package.json": {
        name: pkgName,
        version: pkg?.version ?? "0.0.1",
        description: `TypeScript type for ${type.name}`,
        tags: [
          "typescript",
          "json-schema",
          "schema",
          "typing",
          "type",
          type.name,
          ...(type.tags || []),
        ],
        homepage: "https://github.com/swordev/json-types",
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
        $name: type.name,
        $url: type.url,
      }),
    });
  }
  return result;
}
