"use client";
import { useVal } from "@/val/val.client";
import basicsVal from "../../content/basics.val";
import { ValImage, ValRichText } from "@valbuild/next";

export default function BasicsPage() {
  const content = useVal(basicsVal);
  return (
    <main className="space-y-4 py-10 max-w-md mx-auto">
      <section className="space-y-2">
        <h1 className="text-4xl font-bold text-center">{content.title}</h1>
        <Tags tags={content.tags} />
      </section>
      {content.image && (
        <section>
          <ValImage src={content.image} />
        </section>
      )}
      {content.richtext && (
        <section>
          <ValRichText
            theme={{
              bold: "font-bold",
            }}
          >
            {content.richtext}
          </ValRichText>
        </section>
      )}
    </main>
  );
}

function Tags({ tags }: { tags: string[] }) {
  if (tags.length === 0) {
    return null;
  }
  return (
    <div className="flex gap-2 justify-center">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
