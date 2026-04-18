import { ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/content/site";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Chapter 03" title="Contact">
      <div className="space-y-8">
        <p className="font-body text-lg leading-relaxed text-on-surface md:text-xl">
          The fastest way to reach me is email. I read everything and try to reply within a few days.
        </p>

        <a
          href={`mailto:${site.contact.email}`}
          className="group inline-flex w-full items-center justify-between gap-4 border-[3px] border-on-surface bg-primary-container px-5 py-4 font-display text-[12px] uppercase tracking-[0.2em] text-on-primary-container shadow-[5px_5px_0_0_var(--on-surface)] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none md:w-auto md:min-w-[420px] dark:border-primary dark:bg-primary dark:text-on-primary dark:shadow-[5px_5px_0_0_var(--accent)]"
        >
          <span className="inline-flex items-center gap-3">
            <Mail className="h-4 w-4" strokeWidth={2.5} />
            {site.contact.email}
          </span>
          <ArrowUpRight
            className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={2.5}
          />
        </a>

        <div>
          <p className="mb-3 font-display text-[10px] uppercase tracking-[0.22em] text-on-surface-variant dark:text-secondary">
            Elsewhere
          </p>
          <ul className="divide-y-[3px] divide-on-surface/80 border-[3px] border-on-surface bg-surface-container dark:divide-primary/30 dark:border-primary/60 dark:bg-surface-container-high">
            {site.contact.links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between gap-4 px-5 py-4 font-display text-[11px] uppercase tracking-[0.2em] text-on-surface transition-colors hover:bg-surface-container-high dark:text-primary dark:hover:bg-surface-bright"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-on-surface-variant transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-secondary"
                    strokeWidth={2.5}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
