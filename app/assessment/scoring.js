import {
  answerScores,
  assessmentQuestions,
  keyDescriptions,
  keyQuestionMap,
  seekerTypes
} from "./assessmentData";

export const assessmentStorageKey = "moksha-inner-direction-assessment";

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getAnswerScore(selections = []) {
  const primary = answerScores[selections[0]] ?? 0;
  const secondary = answerScores[selections[1]] ?? 0;

  return primary + secondary * 0.5;
}

function getAnswerMax(selections = []) {
  return selections.length > 1 ? 6 : 4;
}

function getKeyLevel(percentage) {
  if (percentage <= 35) return "Needs Attention";
  if (percentage <= 55) return "Developing";
  if (percentage <= 75) return "Growing";
  if (percentage <= 90) return "Strong";
  return "Mature";
}

function getSeekerType(score) {
  return (
    seekerTypes.find((type) => score >= type.min && score <= type.max) ??
    seekerTypes[seekerTypes.length - 1]
  );
}

export function getAnsweredCount(answers) {
  return assessmentQuestions.filter((question) => answers[question.id]?.length)
    .length;
}

export function calculateInnerDirectionResult(answers) {
  const rawScore = assessmentQuestions.reduce(
    (sum, question) => sum + getAnswerScore(answers[question.id]),
    0
  );

  const rawMax = assessmentQuestions.reduce(
    (sum, question) => sum + getAnswerMax(answers[question.id]),
    0
  );

  const normalizedTotal = clamp((rawScore / rawMax) * 160, 40, 160);
  const roundedScore = Math.round(normalizedTotal);
  const seekerType = getSeekerType(roundedScore);

  const keys = Object.entries(keyQuestionMap).map(([name, questionIds]) => {
    const actual = questionIds.reduce(
      (sum, questionId) => sum + getAnswerScore(answers[questionId]),
      0
    );
    const max = questionIds.reduce(
      (sum, questionId) => sum + getAnswerMax(answers[questionId]),
      0
    );
    const percentage = Math.round((actual / max) * 100);

    return {
      name,
      percentage,
      level: getKeyLevel(percentage),
      description: keyDescriptions[name]
    };
  });

  const strongestKey = [...keys].sort((a, b) => b.percentage - a.percentage)[0];
  const weakestKey = [...keys].sort((a, b) => a.percentage - b.percentage)[0];

  return {
    createdAt: new Date().toISOString(),
    rawScore,
    rawMax,
    normalizedTotal: roundedScore,
    seekerType,
    keys,
    strongestKey,
    weakestKey
  };
}
