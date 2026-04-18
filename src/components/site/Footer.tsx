import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t-[6px] border-on-surface bg-surface-container-high dark:border-primary/70 dark:bg-surface-container-low">
      <div className="mx-auto flex max-w-6xl items-center justify-start px-5 py-8 font-display text-[10px] uppercase tracking-[0.22em] text-on-surface-variant md:px-8 dark:text-secondary/80">
        <span>
          © {year} {site.name}
        </span>
      </div>
    </footer>
  );
}
