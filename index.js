import { globby } from "globby";

await globby(".", {
  gitignore: true,
  ignore: ["**/node_modules/**"],
  suppressErrors: true,
});
