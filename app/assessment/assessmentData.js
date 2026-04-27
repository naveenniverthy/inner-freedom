export const answerScores = {
  A: 1,
  B: 2,
  C: 3,
  D: 4
};

export const keyQuestionMap = {
  Clarity: [7, 13, 21, 23, 24, 25, 26, 27, 28, 29, 30, 40],
  Responsibility: [6, 12, 18, 19, 33, 34, 37, 38],
  Discipline: [2, 11, 15, 16, 31, 32, 39],
  Offering: [14, 20, 22, 36],
  Acceptance: [1, 3, 4, 5, 8, 9, 10, 17, 35]
};

export const keyDescriptions = {
  Clarity:
    "Clarity shows your readiness for self-knowledge, inquiry, and seeing yourself beyond passing thoughts, roles, and situations.",
  Responsibility:
    "Responsibility shows your relationship with duty, maturity, and right action in daily life.",
  Discipline:
    "Discipline shows steadiness of mind, consistency, and readiness for practice.",
  Offering:
    "Offering shows your ability to act with humility, surrender, and connection to something larger than the personal ego.",
  Acceptance:
    "Acceptance shows your ability to receive outcomes without constant resistance, resentment, or emotional collapse."
};

export const seekerTypes = [
  {
    title: "Overwhelmed Seeker",
    min: 40,
    max: 65,
    description:
      "You are sincere, but life may feel heavy right now. Your mind may be tired, restless, or emotionally burdened. At this stage, the need is not more philosophy. The need is grounding, steadiness, and care. You are not behind. You are simply being invited to slow down and become stable enough to see clearly.",
    mainNeed:
      "Grounding, emotional steadiness, and simple daily structure.",
    nextStep:
      "Begin with Discipline. Build small routines that make the mind lighter and more available.",
    suggestedPath: ["Discipline", "Acceptance", "Responsibility", "Clarity"]
  },
  {
    title: "Improving Seeker",
    min: 66,
    max: 90,
    description:
      "You want to grow and live better. You may be focused on self-improvement, healing, success, or becoming a better version of yourself. This is a useful stage, but it can still be centered on control and outcomes. Your next step is to bring maturity, responsibility, and steadiness into daily life.",
    mainNeed: "Structure, responsibility, and healthy alignment.",
    nextStep:
      "Begin with Responsibility. Live more consciously through right action and clear priorities.",
    suggestedPath: ["Responsibility", "Discipline", "Acceptance", "Clarity"]
  },
  {
    title: "Reflective Seeker",
    min: 91,
    max: 115,
    description:
      "You have moved beyond surface-level living. You are thinking, questioning, and trying to understand life more deeply. You may read, listen, reflect, and search sincerely. But sometimes your understanding remains intellectual. Your next step is to move from scattered reflection to steady inquiry.",
    mainNeed: "Clarity, discrimination, and a consistent direction.",
    nextStep:
      "Begin with Clarity, supported by Discipline. Stay with one clear path long enough for it to work on you.",
    suggestedPath: ["Clarity", "Discipline", "Acceptance", "Offering"]
  },
  {
    title: "Committed Practitioner",
    min: 116,
    max: 140,
    description:
      "You already have some discipline, practice, and inner maturity. You may meditate, pray, study, reflect, or follow a path. The next challenge is more subtle. It is not about doing more, but softening the ego behind the doing. Your practice now needs surrender, assimilation, and depth.",
    mainNeed: "Assimilation, humility, and surrender.",
    nextStep:
      "Begin with Offering. Let action become less self-centered and more aligned with the whole.",
    suggestedPath: ["Offering", "Acceptance", "Clarity", "Discipline"]
  },
  {
    title: "Mature Seeker",
    min: 141,
    max: 160,
    description:
      "Your mind appears relatively steady and ready for deeper self-knowledge. You are less interested in spiritual entertainment and more interested in truth. At this stage, the main need is not more searching, but clear teaching, inquiry, and assimilation. You are ready to go deeper.",
    mainNeed: "Direct self-knowledge, inquiry, and assimilation.",
    nextStep:
      "Begin with Clarity. Use the steadiness you have gained for deeper understanding of the self.",
    suggestedPath: ["Clarity", "Offering", "Acceptance", "Discipline"]
  }
];

