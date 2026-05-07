"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

const values = [
  "Freedom",
  "Peace",
  "Wisdom",
  "Love",
  "Integrity",
  "Family",
  "Security",
  "Growth",
  "Contribution",
  "Creativity",
  "Belonging",
  "Discipline",
  "Responsibility",
  "Courage",
  "Compassion",
  "Excellence",
  "Simplicity",
  "Truth",
  "Joy",
  "Inner Freedom"
];

const strengths = [
  "Curiosity",
  "Love of Learning",
  "Perspective",
  "Honesty",
  "Perseverance",
  "Kindness",
  "Gratitude",
  "Hope",
  "Self-Regulation",
  "Humility",
  "Leadership",
  "Fairness",
  "Forgiveness",
  "Spiritual Interest",
  "Appreciation of Beauty",
  "Courage"
];

const importanceLabels = {
  1: "Low",
  2: "Somewhat",
  3: "Important",
  4: "Very Important",
  5: "Essential"
};

const alignmentLabels = {
  1: "Rarely expressed",
  2: "Sometimes expressed",
  3: "Moderately expressed",
  4: "Often expressed",
  5: "Strongly expressed"
};

const strengthLabels = {
  1: "Rarely",
  2: "Sometimes",
  3: "Moderately",
  4: "Often",
  5: "Very naturally"
};

const valueDescriptions = {
  Freedom:
    "Living with room to choose, grow, and act from your deeper priorities.",
  Peace:
    "Living with inner steadiness, emotional space, and less unnecessary conflict.",
  Wisdom: "Seeking what is true, meaningful, and deeply understood.",
  Love: "Caring deeply and allowing connection to shape your life.",
  Integrity: "Living honestly and staying aligned with your deeper principles.",
  Family: "Honoring close bonds, care, responsibility, and belonging at home.",
  Security: "Creating stability, safety, and a reliable foundation.",
  Growth: "Learning, improving, and becoming more capable over time.",
  Contribution: "Using your life to serve, support, or benefit others.",
  Creativity: "Expressing imagination, originality, and fresh ways of seeing.",
  Belonging: "Feeling connected, accepted, and part of something meaningful.",
  Discipline: "Following through steadily even when motivation changes.",
  Responsibility: "Owning your choices, duties, and impact on others.",
  Courage: "Doing what matters even when fear or discomfort is present.",
  Compassion: "Responding to yourself and others with care and understanding.",
  Excellence: "Doing things with quality, mastery, and sincere effort.",
  Simplicity: "Reducing excess and living closer to what is essential.",
  Truth: "Valuing honesty, reality, and clear seeing over comfort.",
  Joy: "Allowing lightness, delight, play, and appreciation into life.",
  "Inner Freedom":
    "Becoming less dependent on outer conditions for your sense of wholeness."
};

const strengthDescriptions = {
  Curiosity: "A natural interest in exploring and asking honest questions.",
  "Love of Learning": "Enjoying study, practice, and new understanding.",
  Perspective: "Seeing situations with a wider and wiser view.",
  Honesty: "Being truthful with yourself and others.",
  Perseverance: "Continuing with care when something matters.",
  Kindness: "Meeting others with warmth and practical care.",
  Gratitude: "Recognizing what is good and already given.",
  Hope: "Staying open to possibility and renewal.",
  "Self-Regulation": "Guiding your energy, habits, and reactions.",
  Humility: "Learning without needing to prove yourself.",
  Leadership: "Helping people move toward what matters.",
  Fairness: "Caring about balance, dignity, and respect.",
  Forgiveness: "Softening resentment and making room to move forward.",
  "Spiritual Interest": "Wondering about meaning, depth, and inner life.",
  "Appreciation of Beauty": "Noticing beauty, goodness, and quiet wonder.",
  Courage: "Acting with heart even when fear is present."
};

const keyExplanations = {
  Clarity:
    "You may benefit from deeper reflection on what is real, what matters, and what is truly worth pursuing.",
  Responsibility:
    "You may benefit from aligning daily choices with duty, care, integrity, and meaningful action.",
  Discipline:
    "You may benefit from building steady practices that support your highest values.",
  Acceptance:
    "You may benefit from learning to receive life with more steadiness, patience, and emotional space.",
  Offering:
    "You may benefit from loosening the pressure of control and acting with sincerity while releasing the result."
};

