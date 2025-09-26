import { fetchValRoute } from "@/val/val.rsc";
import pageVal from "./page.val";
import { notFound } from "next/navigation";
import { Section } from "@/components/sections/Section";
import { ValRichText } from "@valbuild/next";

export default async function Home({ params }: { params: Promise<unknown> }) {
  const pageContent = await fetchValRoute(pageVal, params);
  if (!pageContent) {
    notFound();
  }
  return (
    <main className="max-w-md mx-auto space-y-6 py-10">
      <section className="space-y-2">
        <h1 className="text-2xl font-bold text-center">{pageContent.title}</h1>
        <ValRichText className="text-center">
          {pageContent.description}
        </ValRichText>
      </section>
      {pageContent.sections.map((section) => (
        <Section key={section.content.title} section={section} />
      ))}
    </main>
  );
}