export const assessmentSections = [
  {
    title: "Your Experience of Life",
    questions: [
      {
        id: 1,
        prompt: "When something goes wrong in your life, what happens first?",
        choices: {
          A: "I feel anxious, stressed, or overwhelmed",
          B: "I try to fix it immediately",
          C: "I step back and think about it",
          D: "I accept it and move forward"
        }
      },
      {
        id: 2,
        prompt: "How does your mind feel most of the day?",
        choices: {
          A: "Busy and restless",
          B: "Focused on tasks and goals",
          C: "Thoughtful and reflective",
          D: "Calm and steady"
        }
      },
      {
        id: 3,
        prompt: "How dependent is your happiness on external situations?",
        choices: {
          A: "Very dependent",
          B: "Somewhat dependent",
          C: "Less dependent",
          D: "Mostly independent"
        }
      },
      {
        id: 4,
        prompt: "When plans do not work out, you usually:",
        choices: {
          A: "Feel frustrated or upset",
          B: "Try harder to control things",
          C: "Reflect on what happened",
          D: "Accept and adjust naturally"
        }
      },
      {
        id: 5,
        prompt: "How often do you feel something is missing in life?",
        choices: {
          A: "Almost always",
          B: "Often",
          C: "Sometimes",
          D: "Rarely"
        }
      },
      {
        id: 6,
        prompt: "What best describes your daily life?",
        choices: {
          A: "Chaotic or overwhelming",
          B: "Busy and goal-driven",
          C: "Balanced but questioning",
          D: "Simple and steady"
        }
      },
      {
        id: 7,
        prompt: "How do you usually make decisions?",
        choices: {
          A: "Based on emotions or pressure",
          B: "Based on results and outcomes",
          C: "Based on thinking and reflection",
          D: "Based on clarity and acceptance"
        }
      },
      {
        id: 8,
        prompt: "When you face uncertainty, you:",
        choices: {
          A: "Feel uneasy or worried",
          B: "Try to control the outcome",
          C: "Think through possibilities",
          D: "Stay calm and open"
        }
      },
      {
        id: 9,
        prompt: "Your relationship with success and failure:",
        choices: {
          A: "Strongly affects my mood",
          B: "Important but manageable",
          C: "I try to understand both",
          D: "I remain mostly unaffected"
        }
      },
      {
        id: 10,
        prompt: "How do you feel about your current life overall?",
        choices: {
          A: "Struggling",
          B: "Managing",
          C: "Learning",
          D: "At ease"
        }
      }
    ]
  },
  {
    title: "Your Inner Patterns",
    questions: [
      {
        id: 11,
        prompt: "How often do you compare yourself with others?",
        choices: {
          A: "Very often",
          B: "Sometimes",
          C: "Rarely",
          D: "Almost never"
        }
      },
      {
        id: 12,
        prompt: "How do you handle criticism?",
        choices: {
          A: "Take it personally",
          B: "Defend or justify",
          C: "Reflect on it",
          D: "Accept it calmly"
        }
      },
      {
        id: 13,
        prompt: "Your thoughts are usually:",
        choices: {
          A: "Uncontrolled and repetitive",
          B: "Goal-oriented",
          C: "Observed and examined",
          D: "Quiet or minimal"
        }
      },
      {
        id: 14,
        prompt: "Do you feel the need to prove yourself?",
        choices: {
          A: "Strongly",
          B: "Sometimes",
          C: "Less now",
          D: "Not really"
        }
      },
      {
        id: 15,
        prompt: "How do you relate to your emotions?",
        choices: {
          A: "I get carried away",
          B: "I try to manage them",
          C: "I observe them",
          D: "They do not disturb much"
        }
      },
      {
        id: 16,
        prompt: "When something triggers you, you:",
        choices: {
          A: "React immediately",
          B: "Try to control the reaction",
          C: "Pause and reflect",
          D: "Remain mostly unaffected"
        }
      },
      {
        id: 17,
        prompt: "Your biggest struggle right now is:",
        choices: {
          A: "Stress or anxiety",
          B: "Pressure or expectations",
          C: "Confusion or questions",
          D: "Subtle dissatisfaction"
        }
      },
      {
        id: 18,
        prompt: "How often do you reflect on your life?",
        choices: {
          A: "Rarely",
          B: "Sometimes",
          C: "Regularly",
          D: "Deeply"
        }
      },
      {
        id: 19,
        prompt: "What drives most of your actions?",
        choices: {
          A: "Fear or insecurity",
          B: "Achievement or results",
          C: "Understanding or growth",
          D: "Clarity or alignment"
        }
      },
      {
        id: 20,
        prompt: "How do you feel about control?",
        choices: {
          A: "I need to control things",
          B: "I try to influence outcomes",
          C: "I understand the limits of control",
          D: "I let things unfold"
        }
      }
    ]
  },
  {
    title: "Your Spiritual Orientation",
    questions: [
      {
        id: 21,
        prompt: "Why are you interested in spirituality?",
        choices: {
          A: "To reduce stress",
          B: "To improve life",
          C: "To understand deeply",
          D: "To know the truth of myself"
        }
      },
      {
        id: 22,
        prompt: "What do you seek the most?",
        choices: {
          A: "Peace",
          B: "Stability",
          C: "Clarity",
          D: "Freedom"
        }
      },
      {
        id: 23,
        prompt: "What is your relationship with spiritual content?",
        choices: {
          A: "I consume randomly",
          B: "I follow selectively",
          C: "I study and reflect",
          D: "I stay with one clear path"
        }
      },
      {
        id: 24,
        prompt: "How do you approach teachings?",
        choices: {
          A: "I listen but forget",
          B: "I apply when needed",
          C: "I think deeply about them",
          D: "I live them"
        }
      },
      {
        id: 25,
        prompt: "What do you believe about yourself?",
        choices: {
          A: "I am this personality and life",
          B: "I can improve and grow",
          C: "I am trying to understand who I am",
          D: "I feel there is something deeper"
        }
      },
      {
        id: 26,
        prompt: "Do you feel drawn to self-inquiry?",
        choices: {
          A: "Not really",
          B: "Slightly",
          C: "Yes, often",
          D: "Strongly"
        }
      },
      {
        id: 27,
        prompt: "What confuses you the most?",
        choices: {
          A: "Life situations",
          B: "Decisions and outcomes",
          C: "Meaning of life",
          D: "Nature of self"
        }
      },
      {
        id: 28,
        prompt: "How do you engage with questions like Who am I?",
        choices: {
          A: "I do not think about it",
          B: "Occasionally",
          C: "Seriously",
          D: "Deeply and consistently"
        }
      },
      {
        id: 29,
        prompt: "What kind of teaching resonates with you?",
        choices: {
          A: "Practical and simple",
          B: "Motivational and structured",
          C: "Reflective and deep",
          D: "Direct and truth-oriented"
        }
      },
      {
        id: 30,
        prompt: "What feels closest to your current stage?",
        choices: {
          A: "I need help with life",
          B: "I want to improve myself",
          C: "I want to understand life",
          D: "I want to know the truth"
        }
      }
    ]
  },
  {
    title: "Practice and Readiness",
    questions: [
      {
        id: 31,
        prompt: "Do you have a daily practice?",
        choices: {
          A: "No",
          B: "Occasionally",
          C: "Regularly",
          D: "Consistently"
        }
      },
      {
        id: 32,
        prompt: "Can you sit quietly without distraction?",
        choices: {
          A: "Very difficult",
          B: "Somewhat difficult",
          C: "Manageable",
          D: "Easy"
        }
      },
      {
        id: 33,
        prompt: "How disciplined are you?",
        choices: {
          A: "Not disciplined",
          B: "Somewhat disciplined",
          C: "Mostly disciplined",
          D: "Highly disciplined"
        }
      },
      {
        id: 34,
        prompt: "How do you approach effort?",
        choices: {
          A: "Avoid it",
          B: "Use it for results",
          C: "Use it for growth",
          D: "Use it as a way of living"
        }
      },
      {
        id: 35,
        prompt: "How do you handle outcomes?",
        choices: {
          A: "Get affected deeply",
          B: "Try to accept",
          C: "Reflect and learn",
          D: "Accept fully"
        }
      },
      {
        id: 36,
        prompt: "Do you feel your actions are offered to something larger?",
        choices: {
          A: "No",
          B: "Occasionally",
          C: "Sometimes",
          D: "Yes"
        }
      },
      {
        id: 37,
        prompt: "How do you see your role in life?",
        choices: {
          A: "Struggling individual",
          B: "Responsible doer",
          C: "Learning participant",
          D: "Instrument of a larger order"
        }
      },
      {
        id: 38,
        prompt: "How consistent are you in what you start?",
        choices: {
          A: "Not consistent",
          B: "Somewhat consistent",
          C: "Mostly consistent",
          D: "Fully consistent"
        }
      },
      {
        id: 39,
        prompt: "How do you respond to discipline, routine, and practice?",
        choices: {
          A: "Resist it",
          B: "Accept it for results",
          C: "Value it",
          D: "Depend on it"
        }
      },
      {
        id: 40,
        prompt: "Are you ready for deeper self-inquiry?",
        choices: {
          A: "Not now",
          B: "Maybe later",
          C: "Yes",
          D: "Absolutely"
        }
      }
    ]
  }
];

export const assessmentQuestions = assessmentSections.flatMap(
  (section) => section.questions
);
