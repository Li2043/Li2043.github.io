export type EvidenceType = "exact-replay" | "reconstructed";

export interface Experiment {
  id: string;
  code: string;
  label: string;
  researchQuestion: string;
  description: string;
  evidenceType: EvidenceType;
  videoPath: string;
  posterPath: string;
  caveat: string;
  metadata: string;
}

export const experiments: Experiment[] = [
  {
    id: "exp01",
    code: "EXP01",
    label: "Baseline",
    researchQuestion: "Can successful coordination still create unequal welfare?",
    description:
      "In the selected Baseline episode, Slow vehicles can brake while remaining near their mobility target, while Fast vehicles accumulate greater target-relative burden. The merge still succeeds.",
    evidenceType: "exact-replay",
    videoPath: "/videos/exp01-baseline.webp",
    posterPath: "/images/research/fair-marl/exp01-keyframe.png",
    caveat: "Representative episode · exact replay · illustrative only",
    metadata: "Exact H1 replay · seed 920101 · scenario H1_00159 · selected steps 10–30, then the same replay continues through the merge.",
  },
  {
    id: "exp02",
    code: "EXP02",
    label: "Terminal Maximin",
    researchQuestion: "Is changing the final aggregation rule enough?",
    description:
      "The Maximin branch focuses the welfare objective on the worst-off final utility. This episode illustrates that the welfare term is applied at episode termination.",
    evidenceType: "exact-replay",
    videoPath: "/videos/exp02-maximin.webp",
    posterPath: "/images/research/fair-marl/exp02-keyframe.png",
    caveat: "Representative episode · exact replay · illustrative only",
    metadata:
      "Exact H1 replay · seed 920101 · scenario H1_00159 · selected from step 42. The same replay is shown through the merge. This clip does not show why the condition failed to improve fairness.",
  },
  {
    id: "exp03",
    code: "EXP03",
    label: "Welfare-State Communication",
    researchQuestion: "What if agents can observe accumulated welfare history?",
    description:
      "WSC exposes welfare-history information to the policy. The selected targeted-yield event shows an ego vehicle braking when a visible neighbour is disadvantaged, followed by local welfare-gap recovery.",
    evidenceType: "exact-replay",
    videoPath: "/videos/exp03-wsc.webp",
    posterPath: "/images/research/fair-marl/exp03-keyframe.png",
    caveat: "Representative episode · exact replay · illustrative only",
    metadata:
      "Exact H1 replay · seed 920105 · scenario H1_00062 · selected event at step 19. The animation then continues until the vehicles have merged.",
  },
  {
    id: "exp04",
    code: "EXP04",
    label: "Dense Welfare Shaping",
    researchQuestion: "Does earlier welfare feedback solve the problem?",
    description:
      "DWS moves welfare feedback earlier in time, but the signal is shared across active agents. The selected episode illustrates delayed recovery and diffuse credit: agents not directly involved in the local interaction can receive the same welfare signal.",
    evidenceType: "exact-replay",
    videoPath: "/videos/exp04-dws.webp",
    posterPath: "/images/research/fair-marl/exp04-keyframe.png",
    caveat: "Representative episode · exact replay · illustrative only",
    metadata: "Exact H1 replay · seed 910101 · scenario H1_00012 · same road scale as the other clips, shown through the merge.",
  },
  {
    id: "exp05",
    code: "EXP05",
    label: "Mechanism-Guided Local Feedback",
    researchQuestion: "What if disadvantage is local, persistent, and action-linked?",
    description:
      "EXP05 combines accumulated burden, visible-neighbour comparison, and action-dependent local feedback. The selected visual illustrates how a local burden gap can trigger severity-weighted feedback tied to the ego action.",
    evidenceType: "reconstructed",
    videoPath: "/videos/exp05-mechanism.webp",
    posterPath: "/images/research/fair-marl/exp05-keyframe.png",
    caveat: "Mechanism reconstruction · illustrative only",
    metadata:
      "Reconstructed mechanism overlay, not an exact formal environment replay · seed 900104 · scenario H1_00005 · shown through the merge.",
  },
];
