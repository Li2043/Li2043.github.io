export const profile = {
  name: "Li Shen",
  given: "Li",
  family: "Shen",
  siteUrl: "https://li2043.github.io",
  descriptor: "MSc Computer Science · Quantitative Sociology Background",
  statement:
    "I am interested in how AI systems can work with human signals rather than replace them — especially how heterogeneous preferences, interactions, and welfare can be aggregated into collective decisions.",
  interests: [
    "Human-in-the-loop AI and human–AI collaboration",
    "Collective decision-making and fair aggregation",
    "Social choice and ranking",
    "Social networks and convention formation",
    "Multi-agent systems and algorithmic fairness",
  ],
  education: [
    {
      years: "2025–2026",
      degree: "MSc Computer Science",
      institution: "University of Bristol",
    },
    {
      years: "2018–2022",
      degree: "Bachelor of Law in Sociology",
      institution: "Shanghai University",
    },
  ],
  /** Leave empty until a public address should appear. The site will not invent one. */
  email: "",
  github: "https://github.com/Li2043",
  linkedin: "https://linkedin.com/in/li-shen-248289381",
  thesisRepo: "https://github.com/Li2043/Graduation-Thesis",
  cvPath: "/docs/Li_Shen_Academic_CV.pdf",
  thesisPath: "/docs/Li_Shen_MSc_Thesis.pdf",
} as const;

export const nav = [
  { label: "Research", href: "/research/fair-marl/" },
  { label: "Background", href: "/#background" },
  { label: "Projects", href: "/#projects" },
  { label: "CV", href: profile.cvPath, file: "cv" as const },
  { label: "GitHub", href: profile.github, external: true },
] as const;
