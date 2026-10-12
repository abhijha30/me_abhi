import { characterDesigns, type Project } from "@/lib/content";
import LinkButton from "./LinkButton";
import Reveal from "./Reveal";

function MusicIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

// A static preview card (not a fake player). The whole card opens the link.
function PreviewLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex={-1}
      aria-hidden="true"
      className="group/media block h-full"
    >
      {children}
    </a>
  );
}

function previewBox(featured?: boolean) {
  return `flex h-full ${
    featured ? "min-h-72" : "min-h-56"
  } flex-col justify-between rounded-2xl border border-line bg-bg p-5 transition-colors group-hover/media:border-accent/70`;
}

function Gallery() {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-3">
      {characterDesigns.map((item, i) => (
        <li
          key={i}
          className="aspect-[3/4] overflow-hidden rounded-2xl border border-line bg-bg"
        >
          {item.src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-contain"
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-1 border border-dashed border-line-strong p-4 text-center">
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                Character {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-muted">Image coming soon</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const featured = project.featured;

  return (
    <Reveal>
      <article
        id={project.id}
        className="grid scroll-mt-24 gap-5 md:grid-cols-[8rem_1fr] md:gap-10"
      >
        {/* Number + month */}
        <div className="flex items-baseline gap-4 md:block">
          <p
            className={`text-5xl font-semibold leading-none tracking-tight md:text-6xl ${
              featured ? "text-accent" : "text-white/30"
            }`}
          >
            {project.number}
          </p>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted md:mt-3">
            {project.month}
          </p>
        </div>

        {/* Card */}
        <div
          className={`rounded-3xl border bg-card transition-colors hover:border-line-strong ${
            featured
              ? "border-accent/40 p-6 sm:p-10"
              : "border-line p-6 sm:p-8"
          }`}
        >
          {project.type === "gallery" ? (
            <>
              <h3 className="text-2xl font-semibold uppercase leading-tight tracking-tight sm:text-3xl">
                {project.title}
              </h3>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                {project.description}
              </p>
              <Gallery />
              <p className="mt-6 text-sm italic text-muted">{project.caption}</p>
            </>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 md:items-stretch">
              <div className="flex flex-col">
                <h3
                  className={`font-semibold uppercase leading-tight tracking-tight ${
                    featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl"
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-muted">
                  {project.description}
                </p>
                <div className="mt-8 md:mt-auto md:pt-8">
                  <LinkButton
                    href={project.href}
                    external
                    variant={featured ? "solid" : "outline"}
                  >
                    {project.cta}
                  </LinkButton>
                </div>
              </div>

              <PreviewLink href={project.href}>
                {project.type === "reel" ? (
                  <div className={previewBox(featured)}>
                    <span className="text-[11px] uppercase tracking-[0.18em] text-muted">
                      Instagram Reel
                    </span>
                    <div>
                      <p
                        className={`font-semibold uppercase leading-tight tracking-tight ${
                          featured ? "text-3xl" : "text-2xl"
                        }`}
                      >
                        {project.previewTitle}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                        {project.previewMeta}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.14em] text-accent">
                      Watch on Instagram →
                    </span>
                  </div>
                ) : (
                  <div className={previewBox()}>
                    <span className="text-accent">
                      <MusicIcon />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-muted">
                        GDG Noida
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted">
                        DevFest 2026
                      </p>
                      <p className="mt-3 text-2xl font-semibold uppercase tracking-tight">
                        Theme Song
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.14em] text-accent">
                      Open on Google Drive →
                    </span>
                  </div>
                )}
              </PreviewLink>
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
