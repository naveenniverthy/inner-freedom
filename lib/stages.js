export const stageContent = {
  curious_explorer: {
    key: "curious_explorer",
    title: "Curious Explorer",
    description:
      "You are at a beautiful beginning. Something in you senses that there is more to life than routine, pressure, and endless chasing. You may not yet have a clear framework, but your openness matters. This is the right stage for simple entry, gentle exposure, and honest curiosity.",
    welcome:
      "You do not need to arrive with certainty. A sincere beginning is already meaningful.",
    nextStep:
      "Start with a simple introduction, one clear article, and a few minutes of quiet reflection each day.",
    recommendedPath:
      "Begin with gentle foundational teachings, calm reading, and a slower rhythm of self-observation.",
    rooted:
      "Traditional teaching begins with careful listening, patient exposure, and the willingness to let understanding unfold over time.",
    reflection:
      "Do not rush to define yourself. Let openness become a steady form of attention."
  },
  thoughtful_seeker: {
    key: "thoughtful_seeker",
    title: "Thoughtful Seeker",
    description:
      "You are no longer casually curious. Life has already taught you that achievement, pleasure, or distraction cannot fully settle the heart. You are looking for peace, clarity, and a deeper understanding of what truly matters. You are ready for a more intentional beginning.",
    welcome:
      "Your search has become more sincere. That sincerity is part of your strength.",
    nextStep:
      "Choose one clear source of guidance and begin a regular rhythm of study, reflection, and honest observation in daily life.",
    recommendedPath:
      "Build a grounded foundation with introductory teachings, practical notes, and steady reflection that keeps life and learning connected.",
    rooted:
      "Traditional teaching values preparation, consistency, and a mind that learns to listen without rushing toward quick conclusions.",
    reflection:
      "Let the search deepen from wanting relief into wanting what is truly clear."
  },
  committed_student: {
    key: "committed_student",
    title: "Committed Student",
    description:
      "You are ready for real study. You are not here just for inspiration. You want understanding that can stand up to doubt, difficulty, and change. You are ready for structure, depth, and a path that helps you think clearly and live deliberately.",
    welcome:
      "You are ready to move from interest into disciplined understanding.",
    nextStep:
      "Commit to steady study, make time for reflection after learning, and let your daily responses become part of the work.",
    recommendedPath:
      "Follow a structured path of teachings, contemplation, and regular assimilation rather than scattered inspiration.",
    rooted:
      "Traditional teaching becomes fruitful when listening, reflection, and lived assimilation support one another over time.",
    reflection:
      "Depth comes when understanding is protected by discipline, patience, and honesty."
  },
  reflective_practitioner: {
    key: "reflective_practitioner",
    title: "Reflective Practitioner",
    description:
      "You are already trying to live this wisdom, not just understand it. You see that inner freedom is not about collecting spiritual experiences, but about clarity, steadiness, and assimilation. You are now in the stage of refinement, deepening, and living what you value.",
    welcome:
      "You are already carrying the teaching into life. The invitation now is refinement.",
    nextStep:
      "Stay close to what is essential, simplify what disturbs clarity, and deepen the quiet assimilation of what you already value.",
    recommendedPath:
      "Continue with mature study, contemplation, and a life rhythm that supports steadiness, humility, and integration.",
    rooted:
      "Traditional teaching matures through continued inquiry, humility, and patient assimilation of what has already been clearly understood.",
    reflection:
      "Less searching, more living. Let clarity become your natural way of meeting life."
  }
};

export function getStageByKey(stageKey) {
  return stageContent[stageKey] ?? stageContent.curious_explorer;
}
