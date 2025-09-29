import { Schema } from "@valbuild/core";
import { s, t } from "../../val.config";
import pageVal from "../app/blogs/[slug]/page.val";

const blogLinkSchema = s.object({
  type: s.literal("blog"),
  // NB: s.keyOf is recursive here, so we need to use a getter and explicitly type it
  get url(): Schema<string> {
    return s.keyOf(pageVal);
  },
});
const externalLinkSchema = s.object({
  type: s.literal("external"),
  url: s
    .string()
    // NB: raw() to avoid steganography on URLs
    .raw()
    .validate((val) => {
      if (!val.startsWith("http") && !val.startsWith("https")) {
        return "External links must start with http or https";
      }
      return false;
    }),
});

export const linkButton = s.object({
  text: s.string().maxLength(50),
  // NB: union of string literals:
  variant: s.union(s.literal("primary"), s.literal("secondary")),
  // NB: discriminated union:
  get link() {
    return s.union("type", externalLinkSchema, blogLinkSchema);
  },
});

export type LinkButton = t.inferSchema<typeof linkButton>;
