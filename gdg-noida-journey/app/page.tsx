import Header from "@/components/Header";
import LinkButton from "@/components/LinkButton";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import ShareButtons from "@/components/ShareButtons";
import { SITE, projects, timeline } from "@/lib/content";

const container = "mx-auto w-full max-w-5xl px-5 sm:px-8";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
      {children}
    </p>
  );
}

export default function Page() {
  return (
    <>
      <Header />

      <main id="main">
        {/* HERO */}
        <section id="top" className={`${container} pb-24 pt-20 sm:pb-32 sm:pt-28`}>
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
              {SITE.range}
            </p>
            <h1 className="mt-6 text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              My 2026 Journey
              <br />
              with <span className="text-accent">GDG Noida</span>
            </h1>
            <p className="mt-8 text-xl text-white sm:text-2xl">
              A year of creating, designing and making things happen.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              From the first reel in May to the final DevFest keynote in October
              — a year filled with creative work, event production, designs,
              ideas and a lot of teamwork.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <LinkButton href="#work" arrow="↓" variant="solid">
                Explore my work
              </LinkButton>
              <ShareButtons />
            </div>
          </Reveal>
        </section>

        {/* SECTION 01 — MY WORK */}
        <section id="work" className={`${container} scroll-mt-16 border-t border-line py-20 sm:py-28`}>
          <Reveal>
            <Eyebrow>01</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              A year of work
            </h2>
            <p className="mt-4 text-lg text-muted">
              Different projects. Different moments. One journey.
            </p>
          </Reveal>

          <div className="mt-14 flex flex-col gap-14 sm:gap-20">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* SECTION 02 — BEHIND THE SCENES */}
        <section
          id="behind-the-scenes"
          className={`${container} scroll-mt-16 border-t border-line py-20 sm:py-28`}
        >
          <Reveal>
            <Eyebrow>02</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              Behind the scenes
            </h2>
            <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-white">
              The work behind the work.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              Every final frame had a process behind it — calls, shared
              screens, discussions, ideas and a team working together.
            </p>
          </Reveal>

          <Reveal className="mt-12">
            <figure>
              <div className="overflow-hidden rounded-3xl border border-line bg-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/behind-the-scenes.png"
                  alt="Screenshot of a GDG Noida Discord voice call with a screen being shared"
                  width={1365}
                  height={628}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full"
                />
              </div>
              <figcaption className="mt-4 max-w-2xl text-sm italic text-muted">
                Before the event reached the stage, there were countless
                conversations behind the screen.
              </figcaption>
            </figure>
          </Reveal>
        </section>

        {/* SECTION 03 — THE JOURNEY */}
        <section id="journey" className={`${container} scroll-mt-16 border-t border-line py-20 sm:py-28`}>
          <Reveal>
            <Eyebrow>03</Eyebrow>
            <h2 className="mt-4 text-4xl font-semibold uppercase tracking-tight sm:text-5xl">
              The journey
            </h2>
          </Reveal>

          <Reveal className="mt-12">
            <ol className="ml-1.5 max-w-2xl border-l border-line-strong">
              {timeline.map((item, i) => (
                <li key={i} className="relative pb-10 pl-8 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    className="mt-1 block text-xl font-semibold uppercase leading-snug tracking-tight transition-colors hover:text-accent sm:text-2xl"
                  >
                    {item.title.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </section>

        {/* SECTION 04 — FINAL MESSAGE */}
        <section className={`${container} border-t border-line py-24 text-center sm:py-36`}>
          <Reveal>
            <h2 className="text-4xl font-semibold uppercase leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              The event ends.
              <br />
              <span className="text-accent">The moments stay.</span>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              From the first reel in May to the final keynote in October —
              grateful to have been part of the journey.
            </p>
            <p className="mt-10 text-sm font-semibold uppercase leading-relaxed tracking-[0.2em]">
              GDG Noida
              <br />
              DevFest 2026
            </p>
            <div className="mt-10">
              <ShareButtons center />
            </div>
            <p className="mt-14 text-sm italic text-muted">
              Made with the team. Built through the chaos. Remembered through
              the frames.
            </p>
          </Reveal>
        </section>
      </main>
    </>
  );
}
