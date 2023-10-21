import { gen } from "./actions/gen";

const [action] = process.argv.slice(2);

if (action === "gen") {
  await gen();
} else {
  console.info(`Invalid action: ${action}`);
  process.exit(1);
}
