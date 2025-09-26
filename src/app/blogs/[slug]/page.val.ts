import { section } from "@/components/sections/section.val";
import { s, c, nextAppRouter } from "../../../../val.config";

const pageSchema = s.object({
  title: s.string().maxLength(100),
  description: s.richtext(),
  get sections() {
    return s.array(section).render({
      layout: "list",
      select({ val }) {
        return { title: val.content.title, subtitle: val.content.type };
      },
    });
  },
});

export default c.define(
  "/src/app/blogs/[slug]/page.val.ts",
  s.record(pageSchema).router(nextAppRouter),
  {
    "/blogs/first": {
      title: "Val Build Page",
      description: [
        {
          tag: "p",
          children: [
            "This is a page with content from Val. I wrote this in VS Code, but I can change from the Val Studio too.",
          ],
        },
      ],
      sections: [
        {
          content: {
            type: "text",
            title: "Section 1",
            description: [
              { tag: "p", children: ["This is a text section."] },
              {
                tag: "p",
                children: [
                  "You can use ",
                  { tag: "span", styles: ["bold"], children: ["rich text"] },
                ],
              },
            ],
            linkButton: {
              text: "Read another blog",
              link: {
                url: "/blogs/second",
                type: "blog",
              },
              variant: "primary",
            },
          },
        },
      ],
    },
    "/blogs/second": {
      title: "You get the picture",
      description: [
        {
          tag: "p",
          children: ["You can create multiple pages with different content."],
        },
      ],
      sections: [
        {
          content: {
            type: "text",
            title: "Another blog page",
            description: [],
            linkButton: {
              text: "Read first blog",
              link: {
                url: "/blogs/first",
                type: "blog",
              },
              variant: "secondary",
            },
          },
        },
      ],
    },
  },
);
