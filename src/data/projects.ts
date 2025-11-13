export type ProjectCategory = "Full Stack" | "Machine Learning";

export type ProjectStatus = "deployed" | "in-progress" | "upcoming";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  tech: string[];
  highlights: string[];
  liveUrl?: string;
  repoUrl?: string;
  thumbnail?: string;
  featured?: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "atlas-launchpad",
    title: "Atlas Launchpad",
    tagline: "Deploy anything in minutes with a curated DevOps control center.",
    description:
      "A full stack platform that streamlines CI/CD for product teams. Atlas Launchpad provisions cloud resources, runs quality gates, and ships updates across multi-cloud environments with guardrails and visibility baked in.",
    category: "Full Stack",
    status: "deployed",
    tech: ["Next.js", "tRPC", "PostgreSQL", "Prisma", "AWS CDK", "Tailwind"],
    highlights: [
      "Provisioning orchestration with environment parity checks",
      "Real-time deployment health dashboards with WebSockets",
      "Role-based access controls and fine-grained audit logging",
    ],
    liveUrl: "https://launchpad.example.com",
    repoUrl: "https://github.com/vishnu/atlas-launchpad",
    featured: true,
    year: "2025",
  },
  {
    slug: "insight-forge",
    title: "Insight Forge",
    tagline: "Adaptive product analytics for SaaS teams without a data scientist.",
    description:
      "Insight Forge unifies product telemetry with customer metadata to surface the right insights before churn happens. The system automates cohort segmentation and provides notebook exports and Slack digests for PMs.",
    category: "Full Stack",
    status: "in-progress",
    tech: ["Remix", "NestJS", "ClickHouse", "Temporal", "Tailwind"],
    highlights: [
      "Streaming ingestion pipeline with idempotent event processing",
      "Segment recommendation engine powered by customer feedback embeddings",
      "Notebook exports and Slack insights via scheduled jobs",
    ],
    repoUrl: "https://github.com/vishnu/insight-forge",
    featured: true,
    year: "2025",
  },
  {
    slug: "synapse-notebook",
    title: "Synapse Notebook",
    tagline: "An offline-first research notebook for ML teams.",
    description:
      "Synapse Notebook makes reproducible ML experiments simple with deterministic environments, dataset lineage, and portable experiment bundles. Designed for teams that need notebooks that work on airplanes and air-gapped networks.",
    category: "Machine Learning",
    status: "deployed",
    tech: ["Electron", "React", "Rust", "SQLite", "PyTorch", "OpenAPI"],
    highlights: [
      "Deterministic experiment snapshots with dependency graph diffing",
      "Dataset lineage explorer with timeline comparisons",
      "One-click export to Jupyter and VS Code remote IaaS clusters",
    ],
    liveUrl: "https://synapse-notebook.example.com",
    repoUrl: "https://github.com/vishnu/synapse-notebook",
    featured: true,
    year: "2024",
  },
  {
    slug: "simulab",
    title: "SimuLab",
    tagline: "Digital twin simulations for manufacturing quality teams.",
    description:
      "SimuLab produces lightweight digital twins for factories to model throughput and downtime. Operators can run what-if scenarios and view risk forecasts produced by probabilistic models fine-tuned on historical data.",
    category: "Machine Learning",
    status: "upcoming",
    tech: ["Python", "FastAPI", "scikit-learn", "ArangoDB", "SvelteKit"],
    highlights: [
      "Probabilistic risk scoring with Bayesian inference and Monte Carlo sims",
      "Interactive scenario builder with constraint solver insights",
      "Automated reporting with inline executive summaries",
    ],
    repoUrl: "https://github.com/vishnu/simulab",
    year: "2025",
  },
  {
    slug: "prompt-binder",
    title: "Prompt Binder",
    tagline: "Evaluate and manage production LLM prompts like code.",
    description:
      "Prompt Binder keeps prompts versioned, tested, and observable. It wires prompt packs into CI, runs regression checks across fixtures, and provides guardrails with policy templates for regulated domains.",
    category: "Machine Learning",
    status: "in-progress",
    tech: ["Next.js", "Edge Functions", "TypeScript", "Supabase", "LangChain"],
    highlights: [
      "Prompt regression testing harness with synthetic data generation",
      "Edge analytics for latency and safety policy enforcement",
      "CLI to sync prompt packs across teams and environments",
    ],
    repoUrl: "https://github.com/vishnu/prompt-binder",
    year: "2024",
  },
];

export const projectFilters = [
  { id: "all", label: "All" },
  { id: "full-stack", label: "Full Stack" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "deployed", label: "Deployed" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];

