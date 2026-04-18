export const site = {
  name: "Zac Yang",
  role: "Software Engineer",
  location: "San Francisco, CA",
  tagline: "Building thoughtful, high-craft interfaces and the systems behind them.",
  intro:
    "I design and build software products end to end — from the data models underneath to the pixels on screen. I care about clarity, performance, and the quiet details that make a product feel good to use.",
  about: [
    "Most of my work sits at the seam between product and infrastructure. I like problems where the hard part is deciding what to build, not just how to build it — and I like teams that take craft seriously without losing momentum.",
    "Outside of work I keep a small set of long-running side projects, mostly in the space of developer tools and creative software. I read a lot of old books about systems design and a lot of new ones about product.",
  ],
  focus: [
    "Web platforms",
    "Developer tools",
    "Design systems",
    "Performance",
    "TypeScript & React",
    "Go & Postgres",
  ],
  experience: [
    {
      company: "Acme Systems",
      title: "Senior Software Engineer",
      period: "2023 — Present",
      summary:
        "Lead engineer on the core product surface. Drove a rewrite of the primary editor, cutting interaction latency in half and unblocking the team's next generation of features.",
      highlights: [
        "Shipped a real-time collaboration layer used by every customer in production.",
        "Owned the frontend architecture and mentored four engineers through major features.",
        "Cut cold-load time from 3.8s to 1.2s on the dashboard.",
      ],
    },
    {
      company: "Northwind Labs",
      title: "Software Engineer",
      period: "2021 — 2023",
      summary:
        "Built internal platforms used by product and data teams. Focused on tooling, observability, and the rough edges between services.",
      highlights: [
        "Designed the auth service still in use today.",
        "Shipped a metrics pipeline that reduced ingest cost by 40%.",
      ],
    },
    {
      company: "Indie / Freelance",
      title: "Product Engineer",
      period: "2019 — 2021",
      summary:
        "Worked with a handful of early-stage teams on zero-to-one product work — design, frontend, and whatever else needed to ship.",
      highlights: [
        "Designed and built three early-stage products end to end.",
        "One made it to Series A; the other two taught me more.",
      ],
    },
  ],
  contact: {
    email: "hello@example.com",
    links: [
      { label: "GitHub", href: "https://github.com" },
      { label: "LinkedIn", href: "https://linkedin.com" },
      { label: "X / Twitter", href: "https://x.com" },
    ],
  },
} as const;

export type Experience = (typeof site.experience)[number];
