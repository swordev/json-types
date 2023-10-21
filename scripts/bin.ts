import { gen } from "./actions/gen";
import { update } from "./actions/update";

const [action] = process.argv.slice(2);

if (action === "gen") {
  await gen();
} else if (action === "update") {
  await update();
} else {
  console.info(`Invalid action: ${action}`);
  process.exit(1);
}
