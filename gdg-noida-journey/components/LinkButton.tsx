import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  arrow?: string;
  variant?: "outline" | "solid";
  external?: boolean;
};

export default function LinkButton({
  href,
  children,
  arrow = "→",
  variant = "outline",
  external = false,
}: Props) {
  const base =
    "inline-flex min-h-11 items-center gap-2 rounded-full px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] transition-colors";
  const styles =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-white"
      : "border border-line-strong text-white hover:border-white hover:bg-white hover:text-bg";

  return (
    <a
      href={href}
      className={`${base} ${styles}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span aria-hidden="true">{arrow}</span>
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
