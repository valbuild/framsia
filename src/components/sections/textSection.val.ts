import { s, t } from "../../../val.config";
import { linkButton } from "../linkButton.val";

export const textSection = s.object({
  type: s.literal("text"),
  title: s.string(),
  description: s.richtext({ style: { bold: true } }),
  get linkButton() {
    return linkButton;
  },
});
export type TextSection = t.inferSchema<typeof textSection>;
