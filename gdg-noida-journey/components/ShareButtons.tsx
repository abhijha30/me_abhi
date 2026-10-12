"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/content";

const buttonClass =
  "inline-flex min-h-11 items-center rounded-full border border-line-strong px-5 py-3 text-xs font-medium uppercase tracking-[0.14em] text-white transition-colors hover:border-white hover:bg-white hover:text-bg";

function pageUrl() {
  return `${window.location.origin}${window.location.pathname}`;
}

export default function ShareButtons({ center = false }: { center?: boolean }) {
  const [copied, setCopied] = useState(false);
  const [canShare, setCanShare] = useState(false);

  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && typeof navigator.share === "function");
  }, []);

  async function copyLink() {
    const url = pageUrl();
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Fallback for older browsers / non-secure contexts
      const input = document.createElement("textarea");
      input.value = url;
      input.setAttribute("readonly", "");
      input.style.position = "fixed";
      input.style.opacity = "0";
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  async function share() {
    try {
      await navigator.share({
        title: SITE.title,
        text: SITE.description,
        url: pageUrl(),
      });
    } catch {
      // User closed the share sheet — nothing to do.
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-3 ${center ? "justify-center" : ""}`}>
      <button type="button" onClick={copyLink} className={buttonClass}>
        {copied ? "Link copied ✓" : "Copy link"}
      </button>
      {canShare && (
        <button type="button" onClick={share} className={buttonClass}>
          Share
        </button>
      )}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Link copied to clipboard" : ""}
      </span>
    </div>
  );
}
