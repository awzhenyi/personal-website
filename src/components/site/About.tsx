import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="Chapter 01" title="About">
      <div className="space-y-5 font-body text-base leading-relaxed text-on-surface">
        <p className="text-lg text-on-surface md:text-xl">{site.intro}</p>
        {site.about.map((p) => (
          <p key={p} className="text-on-surface-variant">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 border-[3px] border-on-surface bg-surface-container p-5 shadow-[5px_5px_0_0_var(--on-surface)] dark:border-primary/60 dark:bg-surface-container-high dark:shadow-[5px_5px_0_0_var(--primary-container)]">
        <p className="mb-4 font-display text-[10px] uppercase tracking-[0.22em] text-on-surface-variant dark:text-secondary">
          Focus areas
        </p>
        <ul className="flex flex-wrap gap-2">
          {site.focus.map((item) => (
            <li
              key={item}
              className="border-[2px] border-on-surface bg-surface px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.18em] text-on-surface dark:border-primary dark:bg-surface-container dark:text-primary"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
