export const innerFreedomStages = [
  {
    name: "The Search Begins",
    feeling: "Life may be outwardly fine, but something still feels incomplete.",
    commonStruggle:
      "Restlessness, comparison, success without deep satisfaction.",
    whatHelps: "Begin with Clarity and Responsibility.",
    links: [
      { href: "/clarity", label: "Clarity" },
      { href: "/responsibility", label: "Responsibility" }
    ]
  },
  {
    name: "Lightening the Mind",
    feeling: "The mind begins to see how much it is carrying.",
    commonStruggle:
      "Over-identification with role, title, job, status, network, opinion, and past entanglements.",
    whatHelps:
      "Discipline, Acceptance, and a gentler relationship with life.",
    links: [
      { href: "/discipline", label: "Discipline" },
      { href: "/acceptance", label: "Acceptance" }
    ]
  },
  {
    name: "Living Differently",
    feeling: "The seeker begins to reorient life consciously.",
    commonStruggle:
      "Old circles and old habits no longer feel fully aligned, but the new direction is still forming.",
    whatHelps:
      "Choose healthier associations: spiritual community, meditation circle, fitness group, service circle, study group, or an ikigai-aligned community.",
    links: [
      { href: "/discipline", label: "Discipline" },
      { href: "/offering", label: "Offering" },
      { href: "/start-here", label: "Start Here" }
    ]
  },
  {
    name: "Becoming Ready",
    feeling:
      "The person begins to value preparation, steadiness, humility, and inner maturity.",
    commonStruggle:
      "Wanting freedom immediately, but still being pulled by emotional reactivity.",
    whatHelps:
      "Sadhana, dharma, karma yoga, and devotion to the total order.",
    links: [
      { href: "/discipline", label: "Discipline" },
      { href: "/responsibility", label: "Responsibility" },
      { href: "/offering", label: "Offering" }
    ]
  },
  {
    name: "Seeing Clearly",
    feeling: "The seeker becomes ready for inquiry into the Self.",
    commonStruggle:
      "Confusing intellectual understanding with clear seeing.",
    whatHelps: "Clarity through listening, reflection, and contemplation.",
    links: [
      { href: "/clarity", label: "Clarity" },
      { href: "/courses/gita-keys", label: "Gita Keys" }
    ]
  },
  {
    name: "Living from Clarity",
    feeling: "Knowledge begins to inform daily life.",
    commonStruggle:
      "Old conditioning still appears, but it is no longer taken as the final truth.",
    whatHelps:
      "Assimilation, steady remembrance, and living the Five Keys together.",
    links: [
      { href: "/clarity", label: "Clarity" },
      { href: "/acceptance", label: "Acceptance" },
      { href: "/offering", label: "Offering" }
    ]
  },
  {
    name: "Inner Freedom",
    feeling:
      "Freedom is understood as one's nature, not as something newly produced.",
    commonStruggle:
      "None in the same old sense; life continues, but bondage loses its force.",
    whatHelps: "Abidance in truth, compassion, simplicity, and offering.",
    links: [
      { href: "/what-is-freedom", label: "What is Freedom?" },
      { href: "/offering", label: "Offering" }
    ]
  }
];

export const assessmentStageMap = {
  "Overwhelmed Seeker": {
    primaryStage: "Lightening the Mind",
    description:
      "Your result suggests the mind may be carrying a lot right now. This stage invites grounding, less over-identification, and a gentler relationship with life.",
    recommendedKeys: ["Discipline", "Acceptance"]
  },
  "Improving Seeker": {
    primaryStage: "Living Differently",
    description:
      "Your result suggests you may be reorienting life around healthier values, steadier choices, and a more conscious way of living.",
    recommendedKeys: ["Discipline", "Offering"]
  },
  "Reflective Seeker": {
    primaryStage: "Seeing Clearly",
    description:
      "Your result suggests sincere questioning and readiness for clearer inquiry. The next step is to let reflection become steady seeing.",
    recommendedKeys: ["Clarity"]
  },
  "Committed Practitioner": {
    primaryStage: "Becoming Ready",
    description:
      "Your result suggests preparation, practice, and maturity are already important to you. Keep letting discipline, devotion, and right action refine the mind.",
    recommendedKeys: ["Responsibility", "Discipline", "Offering"]
  },
  "Mature Seeker": {
    primaryStage: "Living from Clarity",
    description:
      "Your result suggests the teaching is ready to move from understanding into assimilation, remembrance, and ordinary daily life.",
    recommendedKeys: ["Clarity", "Acceptance", "Offering"]
  }
};

export const uncertainAssessmentStage = {
  primaryStage: "Between stages",
  description:
    "Your result suggests you may be between stages. Use the stages page as a reflective guide.",
  recommendedKeys: ["Clarity", "Responsibility", "Discipline", "Acceptance", "Offering"]
};

export function getAssessmentStage(seekerTypeTitle) {
  return assessmentStageMap[seekerTypeTitle] ?? uncertainAssessmentStage;
}

