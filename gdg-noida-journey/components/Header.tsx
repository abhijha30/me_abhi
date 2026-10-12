const nav = [
  { label: "Work", href: "#work" },
  { label: "Behind the Scenes", href: "#behind-the-scenes" },
  { label: "Journey", href: "#journey" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between gap-6 px-5 sm:px-8">
        <a
          href="#top"
          className="flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em]"
        >
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" />
          GDG NOIDA
        </a>

        <nav aria-label="Sections" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-[0.14em] text-muted transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted">
          2026 Journey
        </p>
      </div>
    </header>
  );
}
