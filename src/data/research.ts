export const lenses = [
  {
    title: "Human in the loop",
    text: "AI systems that preserve meaningful human input rather than replacing it.",
  },
  {
    title: "Fair aggregation",
    text: "How heterogeneous preferences, outcomes, or welfare can be combined into collective decisions.",
  },
  {
    title: "Networks & collective behaviour",
    text: "How local interaction and individual positions relate to wider group structure and outcomes.",
  },
] as const;

export const featured = {
  title:
    "Can Social-Welfare Objectives Improve Distributional Fairness in Multi-Agent Reinforcement Learning?",
  description:
    "A four-agent highway-merging study asking whether successful coordination can also distribute the cost of cooperation fairly.",
  tags: ["Multi-Agent RL", "Fairness", "Social Welfare", "Mechanism Diagnosis"],
  href: "/research/fair-marl/",
} as const;

export const earlier = {
  title: "Social Network Analysis of Online Interaction and Depression Levels",
  description:
    "An individual course research project using a 17-person weighted interaction network, R-based network analysis, centrality measures, and regression.",
  tags: ["Social Networks", "R", "Centrality", "Quantitative Sociology"],
  href: "/research/social-network/",
} as const;

export const pipeline = [
  "Highway scenarios",
  "Four learned vehicles",
  "Local observations",
  "Parameter-shared Double DQN",
  "Alternative welfare mechanisms",
  "12 independently trained seeds",
  "256 held-out scenarios per policy",
  "Task + welfare evaluation",
] as const;

export const findings = [
  {
    n: "01",
    title: "Visible concession ≠ experienced disadvantage",
    text: "Slow vehicles could brake more often while Fast vehicles were more exposed to requirement-relative welfare loss.",
  },
  {
    n: "02",
    title: "Aggregation rules alone were insufficient",
    text: "Mean, Generalized Gini, and Maximin did not reliably improve the final welfare distribution when only the terminal social-welfare objective changed.",
  },
  {
    n: "03",
    title: "Behavioural influence ≠ final redistribution",
    text: "Welfare-history information could alter local behaviour without consistently translating into trajectory-level fairness.",
  },
] as const;

export const mechanismSteps = [
  { title: "Fairness objective", note: "" },
  { title: "Is the relevant fairness information observable?", note: "WSC · information availability" },
  { title: "Does the signal change action selection?", note: "" },
  { title: "Can the action influence the protected outcome?", note: "EXP05 · local burden + action-linked feedback" },
  { title: "Is the behaviour retained through training?", note: "DWS · temporal feedback / diffuse credit" },
  { title: "Final welfare distribution", note: "" },
] as const;

export const rigour = [
  { value: "12", label: "independently trained seeds" },
  { value: "256", label: "held-out scenarios per policy" },
  { value: "Paired", label: "conditions compared within training seed" },
  { value: "Bootstrap", label: "confidence intervals from seed-level differences" },
] as const;

export const limitations = [
  "The environment is a narrow four-vehicle merge.",
  "The study uses one main road geometry.",
  "Uncertainty remains across training seeds.",
  "EXP05 changes several components and does not include a parallel continuation control.",
  "Representative episode media is illustrative, not aggregate evidence.",
] as const;
