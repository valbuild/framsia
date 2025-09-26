import Link from "next/link";
import { type LinkButton } from "./linkButton.val";

type LinkButtonProps = LinkButton & {
  className?: string;
};
export function LinkButton({
  text,
  link,
  variant,
  className,
}: LinkButtonProps) {
  const variantClassName =
    variant === "primary"
      ? "text-white bg-blue-600 hover:bg-blue-700"
      : "text-white bg-gray-600 hover:bg-gray-700";
  return (
    <Link
      href={link.url || "/"}
      className={`px-6 py-3 rounded-md transition ${variantClassName}${className ? ` ${className}` : ""}`}
    >
      {text}
    </Link>
  );
}
