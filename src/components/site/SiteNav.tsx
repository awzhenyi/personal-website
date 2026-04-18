import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { site } from "@/content/site";

const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => b.intersectionRatio - a.intersectionRatio,
          )[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0.01, 0.25, 0.5] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b-[3px] border-on-surface bg-surface/95 backdrop-blur-sm dark:border-primary/60 dark:bg-surface/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:px-8">
        <a
          href="#home"
          className="font-display text-[13px] uppercase tracking-widest text-on-surface dark:text-secondary dark:[text-shadow:0_0_8px_rgb(0_251_251_/_0.6)]"
        >
          {initials(site.name)}
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              aria-current={active === link.id ? "page" : undefined}
              className={cn(
                "font-display text-[10px] uppercase tracking-[0.2em] transition-colors",
                active === link.id
                  ? "text-on-surface dark:text-primary dark:[text-shadow:0_0_10px_rgb(223_142_255_/_0.7)]"
                  : "text-on-surface/55 hover:text-on-surface dark:text-on-surface/60 dark:hover:text-primary",
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </div>

      {/* underline indicator on mobile, just a hairline of accent */}
      <div className="h-[3px] bg-primary-container dark:bg-primary/70 md:hidden" />
      {/* mobile link row */}
      <div className="flex items-center justify-between gap-1 px-4 pb-3 pt-2 md:hidden">
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            aria-current={active === link.id ? "page" : undefined}
            className={cn(
              "font-display text-[8.5px] uppercase tracking-[0.12em] transition-colors sm:text-[9px] sm:tracking-[0.16em]",
              active === link.id
                ? "text-on-surface dark:text-primary"
                : "text-on-surface/55 dark:text-on-surface/60",
            )}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((p) => p[0])
    .filter(Boolean)
    .join("")
    .slice(0, 3)
    .toUpperCase();
}
