export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Stack",
    items: ["TypeScript", "Next.js", "React", "Node.js", "GraphQL", "tRPC"],
  },
  {
    title: "Data & ML",
    items: ["PyTorch", "scikit-learn", "LangChain", "Weights & Biases", "Airflow"],
  },
  {
    title: "Cloud & Infra",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "Temporal"],
  },
  {
    title: "Tooling",
    items: ["Prisma", "PostgreSQL", "ClickHouse", "Supabase", "Tailwind CSS"],
  },
];

