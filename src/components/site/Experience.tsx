import { site } from "@/content/site";
import { Section } from "./Section";
import { TechStack } from "./TechStack";

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-6">
        {site.experience.map((role) => (
          <li
            key={`${role.company}-${role.period}`}
            className="relative border-[3px] border-on-surface bg-surface-container p-6 shadow-[5px_5px_0_0_var(--on-surface)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 md:p-8 dark:border-primary/50 dark:bg-surface-container-high dark:shadow-[5px_5px_0_0_var(--primary-container)]"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-3 border-b-[3px] border-on-surface/80 pb-4 dark:border-primary/40">
              <div>
                <h3 className="font-display text-base leading-tight text-on-surface dark:text-primary">
                  {role.title}
                </h3>
                <p className="mt-2 font-body text-sm text-on-surface-variant">
                  {role.company}
                </p>
              </div>
              <span className="font-display text-[10px] uppercase tracking-[0.2em] text-on-surface-variant dark:text-secondary">
                {role.period}
              </span>
            </div>

            <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-10">
              <div className="md:flex-1">
                <p className="font-body text-base leading-relaxed text-on-surface">
                  {role.summary}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {role.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 font-body text-sm text-on-surface-variant"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 bg-primary-container dark:bg-secondary"
                      />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:w-48 md:shrink-0">
                <p className="mb-3 font-display text-[9px] uppercase tracking-[0.22em] text-on-surface-variant dark:text-secondary">
                  Stack
                </p>
                <TechStack items={role.stack} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