const keyRules = [
  {
    key: "Clarity",
    values: ["Wisdom", "Truth", "Inner Freedom", "Freedom"]
  },
  {
    key: "Responsibility",
    values: ["Responsibility", "Integrity", "Family", "Contribution"]
  },
  {
    key: "Discipline",
    values: ["Discipline", "Excellence", "Growth", "Courage"]
  },
  {
    key: "Acceptance",
    values: ["Peace", "Joy", "Security", "Belonging"]
  },
  {
    key: "Offering",
    values: ["Love", "Compassion", "Simplicity", "Contribution"]
  }
];

const tensionPairs = [
  ["Freedom", "Security"],
  ["Peace", "Excellence"],
  ["Family", "Growth"],
  ["Belonging", "Truth"],
  ["Simplicity", "Excellence"],
  ["Love", "Freedom"],
  ["Responsibility", "Joy"],
  ["Discipline", "Peace"]
];

const nextSteps = [
  "Pick one high-gap value and reflect on why it matters.",
  "Choose one small weekly action to support it.",
  "Notice where your strengths already help you.",
  "Do not try to fix everything at once.",
  "Return to the assessment after 30 days."
];

function getValueId(value, kind) {
  return `${kind}-${value.toLowerCase().replaceAll(" ", "-")}`;
}

function sortValuesByInitialRating(answers, sourceValues = values) {
  return sourceValues
    .map((name) => ({
      name,
      index: values.indexOf(name),
      importanceScore: answers[name] ?? 0
    }))
    .sort((a, b) => b.importanceScore - a.importanceScore || a.index - b.index);
}

function createPairwiseComparisons(topValues) {
  const comparisons = [];

  for (let first = 0; first < topValues.length; first += 1) {
    for (let second = first + 1; second < topValues.length; second += 1) {
      comparisons.push([topValues[first].name, topValues[second].name]);
    }
  }

  return comparisons;
}

function getInterpretation(score) {
  if (score >= 85) return "Strong Alignment";
  if (score >= 70) return "Growing Alignment";
  if (score >= 50) return "Mixed Alignment";
  return "Low Alignment";
}

function getRecommendedKeys(highGapValues) {
  const gapNames = highGapValues.map((entry) => entry.name);
  const recommended = keyRules
    .filter((rule) => rule.values.some((value) => gapNames.includes(value)))
    .map((rule) => rule.key);

  return recommended.length > 0 ? recommended : ["Clarity", "Offering"];
}

function getComparedRanking(topValues, comparisonAnswers, importanceAnswers) {
  const pointsByValue = topValues.reduce(
    (scores, value) => ({
      ...scores,
      [value.name]: 0
    }),
    {}
  );

  Object.values(comparisonAnswers).forEach((winner) => {
    pointsByValue[winner] = (pointsByValue[winner] ?? 0) + 1;
  });

  return topValues
    .map((value) => ({
      ...value,
      comparisonPoints: pointsByValue[value.name] ?? 0,
      importanceScore: importanceAnswers[value.name]
    }))
    .sort(
      (a, b) =>
        b.comparisonPoints - a.comparisonPoints ||
        b.importanceScore - a.importanceScore ||
        a.index - b.index
    );
}

function getFinalResults({
  importanceAnswers,
  alignmentAnswers,
  strengthAnswers,
  topEightValues,
  comparisonAnswers
}) {
  const comparedRanking = getComparedRanking(
    topEightValues,
    comparisonAnswers,
    importanceAnswers
  );
  const comparedNames = new Set(comparedRanking.map((value) => value.name));
  const remainingRanking = sortValuesByInitialRating(
    importanceAnswers,
    values.filter((value) => !comparedNames.has(value))
  );

  const rankedValues = [...comparedRanking, ...remainingRanking].map((value) => {
    const alignmentScore = alignmentAnswers[value.name];
    const importanceScore = importanceAnswers[value.name];

    return {
      ...value,
      alignmentScore,
      importanceScore,
      gapScore: importanceScore - alignmentScore
    };
  });

  const topValues = rankedValues.slice(0, 5);
  const strongestStrengths = strengths
    .map((name, index) => ({
      name,
      index,
      score: strengthAnswers[name]
    }))
    .sort((a, b) => b.score - a.score || a.index - b.index)
    .slice(0, 5);
  const highGapValues = rankedValues.filter(
    (value) => value.importanceScore >= 4 && value.gapScore >= 2
  );

  const averageImportance =
    topValues.reduce((sum, value) => sum + value.importanceScore, 0) /
    topValues.length;
  const averageAlignment =
    topValues.reduce((sum, value) => sum + value.alignmentScore, 0) /
    topValues.length;
  const alignmentScore = Math.min(
    100,
    Math.round((averageAlignment / averageImportance) * 100)
  );
  const topEightNames = new Set(topEightValues.map((value) => value.name));
  const tensions = tensionPairs.filter(
    ([first, second]) =>
      topEightNames.has(first) &&
      topEightNames.has(second) &&
      importanceAnswers[first] >= 4 &&
      importanceAnswers[second] >= 4
  );

  return {
    topValues,
    rankedValues,
    strongestStrengths,
    highGapValues,
    tensions,
    alignmentScore,
    interpretation: getInterpretation(alignmentScore),
    recommendedKeys: getRecommendedKeys(highGapValues)
  };
}

