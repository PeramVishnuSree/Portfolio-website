export const profile = {
  name: "Vishnu N",
  role: "Full Stack & Machine Learning Engineer",
  summary:
    "I build opinionated developer platforms, production-ready ML pipelines, and frictionless product experiences. I love turning ambiguous problem statements into measurable products.",
  location: "Remote · Open to onsite collaborations",
  contact: {
    email: "hello@example.com",
    calendly: "https://calendly.com/yourname/30min",
    github: "https://github.com/yourname",
    linkedin: "https://www.linkedin.com/in/yourname/",
  },
  resumeUrl: "https://example.com/resume.pdf",
};

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages & Frameworks",
    items: ["TypeScript", "Python", "Go", "Next.js", "React", "Node.js"],
  },
  {
    title: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "LangChain", "Sklearn", "Weights & Biases"],
  },
  {
    title: "Platforms & Infra",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform"],
  },
  {
    title: "Data & Observability",
    items: ["PostgreSQL", "BigQuery", "ClickHouse", "dbt", "Grafana", "OpenTelemetry"],
  },
];

export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    period: "2024 — Present",
    title: "Senior Platform Engineer · Atlas Labs",
    organization: "Atlas Labs",
    description:
      "Shipping the research platform, leading ML enablement initiatives, and mentoring a guild of machine learning engineers.",
  },
  {
    period: "2022 — 2024",
    title: "Founding Engineer · Horizon",
    organization: "Horizon",
    description:
      "Built cloud cost management tooling, analytic pipelines, and an insights API adopted across 12 enterprise teams.",
  },
  {
    period: "2019 — 2022",
    title: "Software Engineer · Aurora Analytics",
    organization: "Aurora Analytics",
    description:
      "Shipped multitenant SaaS features, modernized the data stack, and introduced ML-powered insights for B2B customers.",
  },
];

