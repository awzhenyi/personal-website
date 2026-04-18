import type { ComponentType, SVGProps } from "react";
import {
  SiBun,
  SiDocker,
  SiFigma,
  SiGit,
  SiGo,
  SiGrafana,
  SiKubernetes,
  SiMarkdown,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiRust,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

type Entry = { label: string; Icon: IconComponent };

const REGISTRY: Record<string, Entry> = {
  typescript: { label: "TypeScript", Icon: SiTypescript },
  react: { label: "React", Icon: SiReact },
  nextjs: { label: "Next.js", Icon: SiNextdotjs },
  go: { label: "Go", Icon: SiGo },
  postgres: { label: "PostgreSQL", Icon: SiPostgresql },
  bun: { label: "Bun", Icon: SiBun },
  tailwindcss: { label: "Tailwind CSS", Icon: SiTailwindcss },
  nodedotjs: { label: "Node.js", Icon: SiNodedotjs },
  kubernetes: { label: "Kubernetes", Icon: SiKubernetes },
  grafana: { label: "Grafana", Icon: SiGrafana },
  python: { label: "Python", Icon: SiPython },
  figma: { label: "Figma", Icon: SiFigma },
  docker: { label: "Docker", Icon: SiDocker },
  rust: { label: "Rust", Icon: SiRust },
  sqlite: { label: "SQLite", Icon: SiSqlite },
  git: { label: "Git", Icon: SiGit },
  markdown: { label: "Markdown", Icon: SiMarkdown },
};

export type TechStackProps = {
  items: readonly string[];
  className?: string;
  size?: "sm" | "md";
};

export function TechStack({ items, className, size = "md" }: TechStackProps) {
  const chipSize = size === "sm" ? "h-7 w-7" : "h-8 w-8";
  const iconSize = size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <ul
      className={cn("flex flex-wrap gap-2", className)}
      aria-label="Tech stack"
    >
      {items.map((key) => {
        const entry = REGISTRY[key];
        if (!entry) {
          if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
            console.warn(`[TechStack] unknown icon key: ${key}`);
          }
          return null;
        }
        const { label, Icon } = entry;
        return (
          <li key={key} className="relative">
            <span
              tabIndex={0}
              role="img"
              aria-label={label}
              className={cn(
                "peer inline-flex items-center justify-center border-[2px] border-on-surface bg-surface text-on-surface outline-none transition-colors",
                "hover:bg-primary-container hover:text-on-primary-container",
                "focus-visible:bg-primary-container focus-visible:text-on-primary-container",
                "dark:border-primary/60 dark:bg-surface-container dark:text-primary",
                "dark:hover:bg-surface-bright dark:hover:text-secondary",
                "dark:focus-visible:bg-surface-bright dark:focus-visible:text-secondary",
                chipSize,
              )}
            >
              <Icon className={iconSize} aria-hidden="true" focusable="false" />
            </span>
            <span
              role="tooltip"
              aria-hidden="true"
              className={cn(
                "pointer-events-none absolute left-1/2 top-full z-30 mt-2 -translate-x-1/2 whitespace-nowrap border-[2px] border-on-surface bg-surface px-2 py-1 font-display text-[9px] uppercase tracking-[0.18em] text-on-surface opacity-0 shadow-[3px_3px_0_0_var(--on-surface)] transition-opacity duration-75",
                "peer-hover:opacity-100 peer-focus-visible:opacity-100",
                "dark:border-primary/80 dark:bg-surface-container-high dark:text-primary dark:shadow-[3px_3px_0_0_var(--primary-container)]",
              )}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
