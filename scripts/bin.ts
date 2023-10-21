import { gen } from "./actions/gen";
import { update } from "./actions/update";
import { genCatalogType } from "./actions/gen-catalog-type";

const [action] = process.argv.slice(2);

if (action === "gen") {
  await gen();
} else if (action === "update") {
  await update();
} else if (action === "gen-catalog-type") {
  await genCatalogType();
} else {
  console.info(`Invalid action: ${action}`);
  process.exit(1);
}
