import _writeChangeset from "@changesets/write";
import * as git from "@changesets/git";
import { gen } from "./gen";

const writeChangeset = _writeChangeset["default"] as typeof _writeChangeset;

export async function update() {
  const cwd = process.cwd();
  const genResult = await gen();
  const changesetResult = await git.getChangedPackagesSinceRef({
    cwd,
    ref: "main",
  });

  const pkgWithChanges = [
    ...changesetResult.map((c) => c.packageJson.name),
    ...genResult.filter((v) => v.isNew).map((v) => v.name),
  ];

  if (!pkgWithChanges.length) {
    console.info("No changes!");
  } else {
    console.info(`Changes detected: ${pkgWithChanges.join(", ")}`);
    await writeChangeset(
      {
        releases: pkgWithChanges.map((name) => ({
          name,
          type: "minor",
        })),
        summary: "Update schema",
      },
      cwd
    );
    await git.add("packages", cwd);
    await git.add(".changeset", cwd);
    await git.commit("feat: update schema", cwd);
  }
}
