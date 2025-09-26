import { s, t } from "../../../val.config";
import { textSection } from "./textSection.val";

export const section = s.object({
  get content() {
    return s.union("type", textSection);
  },
});

export type Section = t.inferSchema<typeof section>;
