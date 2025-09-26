import { c, s } from "../val.config";

const schema = s.object({
  title: s.string(),
  tags: s.array(s.string()),
  image: s.image().nullable(),
  richtext: s.richtext({ style: { bold: true } }).nullable(),
});

export default c.define("/content/basics.val.ts", schema, {
  title: "Basics Example",
  tags: [],
  image: null,
  richtext: null,
});
