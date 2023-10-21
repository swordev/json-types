import { spawnSync } from "child_process";

export function exec(command: string, args: string[]) {
  const r = spawnSync(command, args);
  if (r.error) throw r.error;
  if (r.status) throw new Error(`Exit code: ${r.status}`);
  return r.output.toString().trim();
}
