import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-28 border-t-[3px] border-on-surface/90 py-20 dark:border-primary/30 md:py-28",
        className,
      )}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 md:grid-cols-12 md:px-8">
        <header className="md:col-span-4">
          {eyebrow ? (
            <p className="mb-4 inline-block bg-on-surface px-2 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-surface dark:bg-primary dark:text-on-primary">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="font-display text-2xl leading-tight text-on-surface dark:text-primary md:text-3xl dark:[text-shadow:0_0_12px_rgb(223_142_255_/_0.5)]">
            {title}
          </h2>
        </header>
        <div className="md:col-span-8">{children}</div>
      </div>
    </section>
  );
}
