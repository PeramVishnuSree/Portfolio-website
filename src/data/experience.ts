export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  wins: string[];
};

export const experiences: ExperienceItem[] = [
  {
    company: "Helix Systems",
    role: "Lead Product Engineer",
    period: "2023 — Present",
    summary:
      "Leading the product engineering pod building Atlas Launchpad, a DevOps automation platform for high-growth SaaS teams.",
    wins: [
      "Cut release lead time by 68% by introducing a modular deployment pipeline",
      "Co-created customer adoption playbooks that unlocked 3 enterprise pilots",
      "Mentored engineers across platform, ML, and design systems tracks",
    ],
  },
  {
    company: "Nexum Labs",
    role: "Senior ML Engineer",
    period: "2021 — 2023",
    summary:
      "Owned evaluation and tooling for ML products powering risk and compliance for fintech clients.",
    wins: [
      "Productionized a human-in-the-loop review workflow with 99.2% precision",
      "Designed offline/online evaluation harnesses that reduced incidents by 40%",
      "Scaled feature store + experimentation stack across 5 product teams",
    ],
  },
  {
    company: "Freelance",
    role: "Consultant",
    period: "2019 — 2021",
    summary:
      "Partnered with early-stage founders to validate product ideas, prototype, and launch V1 experiences.",
    wins: [
      "Delivered 6 MVPs from idea to launch with pragmatic technical strategy",
      "Set up analytics, release, and DX tooling for teams shipping weekly",
      "Introduced ML-driven personalization loops for 2 consumer apps",
    ],
  },
];

