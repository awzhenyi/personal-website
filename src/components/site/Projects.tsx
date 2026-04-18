import { ArrowUpRight } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";
import { TechStack } from "./TechStack";

export function Projects() {
  return (
    <Section id="projects" title="Projects">
      <p className="mb-8 max-w-2xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
        A small, long-running set of side projects — built outside of work, mostly in the developer tools and creative software space.
      </p>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {site.projects.map((project) => {
          const Wrapper = project.href ? "a" : "div";
          return (
            <li key={project.name}>
              <Wrapper
                {...(project.href
                  ? { href: project.href, target: "_blank", rel: "noreferrer" }
                  : {})}
                className="group relative flex h-full flex-col border-[3px] border-on-surface bg-surface-container p-6 shadow-[5px_5px_0_0_var(--on-surface)] transition-transform hover:-translate-y-0.5 hover:translate-x-0.5 dark:border-primary/50 dark:bg-surface-container-high dark:shadow-[5px_5px_0_0_var(--primary-container)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-base leading-tight text-on-surface dark:text-primary">
                      {project.name}
                    </h3>
                    <p className="mt-2 font-body text-sm text-on-surface-variant">
                      {project.tagline}
                    </p>
                  </div>
                  {project.href ? (
                    <ArrowUpRight
                      aria-hidden
                      strokeWidth={2.5}
                      className="h-5 w-5 shrink-0 text-on-surface-variant transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-secondary"
                    />
                  ) : null}
                </div>

                <p className="mt-5 flex-1 font-body text-sm leading-relaxed text-on-surface">
                  {project.description}
                </p>

                <div className="mt-6 border-t-[3px] border-on-surface/80 pt-4 dark:border-primary/40">
                  <p className="mb-3 font-display text-[9px] uppercase tracking-[0.22em] text-on-surface-variant dark:text-secondary">
                    Stack
                  </p>
                  <TechStack items={project.stack} size="sm" />
                </div>
              </Wrapper>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
