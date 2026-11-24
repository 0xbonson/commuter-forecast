import fs from "node:fs";
import path from "node:path";

// Entry text for make.fun bounty: Charm the Commuter: Forecast a City That Isn't (132 characters)
const WEATHER_FORECAST_ENTRY =
  "Port Clementine: Overcast with a warm citrus drizzle, clearing by two as fruit barges dock; bring an umbrella you don't mind losing.";

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDirectory, { recursive: true });
fs.writeFileSync(path.join(outputDirectory, "entry.txt"), WEATHER_FORECAST_ENTRY + "\n", "utf8");