function RatingScale({ labels, name, value, onChange }) {
  return (
    <div className="grid gap-2 sm:grid-cols-5">
      {[1, 2, 3, 4, 5].map((score) => {
        const selected = value === score;

        return (
          <label
            key={score}
            className={`flex cursor-pointer items-start gap-3 rounded-2xl border px-3 py-3 transition ${
              selected
                ? "border-sage-500/40 bg-sage-100/70 text-ink-900"
                : "border-sage-700/10 bg-white/70 text-ink-900/66 hover:bg-white"
            }`}
          >
            <input
              type="radio"
              name={name}
              value={score}
              checked={selected}
              onChange={() => onChange(score)}
              className="mt-1 h-4 w-4 accent-sage-700"
            />
            <span className="grid gap-1">
              <span className="text-sm font-semibold">{score}</span>
              <span className="text-xs leading-5">{labels[score]}</span>
            </span>
          </label>
        );
      })}
    </div>
  );
}

function QuestionCard({ title, description, children }) {
  return (
    <fieldset className="rounded-[1.5rem] border border-sage-700/10 bg-white/72 p-4 shadow-sm sm:p-5">
      <legend className="px-1 text-lg font-semibold leading-7 text-ink-900">
        {title}
      </legend>
      {description ? (
        <p className="mt-2 text-sm leading-6 text-ink-900/58">{description}</p>
      ) : null}
      <div className="mt-4">{children}</div>
    </fieldset>
  );
}

function StepSection({ eyebrow, title, intro, helper, children }) {
  return (
    <section className="surface px-5 py-7 sm:px-8 sm:py-9">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-4xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-4 max-w-reading text-[1rem] leading-8 text-ink-900/66">
          {intro}
        </p>
      ) : null}
      {helper ? (
        <p className="mt-4 max-w-reading rounded-[1.25rem] border border-sage-700/10 bg-sand-50/85 px-4 py-3 text-sm leading-7 text-ink-900/62">
          {helper}
        </p>
      ) : null}
      <div className="mt-6 grid gap-5">{children}</div>
    </section>
  );
}

function SummaryCard({ text, nextText, buttonLabel, onBack, onContinue, onReset }) {
  return (
    <section className="surface px-5 py-7 sm:px-8 sm:py-9">
      <p className="eyebrow">Pause and notice</p>
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-4xl">
        What you just did
      </h2>
      <div className="mt-5 grid gap-3 rounded-[1.5rem] border border-sage-700/10 bg-sand-50/85 p-5 text-[1rem] leading-8 text-ink-900/66">
        <p>{text}</p>
        <p>{nextText}</p>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={onReset} className="btn-secondary">
          Reset Assessment
        </button>
        <button type="button" onClick={onBack} className="btn-secondary">
          Back
        </button>
        <button type="button" onClick={onContinue} className="btn-primary">
          {buttonLabel}
        </button>
      </div>
    </section>
  );
}

function ResultPanel({ title, children, className = "" }) {
  return (
    <section
      className={`rounded-[1.75rem] border border-sage-700/10 bg-white/76 p-5 shadow-sm sm:p-6 ${className}`}
    >
      <h3 className="font-serif text-2xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-3xl">
        {title}
      </h3>
      <div className="mt-4 text-[0.98rem] leading-8 text-ink-900/66">
        {children}
      </div>
    </section>
  );
}

