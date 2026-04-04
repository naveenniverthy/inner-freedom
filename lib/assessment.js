import { getStageByKey } from "@/lib/stages";

export const assessmentQuestions = [
  {
    id: "q1",
    prompt: "What brings you here right now?",
    options: [
      "I am curious and want to explore these ideas",
      "I want more peace and clarity in life",
      "I want to understand myself more deeply",
      "I am committed to serious inner growth and study"
    ]
  },
  {
    id: "q2",
    prompt: "How familiar are you with Advaita Vedanta?",
    options: [
      "I am completely new to it",
      "I have heard a little and want to learn more",
      "I have read or listened to some teachings",
      "I have been studying it with real interest for some time"
    ]
  },
  {
    id: "q3",
    prompt: "Which statement feels most true for you?",
    options: [
      "I am exploring many ideas and seeing what resonates",
      "I feel life should hold a deeper meaning than success alone",
      "I strongly feel that lasting peace cannot come from outer things alone",
      "I want clear knowledge of who I truly am"
    ]
  },
  {
    id: "q4",
    prompt: "How do you usually respond to difficulty or stress?",
    options: [
      "I get pulled around easily and lose balance",
      "I try to cope, but I still feel unsettled often",
      "I can step back and reflect at times",
      "I increasingly see difficulties as opportunities for understanding"
    ]
  },
  {
    id: "q5",
    prompt: "How steady is your mind for reflection, prayer, meditation, or study?",
    options: [
      "Very unsteady right now",
      "Somewhat available, but inconsistent",
      "Fairly steady when I make time for it",
      "Steady enough to stay with inquiry regularly"
    ]
  },
  {
    id: "q6",
    prompt: "How do you relate to achievements, pleasure, and external success?",
    options: [
      "They still feel like the main source of fulfillment",
      "I enjoy them, but I am beginning to question their limits",
      "I see their place, but I do not expect them to complete me",
      "I clearly know they cannot give lasting freedom"
    ]
  },
  {
    id: "q7",
    prompt: "What kind of guidance are you looking for most?",
    options: [
      "A simple introduction",
      "A clear and practical starting point",
      "A structured path of study and reflection",
      "Help in deepening and living what I already value"
    ]
  },
  {
    id: "q8",
    prompt: "Which best describes your current spiritual or reflective life?",
    options: [
      "I do not really have one yet",
      "I think about these things from time to time",
      "I have some regular practice or study",
      "Inner growth is a serious part of my life"
    ]
  },
  {
    id: "q9",
    prompt: "What do you most want at this stage?",
    options: [
      "Inspiration",
      "Calm and direction",
      "Understanding",
      "Freedom from confusion about myself and life"
    ]
  },
  {
    id: "q10",
    prompt: "How ready are you to stay with this journey over time?",
    options: [
      "I just want to look around for now",
      "I am open and interested",
      "I am ready to learn in a more disciplined way",
      "I am ready to commit myself to deep understanding"
    ]
  }
];

export const preparationLabels = {
  emerging: "Emerging",
  opening: "Opening",
  growing: "Growing",
  steady: "Steady"
};

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function labelForAverage(value) {
  if (value <= 1.75) return preparationLabels.emerging;
  if (value <= 2.5) return preparationLabels.opening;
  if (value <= 3.25) return preparationLabels.growing;
  return preparationLabels.steady;
}

function toPercent(value) {
  return Math.round((value / 4) * 100);
}

export function stageKeyFromScore(score) {
  if (score <= 17) return "curious_explorer";
  if (score <= 25) return "thoughtful_seeker";
  if (score <= 33) return "committed_student";
  return "reflective_practitioner";
}

export function calculateAssessmentResult(answers) {
  const numericAnswers = Object.fromEntries(
    Object.entries(answers).map(([key, value]) => [key, Number(value)])
  );

  const totalScore = Object.values(numericAnswers).reduce((sum, value) => sum + value, 0);
  const stageKey = stageKeyFromScore(totalScore);
  const stage = getStageByKey(stageKey);

  const clarityAverage = average([numericAnswers.q2, numericAnswers.q3, numericAnswers.q9]);
  const freedomAverage = average([numericAnswers.q3, numericAnswers.q6, numericAnswers.q9]);
  const steadinessAverage = average([numericAnswers.q4, numericAnswers.q5, numericAnswers.q8]);
  const seekingAverage = average([numericAnswers.q1, numericAnswers.q7, numericAnswers.q10]);

  return {
    totalScore,
    stageKey,
    stageTitle: stage.title,
    description: stage.description,
    welcome: stage.welcome,
    nextStep: stage.nextStep,
    recommendedPath: stage.recommendedPath,
    rooted: stage.rooted,
    reflection: stage.reflection,
    preparation: {
      clarity: {
        score: toPercent(clarityAverage),
        label: labelForAverage(clarityAverage)
      },
      freedom: {
        score: toPercent(freedomAverage),
        label: labelForAverage(freedomAverage)
      },
      steadiness: {
        score: toPercent(steadinessAverage),
        label: labelForAverage(steadinessAverage)
      },
      seeking: {
        score: toPercent(seekingAverage),
        label: labelForAverage(seekingAverage)
      }
    }
  };
}

export function toDatabaseResult(result) {
  return {
    total_score: result.totalScore,
    stage_key: result.stageKey,
    stage_title: result.stageTitle,
    clarity_score: result.preparation.clarity.score,
    freedom_score: result.preparation.freedom.score,
    steadiness_score: result.preparation.steadiness.score,
    seeking_score: result.preparation.seeking.score
  };
}

export const pendingAssessmentStorageKey = "inner-freedom-pending-assessment";
