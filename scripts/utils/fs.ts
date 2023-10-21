import { readFile, writeFile } from "fs/promises";
import { join } from "path";
import { quote } from "./string";

export async function writeFiles(path: string, files: Record<string, unknown>) {
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

export async function renderTpl(path: string, params: Record<string, string>) {
  let content = (await readFile(path)).toString();
  for (const name in params)
    content = content.replace(new RegExp(quote(name), "g"), params[name]);
  return content;
}

export async function readFileIfExists(
  path: string
): Promise<string | undefined> {
  try {
    return (await readFile(path)).toString();
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return;
    throw error;
  }
}

export async function readJsonFile<T>(path: string): Promise<T | undefined> {
  const json = await readFileIfExists(path);
  return typeof json === "string" ? JSON.parse(json) : undefined;
}
