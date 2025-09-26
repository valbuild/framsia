import { modules } from "@valbuild/next";
import { config } from "./val.config";

export default modules(config, [
  // Add your modules here
  { def: () => import("./src/app/blogs/[slug]/page.val") },
  { def: () => import("./content/basics.val") },
]);
