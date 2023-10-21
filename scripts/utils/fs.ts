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

export async function readJsonFile<T>(path: string): Promise<T | undefined> {
  try {
    const content = (await readFile(path)).toString();
    return JSON.parse(content);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return;
    throw error;
  }
}
