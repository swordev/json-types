import { mkdir, readFile, writeFile } from "fs/promises";
import data from "./../data.json";
import { join } from "path";
import { compile } from "json-schema-to-typescript";
import traverse from "json-schema-traverse";

for (const type of data.types) {
  console.info(`+ ${type.name}`);
  const path = join("packages", type.name);
  await mkdir(path, { recursive: true });
  const schema = await fetchJson(type.url);
  const pkg = await readJsonFile<{ version: string }>(
    join(path, "package.json")
  );
  if (type.patches.removeYamlAnchor) dropYamlAnchor(schema);
  await writeFiles(path, {
    "index.cjs": "module.exports = {};\n",
    "index.mjs": "export {};\n",
    "schema.json": schema,
    "index.d.ts": await compile(
      {
        ...schema,
        title: capitalize(camelize(type.name)),
      },
      "schema.json"
    ),
    "package.json": {
      name: `@json-types/${type.name}`,
      version: pkg?.version ?? "0.0.1",
      description: `TypeScript type for ${type.name}`,
      tags: [
        "typescript",
        "json-schema",
        "schema",
        "typing",
        "type",
        type.name,
        ...type.tags,
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

async function dropYamlAnchor(schema: any) {
  traverse(schema, {
    cb(s) {
      if (s.patternProperties) {
        if ("^x-" in s.patternProperties) delete s.patternProperties["^x-"];
        if (!Object.keys(s.patternProperties).length)
          delete s.patternProperties;
      }
    },
  });
}

function quote(pattern: string) {
  return pattern.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}

async function renderTpl(path: string, params: Record<string, string>) {
  let content = (await readFile(path)).toString();
  for (const name in params)
    content = content.replace(new RegExp(quote(name), "g"), params[name]);
  return content;
}

async function readJsonFile<T>(path: string): Promise<T | undefined> {
  try {
    const content = (await readFile(path)).toString();
    return JSON.parse(content);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return;
    throw error;
  }
}

async function fetchJson(url: string) {
  return await (await fetch(url)).json();
}

function camelize(input: string) {
  return input
    .toLowerCase()
    .replace(/([-_][a-z])/g, (s) =>
      s.toUpperCase().replace("-", "").replace("_", "")
    );
}

function capitalize(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

async function writeFiles(path: string, files: Record<string, unknown>) {
  for (const file in files) {
    const content = files[file];
    await writeFile(
      join(path, file),
      typeof content === "string"
        ? content
        : `${JSON.stringify(content, null, 2)}\n`
    );
  }
}
