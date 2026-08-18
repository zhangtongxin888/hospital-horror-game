import { readFile, writeFile } from "node:fs/promises";

const generatedConfigPath = new URL("../dist/server/wrangler.json", import.meta.url);
const config = JSON.parse(await readFile(generatedConfigPath, "utf8"));

// Wrangler 4.124 removed the generated legacy_env field. The Sites build still
// emits it, so normalize only that generated deploy artifact after every build.
delete config.legacy_env;

await writeFile(generatedConfigPath, `${JSON.stringify(config)}\n`);
