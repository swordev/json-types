import { defineConfig } from "npm-check-updates";

export default defineConfig({
  root: true,
  workspaces: true,
  target: (pkg) => {
    if (pkg === "@types/node") return "semver";
    return "latest";
  },
});
