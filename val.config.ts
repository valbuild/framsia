import { initVal } from "@valbuild/next";

const { s, c, val, config, nextAppRouter } = initVal({
  defaultTheme: "dark",
  project: "freekh/framsia",
});

export type { t } from "@valbuild/next";
export { s, c, val, config, nextAppRouter };
