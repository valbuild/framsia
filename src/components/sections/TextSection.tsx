import { ValRichText } from "@valbuild/next";
import type { TextSection } from "./textSection.val";
import { LinkButton } from "../LinkButton";

export function TextSection({ title, description, linkButton }: TextSection) {
  return (
    <section className="grid gap-3">
      <h2 className="text-xl font-semibold text-center">{title}</h2>
      <ValRichText
        className="max-w-screen-md mx-auto text-center"
        theme={{
          bold: "font-bold",
        }}
      >
        {description}
      </ValRichText>
      <LinkButton {...linkButton} className="mx-auto block" />
    </section>
  );
}
