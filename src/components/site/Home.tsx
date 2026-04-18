import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/content/site";

export function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] scroll-mt-24 items-center overflow-hidden pt-24"
    >
      {/* decorative frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 border-[3px] border-on-surface/30 md:inset-10 dark:border-primary/30"
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-5 py-12 md:grid-cols-12 md:px-8">
        <div className="md:col-span-8">
          <p className="mb-6 inline-flex items-center gap-3 border-[3px] border-on-surface bg-primary-container px-3 py-1.5 font-display text-[10px] uppercase tracking-[0.22em] text-on-primary-container shadow-[4px_4px_0_0_var(--on-surface)] dark:border-primary dark:bg-surface-container-high dark:text-secondary dark:shadow-[4px_4px_0_0_var(--primary)]">
            <span className="inline-block h-2 w-2 animate-pulse bg-on-surface dark:bg-secondary" />
            Now playing · {site.role}
          </p>

          <h1 className="font-display text-3xl leading-[1.15] text-on-surface md:text-[56px] md:leading-[1.1] dark:text-primary dark:[text-shadow:0_0_18px_rgb(223_142_255_/_0.55)]">
            {site.name}.
          </h1>

          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-on-surface-variant md:text-lg">
            {site.tagline}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-3 border-[3px] border-on-surface bg-primary-container px-6 py-3 font-display text-[11px] uppercase tracking-[0.2em] text-on-primary-container shadow-[5px_5px_0_0_var(--on-surface)] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-primary dark:bg-primary dark:text-on-primary dark:shadow-[5px_5px_0_0_var(--accent)]"
            >
              View experience
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={3} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border-[3px] border-on-surface bg-surface px-6 py-3 font-display text-[11px] uppercase tracking-[0.2em] text-on-surface shadow-[5px_5px_0_0_var(--on-surface)] transition-transform active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-secondary dark:bg-surface-container dark:text-secondary dark:shadow-[5px_5px_0_0_var(--secondary)]"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-10 inline-flex items-center gap-2 font-display text-[10px] uppercase tracking-[0.22em] text-on-surface-variant">
            <MapPin className="h-3.5 w-3.5" strokeWidth={2.5} />
            {site.location}
          </div>
        </div>

        {/* status card */}
        <aside className="md:col-span-4">
          <div className="relative border-[3px] border-on-surface bg-surface-container p-5 shadow-[6px_6px_0_0_var(--on-surface)] dark:border-primary dark:bg-surface-container-high dark:shadow-[6px_6px_0_0_var(--primary-container)]">
            <div className="mb-4 flex items-center justify-between border-b-[3px] border-on-surface pb-3 font-display text-[9px] uppercase tracking-[0.2em] dark:border-primary/60 dark:text-secondary">
              <span>Status</span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse bg-primary dark:bg-secondary" />
                Online
              </span>
            </div>

            <dl className="space-y-3 font-display text-[10px] uppercase tracking-[0.18em] text-on-surface dark:text-on-surface">
              <StatRow label="Role" value={site.role} />
              <StatRow label="Focus" value="Product × Platform" />
              <StatRow label="Looking" value="Good problems" />
            </dl>

            <div className="mt-5 border-t-[3px] border-on-surface pt-3 dark:border-primary/60">
              <p className="font-body text-xs leading-relaxed text-on-surface-variant">
                Open to interesting conversations, new collaborations, and rare cases where someone needs a very specific thing built.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function StatRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4">
      <dt className="text-on-surface-variant">{label}</dt>
      <dd className="text-right text-on-surface dark:text-primary">{value}</dd>
    </div>
  );
}
