// All copy and links live here so they are easy to change in one place.

export const SITE = {
  title: "GDG Noida — My 2026 Journey",
  description:
    "A year of creating, designing and making things happen with GDG Noida.",
  range: "MAY 2026 → OCTOBER 2026",
};

export const LINKS = {
  apl: "https://www.instagram.com/reel/DY-CdgZzf0q/",
  designSamvaad: "https://www.instagram.com/reel/DcYY4S3iMsD/",
  devfestGlimpse: "https://www.instagram.com/reel/Dd9Kozqi5M-/",
  themeSong:
    "https://drive.google.com/file/d/1OvNovChbabjVJll6dfcWQKEBXvD6NqPU/view?usp=drive_link",
};

export type Project = {
  id: string;
  number: string;
  month: string;
  title: string;
  description: string;
  featured?: boolean;
} & (
  | {
      type: "reel";
      href: string;
      cta: string;
      previewTitle: string;
      previewMeta: string;
    }
  | { type: "gallery"; caption: string }
  | { type: "audio"; href: string; cta: string }
);

export const projects: Project[] = [
  {
    id: "project-01",
    number: "01",
    month: "MAY 2026",
    title: "APL — THE FIRST FRAME",
    description:
      "One of the first creative pieces of the year — the beginning of a journey that eventually led to DevFest.",
    type: "reel",
    href: LINKS.apl,
    cta: "WATCH REEL",
    previewTitle: "APL",
    previewMeta: "MAY 2026",
  },
  {
    id: "project-02",
    number: "02",
    month: "AUGUST 2026",
    title: "DESIGN SAMVAAD",
    description:
      "Another creative chapter in the year — creating and documenting the energy around the community.",
    type: "reel",
    href: LINKS.designSamvaad,
    cta: "WATCH REEL",
    previewTitle: "DESIGN SAMVAAD",
    previewMeta: "AUGUST 2026",
  },
  {
    id: "project-03",
    number: "03",
    month: "DEVFEST 2026",
    title: "DEVFEST GLIMPSE",
    description:
      "The journey got bigger. The energy got bigger. And then came DevFest.",
    featured: true,
    type: "reel",
    href: LINKS.devfestGlimpse,
    cta: "WATCH GLIMPSE",
    previewTitle: "DEVFEST GLIMPSE",
    previewMeta: "DEVFEST 2026",
  },
  {
    id: "project-04",
    number: "04",
    month: "DEVFEST 2026",
    title: "ENDING KEYNOTE — CHARACTER DESIGN",
    description:
      "For the DevFest ending keynote, I worked on character-based visual concepts that became part of the final experience.",
    type: "gallery",
    caption: "Creating characters for the final chapter.",
  },
  {
    id: "project-05",
    number: "05",
    month: "DEVFEST 2026",
    title: "THE DEVFEST THEME SONG",
    description:
      "Not everything was a video. This was the soundtrack created for the DevFest experience.",
    type: "audio",
    href: LINKS.themeSong,
    cta: "LISTEN TO THE THEME SONG",
  },
];

/**
 * CHARACTER DESIGN GALLERY
 * To show your real artwork: drop the image files into /public/characters
 * and set `src` for each slot, e.g.  src: "/characters/character-1.png".
 * Add or remove slots freely — the grid adapts.
 */
export const characterDesigns: { src?: string; alt: string }[] = [
  { alt: "Character design 1 for the DevFest ending keynote" },
  { alt: "Character design 2 for the DevFest ending keynote" },
  { alt: "Character design 3 for the DevFest ending keynote" },
];

export const timeline = [
  { label: "MAY", title: ["APL"], href: "#project-01" },
  { label: "AUGUST", title: ["DESIGN SAMVAAD"], href: "#project-02" },
  { label: "DEVFEST SEASON", title: ["DEVFEST GLIMPSE"], href: "#project-03" },
  {
    label: "DEVFEST 2026",
    title: ["ENDING KEYNOTE", "CHARACTER DESIGN"],
    href: "#project-04",
  },
  { label: "DEVFEST 2026", title: ["THEME SONG"], href: "#project-05" },
];
