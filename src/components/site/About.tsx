import { site } from "@/content/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="space-y-5 font-body text-base leading-relaxed text-on-surface">
        <p className="text-lg text-on-surface md:text-xl">{site.intro}</p>
        {site.about.map((p) => (
          <p key={p} className="text-on-surface-variant">
            {p}
          </p>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="border-[3px] border-on-surface bg-surface-container p-5 shadow-[5px_5px_0_0_var(--on-surface)] dark:border-primary/60 dark:bg-surface-container-high dark:shadow-[5px_5px_0_0_var(--primary-container)]">
          <p className="mb-4 font-display text-[10px] uppercase tracking-[0.22em] text-on-surface-variant dark:text-secondary">
            Education
          </p>
          <ul className="space-y-5">
            {site.education.map((entry) => (
              <li key={`${entry.school}-${entry.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-display text-[11px] uppercase tracking-[0.16em] text-on-surface dark:text-primary">
                    {entry.school}
                  </p>
                  <span className="font-display text-[9px] uppercase tracking-[0.2em] text-on-surface-variant dark:text-secondary">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-2 font-body text-sm text-on-surface">
                  {entry.degree}
                </p>
                {entry.detail ? (
                  <p className="mt-1 font-body text-sm text-on-surface-variant">
                    {entry.detail}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>

        <div className="border-[3px] border-on-surface bg-surface-container p-5 shadow-[5px_5px_0_0_var(--on-surface)] dark:border-primary/60 dark:bg-surface-container-high dark:shadow-[5px_5px_0_0_var(--primary-container)]">
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
      </div>
    </Section>
  );
}