function StepIndicator({ step }) {
  return (
    <section className="sticky top-3 z-10 rounded-[1.5rem] border border-sage-700/10 bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:rounded-full">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-ink-900/65">
          Step {step} of 5
        </p>
        <div className="h-2 overflow-hidden rounded-full bg-sage-100 sm:w-80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sage-300 to-sage-700 transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>
    </section>
  );
}

export default function ValuesAssessmentClient() {
  const [step, setStep] = useState(1);
  const [summaryStep, setSummaryStep] = useState(null);
  const [importanceAnswers, setImportanceAnswers] = useState({});
  const [alignmentAnswers, setAlignmentAnswers] = useState({});
  const [strengthAnswers, setStrengthAnswers] = useState({});
  const [comparisonAnswers, setComparisonAnswers] = useState({});
  const [comparisonIndex, setComparisonIndex] = useState(0);
  const [result, setResult] = useState(null);

  const initialScanComplete = Object.keys(importanceAnswers).length === values.length;
  const topEightValues = useMemo(
    () => sortValuesByInitialRating(importanceAnswers).slice(0, 8),
    [importanceAnswers]
  );
  const comparisons = useMemo(
    () => createPairwiseComparisons(topEightValues),
    [topEightValues]
  );
  const currentComparison = comparisons[comparisonIndex];
  const pairwiseComplete =
    comparisons.length > 0 &&
    Object.keys(comparisonAnswers).length === comparisons.length;
  const alignmentComplete = Object.keys(alignmentAnswers).length === values.length;
  const strengthsComplete = Object.keys(strengthAnswers).length === strengths.length;

  function handleInitialAnswer(value, score) {
    setImportanceAnswers((current) => ({
      ...current,
      [value]: score
    }));
    setSummaryStep(null);
    setComparisonAnswers({});
    setComparisonIndex(0);
    setResult(null);
  }

  function handlePairwiseChoice(value) {
    setComparisonAnswers((current) => ({
      ...current,
      [comparisonIndex]: value
    }));
  }

  function goToNextStep() {
    if (step === 1 && initialScanComplete) {
      setSummaryStep(1);
      return;
    }

    if (step === 2 && pairwiseComplete) {
      setSummaryStep(2);
      return;
    }

    if (step === 3 && alignmentComplete) {
      setSummaryStep(3);
    }
  }

  function goBack() {
    if (summaryStep) {
      setSummaryStep(null);
      return;
    }

    if (step === 2 && comparisonIndex > 0) {
      setComparisonIndex((current) => current - 1);
      return;
    }

    setStep((current) => Math.max(1, current - 1));
  }

  function goToNextComparison() {
    if (!comparisonAnswers[comparisonIndex]) return;

    if (comparisonIndex < comparisons.length - 1) {
      setComparisonIndex((current) => current + 1);
      return;
    }

    setSummaryStep(2);
  }

  function calculateResults() {
    if (!strengthsComplete) return;

    setSummaryStep(4);
  }

  function showResults() {
    if (!strengthsComplete) return;

    setResult(
      getFinalResults({
        importanceAnswers,
        alignmentAnswers,
        strengthAnswers,
        topEightValues,
        comparisonAnswers
      })
    );
    setSummaryStep(null);
    setStep(5);
  }

  function continueFromSummary() {
    if (summaryStep === 1) {
      setStep(2);
      setComparisonIndex(0);
      setSummaryStep(null);
      return;
    }

    if (summaryStep === 2) {
      setStep(3);
      setSummaryStep(null);
      return;
    }

    if (summaryStep === 3) {
      setStep(4);
      setSummaryStep(null);
      return;
    }

    if (summaryStep === 4) {
      showResults();
    }
  }

  function resetAssessment() {
    setStep(1);
    setSummaryStep(null);
    setImportanceAnswers({});
    setAlignmentAnswers({});
    setStrengthAnswers({});
    setComparisonAnswers({});
    setComparisonIndex(0);
    setResult(null);
  }

  return (
    <div className="grid gap-6">
      <Link
        href="/"
        className="w-fit text-sm font-medium text-ink-900/50 transition hover:text-ink-900/70"
      >
        Back to Moksha
      </Link>

      <section className="surface px-5 py-8 sm:px-8 sm:py-10">
        <p className="eyebrow">Values and alignment</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
          <div>
            <h1 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-6xl">
              Human Values & Inner Alignment Assessment
            </h1>
            <p className="mt-5 max-w-reading text-lg leading-8 text-ink-900/62">
              A quiet reflection to see what matters most, compare your top
              values, and notice what your life may be asking you to support
              more fully.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-sage-700/10 bg-sand-50/85 p-5 text-[1rem] leading-8 text-ink-900/66">
            <p>
              This is not a diagnosis or a label. Answer from your present
              experience, with honesty and kindness toward yourself.
            </p>
          </div>
        </div>
      </section>

      <StepIndicator step={step} />

      {summaryStep === 1 ? (
        <SummaryCard
          text="You identified the values that feel important to you at this stage of life. This shows your conscious sense of what matters."
          nextText="Next, you will choose between your top values. This helps reveal your real value hierarchy when two good things compete for attention."
          buttonLabel="Continue to comparisons"
          onBack={goBack}
          onContinue={continueFromSummary}
          onReset={resetAssessment}
        />
      ) : null}

      {summaryStep === 2 ? (
        <SummaryCard
          text="You compared your top values against each other. This creates a clearer ranking because real life often asks us to choose between values we care about."
          nextText="Next, you will reflect on how much these values are actually expressed in your current life."
          buttonLabel="Continue to alignment"
          onBack={goBack}
          onContinue={continueFromSummary}
          onReset={resetAssessment}
        />
      ) : null}

      {summaryStep === 3 ? (
        <SummaryCard
          text="You looked at the difference between what matters to you and what is currently being lived. This helps reveal alignment gaps in a gentle and practical way."
          nextText="Next, you will look at your natural strengths - the qualities that may already support your growth."
          buttonLabel="Continue to strengths"
          onBack={goBack}
          onContinue={continueFromSummary}
          onReset={resetAssessment}
        />
      ) : null}

      {summaryStep === 4 ? (
        <SummaryCard
          text="You identified the strengths that already support you. These strengths can become the bridge between your values and your daily life."
          nextText="Next, you will see your values ranking, alignment score, strengths, possible tensions, and suggested Moksha Keys."
          buttonLabel="Show my results"
          onBack={goBack}
          onContinue={continueFromSummary}
          onReset={resetAssessment}
        />
      ) : null}

      {!summaryStep && step < 5 ? (
      <form
        className="grid gap-6"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {step === 1 ? (
          <StepSection
            eyebrow="Step 1"
            title="Initial Value Scan"
            intro="How important is this value to you right now?"
            helper="This first step is a broad scan. It helps you notice which values naturally resonate with you before we ask you to make deeper choices."
          >
            {values.map((value) => (
              <QuestionCard
                key={value}
                title={value}
                description={valueDescriptions[value]}
              >
                <RatingScale
                  labels={importanceLabels}
                  name={getValueId(value, "importance")}
                  value={importanceAnswers[value]}
                  onChange={(score) => handleInitialAnswer(value, score)}
                />
              </QuestionCard>
            ))}
          </StepSection>
        ) : null}

        {step === 2 && currentComparison ? (
          <StepSection
            eyebrow="Step 2"
            title="Pairwise Value Comparison"
            intro="Which matters more to you right now? Choose the one that feels more central in this season of life."
            helper="Here you are not saying one value is good and the other is bad. You are simply noticing which one feels more central right now when you must choose."
          >
            <div className="rounded-[1.5rem] border border-sage-700/10 bg-sand-50/85 p-4 sm:p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">
                Comparison {comparisonIndex + 1} of {comparisons.length}
              </p>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {currentComparison.map((value) => {
                  const selected = comparisonAnswers[comparisonIndex] === value;

                  return (
                    <button
                      key={value}
                      type="button"
                      onClick={() => handlePairwiseChoice(value)}
                      className={`min-h-44 rounded-[1.5rem] border p-5 text-left transition ${
                        selected
                          ? "border-sage-500/50 bg-sage-100/80 shadow-soft"
                          : "border-sage-700/10 bg-white/80 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <span className="block text-xl font-semibold text-ink-900">
                        {value}
                      </span>
                      <span className="mt-3 block text-sm leading-7 text-ink-900/64">
                        {valueDescriptions[value]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </StepSection>
        ) : null}

        {step === 3 ? (
          <StepSection
            eyebrow="Step 3"
            title="Lived Alignment"
            intro="How much is this value actually expressed in your current life?"
            helper="This step compares your values with your present lifestyle. It is not about judgment. It simply shows where your life may already be aligned and where a value may need more space."
          >
            {values.map((value) => (
              <QuestionCard key={value} title={value}>
                <RatingScale
                  labels={alignmentLabels}
                  name={getValueId(value, "alignment")}
                  value={alignmentAnswers[value]}
                  onChange={(score) =>
                    setAlignmentAnswers((current) => ({
                      ...current,
                      [value]: score
                    }))
                  }
                />
              </QuestionCard>
            ))}
          </StepSection>
        ) : null}

        {step === 4 ? (
          <StepSection
            eyebrow="Step 4"
            title="Character Strengths Scan"
            intro="How naturally does this strength show up in you?"
            helper="This step looks at the qualities that naturally show up in you. The goal is to build from strength, not to fix yourself harshly."
          >
            {strengths.map((strength) => (
              <QuestionCard
                key={strength}
                title={strength}
                description={strengthDescriptions[strength]}
              >
                <RatingScale
                  labels={strengthLabels}
                  name={getValueId(strength, "strength")}
                  value={strengthAnswers[strength]}
                  onChange={(score) =>
                    setStrengthAnswers((current) => ({
                      ...current,
                      [strength]: score
                    }))
                  }
                />
              </QuestionCard>
            ))}
          </StepSection>
        ) : null}

        {step < 5 ? (
          <section className="surface flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-ink-900/58">
              {step === 1
                ? `${Object.keys(importanceAnswers).length} of ${values.length} values rated`
                : null}
              {step === 2
                ? `${Object.keys(comparisonAnswers).length} of ${comparisons.length} comparisons answered`
                : null}
              {step === 3
                ? `${Object.keys(alignmentAnswers).length} of ${values.length} alignment ratings complete`
                : null}
              {step === 4
                ? `${Object.keys(strengthAnswers).length} of ${strengths.length} strengths rated`
                : null}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={resetAssessment}
                className="btn-secondary"
              >
                Reset Assessment
              </button>
              {step > 1 ? (
                <button type="button" onClick={goBack} className="btn-secondary">
                  Back
                </button>
              ) : null}
              {step === 2 ? (
                <button
                  type="button"
                  onClick={goToNextComparison}
                  disabled={!comparisonAnswers[comparisonIndex]}
                  className="btn-primary"
                >
                  Next
                </button>
              ) : null}
              {step === 1 || step === 3 ? (
                <button
                  type="button"
                  onClick={goToNextStep}
                  disabled={
                    (step === 1 && !initialScanComplete) ||
                    (step === 3 && !alignmentComplete)
                  }
                  className="btn-primary"
                >
                  Next
                </button>
              ) : null}
              {step === 4 ? (
                <button
                  type="button"
                  onClick={calculateResults}
                  disabled={!strengthsComplete}
                  className="btn-primary"
                >
                  Calculate Results
                </button>
              ) : null}
            </div>
          </section>
        ) : null}
      </form>
      ) : null}

      {step === 5 && result ? (
        <section className="surface grid gap-5 px-5 py-8 sm:px-8 sm:py-10">
          <div>
            <p className="eyebrow">Step 5 of 5</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-5xl">
              Your results
            </h2>
            <p className="mt-4 max-w-reading text-[1rem] leading-8 text-ink-900/62">
              These results are meant to support reflection, not self-judgment.
              Let them point gently toward one or two honest next steps.
            </p>
            <div className="mt-5 max-w-reading rounded-[1.5rem] border border-sage-700/10 bg-sand-50/85 p-5 text-[1rem] leading-8 text-ink-900/66">
              <h3 className="font-serif text-2xl leading-tight tracking-[-0.04em] text-ink-900">
                What this assessment shows
              </h3>
              <p className="mt-3">
                This assessment does not define you permanently. It reflects
                your present life orientation. It shows what matters to you,
                what you are actually living, which strengths support you, and
                which areas may be asking for more attention.
              </p>
            </div>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            <ResultPanel title="Your Top 5 Core Values">
              <div className="grid gap-3">
                {result.topValues.map((value, index) => (
                  <article key={value.name} className="rounded-2xl bg-sand-50/85 p-4">
                    <p className="text-sm font-semibold text-sage-700">
                      {index + 1}. {value.name}
                    </p>
                    <p className="mt-1 text-sm leading-6">
                      {valueDescriptions[value.name]}
                    </p>
                  </article>
                ))}
              </div>
            </ResultPanel>

            <ResultPanel title="Your Alignment Score">
              <p className="font-serif text-6xl tracking-[-0.05em] text-ink-900">
                {result.alignmentScore}
                <span className="text-2xl text-ink-900/45">%</span>
              </p>
              <p className="mt-3 text-lg font-semibold text-sage-700">
                {result.interpretation}
              </p>
              <p className="mt-3">
                This compares the lived expression of your top five values with
                how important those same values are to you. It is a gentle
                snapshot, not a diagnosis.
              </p>
              <p className="mt-3 rounded-2xl bg-sand-50/85 p-4 text-sm leading-7">
                A lower alignment score is not a failure. It may simply mean
                that your life is in transition, or that important values need
                more support in your daily choices.
              </p>
            </ResultPanel>

            <ResultPanel title="Your Full Values Ranking">
              <ol className="grid gap-2">
                {result.rankedValues.map((value, index) => (
                  <li
                    key={value.name}
                    className="flex flex-col gap-1 rounded-2xl bg-sand-50/75 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <span className="text-sm font-medium text-ink-900">
                      {index + 1}. {value.name}
                    </span>
                    <span className="text-sm font-semibold text-sage-700">
                      {value.comparisonPoints !== undefined
                        ? `${value.comparisonPoints} comparison points`
                        : `${value.importanceScore}/5 initial rating`}
                    </span>
                  </li>
                ))}
              </ol>
            </ResultPanel>

            <ResultPanel title="Your Strongest Character Strengths">
              <ol className="grid gap-2">
                {result.strongestStrengths.map((strength, index) => (
                  <li
                    key={strength.name}
                    className="rounded-2xl bg-sand-50/75 px-4 py-3"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium text-ink-900">
                        {index + 1}. {strength.name}
                      </span>
                      <span className="text-sm font-semibold text-sage-700">
                        {strength.score}/5
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-6 text-ink-900/58">
                      {strengthDescriptions[strength.name]}
                    </p>
                  </li>
                ))}
              </ol>
            </ResultPanel>

            <ResultPanel title="Values Asking for More Space" className="lg:col-span-2">
              <p>
                These are not weaknesses. They may simply be values that matter
                deeply to you but are not yet fully supported by your current
                lifestyle.
              </p>
              {result.highGapValues.length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {result.highGapValues.map((value) => (
                    <article key={value.name} className="rounded-2xl bg-sand-50/85 p-4">
                      <p className="font-semibold text-ink-900">{value.name}</p>
                      <p className="mt-1 text-sm leading-6">
                        Importance {value.importanceScore}/5, lived expression{" "}
                        {value.alignmentScore}/5
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <p className="mt-4 rounded-2xl bg-sand-50/85 p-4">
                  No major gaps appeared by this scoring method. You may still
                  choose one value to support more intentionally.
                </p>
              )}
            </ResultPanel>

            {result.tensions.length > 0 ? (
              <ResultPanel title="Possible Inner Tensions" className="lg:col-span-2">
                <p>
                  You may not need to choose one forever. This may simply show a
                  present life tension asking for wiser balance.
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {result.tensions.map(([first, second]) => (
                    <article
                      key={`${first}-${second}`}
                      className="rounded-2xl bg-sand-50/85 p-4"
                    >
                      <p className="font-semibold text-ink-900">
                        {first} and {second}
                      </p>
                      <p className="mt-1 text-sm leading-6">
                        Both appear highly important right now, which may ask
                        for a more thoughtful balance.
                      </p>
                    </article>
                  ))}
                </div>
              </ResultPanel>
            ) : null}

            <ResultPanel title="Recommended Moksha Keys" className="lg:col-span-2">
              <div className="grid gap-3 md:grid-cols-2">
                {result.recommendedKeys.map((key) => (
                  <article key={key} className="rounded-2xl bg-sand-50/85 p-4">
                    <p className="font-semibold text-sage-700">{key}</p>
                    <p className="mt-2 text-sm leading-7">
                      {keyExplanations[key]}
                    </p>
                  </article>
                ))}
              </div>
            </ResultPanel>

            <ResultPanel title="Gentle Next Steps" className="lg:col-span-2">
              <ul className="grid gap-2">
                {nextSteps.map((stepText) => (
                  <li
                    key={stepText}
                    className="rounded-2xl bg-sand-50/75 px-4 py-3"
                  >
                    {stepText}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={resetAssessment}
                className="btn-secondary mt-5"
              >
                Reset Assessment
              </button>
            </ResultPanel>
          </div>
        </section>
      ) : null}
    </div>
  );
}
