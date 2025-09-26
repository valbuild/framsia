import { TextSection } from "./TextSection";
import type { Section } from "./section.val";

export function Section({ section }: { section: Section }) {
  if (section.content.type === "text") {
    return <TextSection {...section.content} />;
  } else {
    const exhaustiveCheck: never = section.content.type;
    console.error("Unhandled section type: ", exhaustiveCheck);
    return null;
  }
}
