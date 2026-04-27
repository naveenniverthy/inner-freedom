"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import AssessmentPdfReport from "./AssessmentPdfReport";
import { assessmentQuestions, assessmentSections } from "./assessmentData";
import {
  assessmentStorageKey,
  calculateInnerDirectionResult,
  getAnsweredCount
} from "./scoring";

const seekingCopy =
  "You may think you are looking for better situations, better control, or better outcomes. But underneath that, you are seeking steadiness, clarity, and a freedom that does not depend completely on external conditions.";

const reminderCopy =
  "You are not behind. You are not lost. You are seeing yourself more honestly. That itself is already a movement toward inner freedom.";

function updateSelection(currentSelections = [], choice) {
  if (currentSelections.includes(choice)) {
    return currentSelections.filter((selected) => selected !== choice);
  }

  if (currentSelections.length < 2) {
    return [...currentSelections, choice];
  }

  return [currentSelections[0], choice];
}

function ResultCard({ eyebrow, title, children, className = "" }) {
  return (
    <article
      className={`rounded-[1.75rem] border border-sage-700/10 bg-white/72 p-5 sm:p-6 ${className}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      {title ? (
        <h3 className="mt-3 font-serif text-3xl leading-tight tracking-[-0.04em] text-ink-900">
          {title}
        </h3>
      ) : null}
      <div className="mt-4 text-[1rem] leading-8 text-ink-900/68">
        {children}
      </div>
    </article>
  );
}

export default function AssessmentClient() {
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  useEffect(() => {
    const saved = window.localStorage.getItem(assessmentStorageKey);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved);
      if (parsed?.answers && parsed?.result) {
        setAnswers(parsed.answers);
        setResult(parsed.result);
      }
    } catch {
      window.localStorage.removeItem(assessmentStorageKey);
    }
  }, []);

  const answeredCount = useMemo(() => getAnsweredCount(answers), [answers]);
  const complete = answeredCount === assessmentQuestions.length;

  function handleSelect(questionId, choice) {
    setAnswers((current) => ({
      ...current,
      [questionId]: updateSelection(current[questionId], choice)
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!complete) return;

    const nextResult = calculateInnerDirectionResult(answers);
    setResult(nextResult);
    window.localStorage.setItem(
      assessmentStorageKey,
      JSON.stringify({ answers, result: nextResult })
    );
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleRetake() {
    setAnswers({});
    setResult(null);
    window.localStorage.removeItem(assessmentStorageKey);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrintReport() {
    const originalTitle = document.title;
    const restoreTitle = () => {
      document.title = originalTitle;
      window.removeEventListener("afterprint", restoreTitle);
    };

    document.title = "moksha-keys-inner-direction-report";
    window.addEventListener("afterprint", restoreTitle);
    window.print();
    window.setTimeout(restoreTitle, 1000);
  }

  if (result) {
    const { seekerType, keys, strongestKey, weakestKey } = result;

    return (
      <>
      <div className="no-print grid gap-6">
        <Link
          href="/why"
          className="w-fit text-sm font-medium text-ink-900/50 transition hover:text-ink-900/70"
        >
          Back to Start Here
        </Link>
        <section className="surface px-5 py-8 sm:px-8 sm:py-10">
          <p className="eyebrow">Your Inner Direction</p>
          <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h1 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-6xl">
                {seekerType.title}
              </h1>
              <p className="mt-5 max-w-reading text-lg leading-8 text-ink-900/62">
                This is not a label. It is a reflection of where you are right now.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-sage-700/10 bg-sand-50/85 p-5">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-sage-500">
                Normalized score
              </p>
              <p className="mt-2 font-serif text-5xl tracking-[-0.05em] text-ink-900">
                {result.normalizedTotal}
                <span className="text-2xl text-ink-900/45"> / 160</span>
              </p>
              <div className="mt-4 grid gap-2 text-sm text-ink-900/62 sm:grid-cols-2">
                <p>
                  Strongest:{" "}
                  <span className="font-semibold text-sage-700">
                    {strongestKey.name}
                  </span>
                </p>
                <p>
                  Weakest:{" "}
                  <span className="font-semibold text-sage-700">
                    {weakestKey.name}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <ResultCard
            eyebrow="Your Current State"
            title={seekerType.title}
            className="lg:col-span-2"
          >
            <p>{seekerType.description}</p>
          </ResultCard>

          <ResultCard eyebrow="What This Means" title="Main need">
            <p>{seekerType.mainNeed}</p>
          </ResultCard>

          <ResultCard eyebrow="What You Are Really Seeking" title="Steadiness and clarity">
            <p>{seekingCopy}</p>
          </ResultCard>

          <ResultCard
            eyebrow="Your Inner Balance"
            title="Five Keys balance"
            className="lg:col-span-2"
          >
            <div className="grid gap-4">
              {keys.map((key) => (
                <div key={key.name} className="rounded-[1.25rem] bg-sand-50/80 p-4">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-ink-900">{key.name}</p>
                      <p className="mt-1 text-sm leading-6 text-ink-900/55">
                        {key.description}
                      </p>
                    </div>
                    <p className="text-sm font-semibold text-sage-700">
                      {key.percentage}% - {key.level}
                    </p>
                  </div>
                  <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-sage-100">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-sage-300 to-sage-700"
                      style={{ width: `${key.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </ResultCard>

          <ResultCard eyebrow="Your Strongest Key" title={strongestKey.name}>
            <p>
              Your strongest key shows what is already supporting you. This is
              not a reason for pride. It is a strength to use wisely.
            </p>
            <p className="mt-3 font-semibold text-sage-700">
              {strongestKey.percentage}% - {strongestKey.level}
            </p>
          </ResultCard>

          <ResultCard eyebrow="Your Weakest Key" title={weakestKey.name}>
            <p>
              Your weakest key shows where your next work may begin. This is not
              a failure. It is simply the area that needs the most care.
            </p>
            <p className="mt-3 font-semibold text-sage-700">
              {weakestKey.percentage}% - {weakestKey.level}
            </p>
          </ResultCard>

          <ResultCard eyebrow="Your Next Step" title="Begin gently">
            <p>{seekerType.nextStep}</p>
          </ResultCard>

          <ResultCard eyebrow="Suggested Path" title="A natural order">
            <div className="flex flex-wrap items-center gap-2">
              {seekerType.suggestedPath.map((step, index) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full border border-sage-700/10 bg-sage-100/60 px-4 py-2 text-sm font-semibold text-sage-700">
                    {step}
                  </span>
                  {index < seekerType.suggestedPath.length - 1 ? (
                    <span className="text-sage-700/35">/</span>
                  ) : null}
                </div>
              ))}
            </div>
          </ResultCard>

          <ResultCard
            eyebrow="A Simple Reminder"
            title="Nothing is wasted"
            className="lg:col-span-2"
          >
            <p>{reminderCopy}</p>
          </ResultCard>
        </section>

        <section className="surface flex flex-col gap-3 px-5 py-5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-col gap-3 sm:flex-row">
            <button type="button" onClick={handleRetake} className="btn-secondary">
              Retake Assessment
            </button>
            <Link href="/five-keys" className="btn-primary">
              Explore Five Keys
            </Link>
          </div>
          <button
            type="button"
            onClick={handlePrintReport}
            className="btn-secondary"
          >
            Download PDF
          </button>
          <p className="basis-full text-sm leading-6 text-ink-900/52 sm:text-right">
            Your browser will open the print dialog. Choose “Save as PDF.”
          </p>
        </section>
      </div>
      <AssessmentPdfReport result={result} />
      </>
    );
  }

  return (
    <div className="grid gap-6">
      <Link
        href="/why"
        className="w-fit text-sm font-medium text-ink-900/50 transition hover:text-ink-900/70"
      >
        Back to Start Here
      </Link>
      <section className="surface px-5 py-8 sm:px-8 sm:py-10">
        <p className="eyebrow">Inner Direction Assessment</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <h1 className="font-serif text-4xl leading-tight tracking-[-0.04em] text-ink-900 sm:text-6xl">
              Inner Direction Assessment
            </h1>
            <p className="mt-5 max-w-reading text-lg leading-8 text-ink-900/62">
              A quiet reflection to understand your current state, aspiration,
              and next step.
            </p>
          </div>
          <div className="rounded-[1.75rem] border border-sage-700/10 bg-sand-50/85 p-5 text-[1rem] leading-8 text-ink-900/66">
            <p>
              This is not a personality test. It is a mirror. Answer based on
              where you are right now, not where you think you should be.
            </p>
          </div>
        </div>
      </section>

      <section className="surface grid gap-4 px-5 py-6 sm:px-8 sm:py-8 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="eyebrow">How to answer</p>
          <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em]">
            Choose what feels true now
          </h2>
        </div>
        <div className="grid gap-4 text-[1rem] leading-8 text-ink-900/66 sm:grid-cols-2">
          <p>
            For each question, choose the answer that feels most true. If two
            answers feel true, you may select up to two.
          </p>
          <p>
            Your first choice carries full weight. Your second choice carries
            half weight. You can change either choice before submitting.
          </p>
        </div>
      </section>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div className="sticky top-3 z-10 rounded-full border border-sage-700/10 bg-white/85 px-4 py-3 shadow-soft backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-ink-900/65">
              {answeredCount} of {assessmentQuestions.length} answered
            </p>
            <div className="h-2 overflow-hidden rounded-full bg-sage-100 sm:w-72">
              <div
                className="h-full rounded-full bg-gradient-to-r from-sage-300 to-sage-700 transition-all duration-300"
                style={{
                  width: `${(answeredCount / assessmentQuestions.length) * 100}%`
                }}
              />
            </div>
          </div>
        </div>

        {assessmentSections.map((section, sectionIndex) => (
          <section key={section.title} className="surface px-5 py-6 sm:px-8 sm:py-8">
            <div className="border-b border-sage-700/10 pb-5">
              <p className="eyebrow">Section {sectionIndex + 1}</p>
              <h2 className="mt-3 font-serif text-3xl tracking-[-0.04em] sm:text-4xl">
                {section.title}
              </h2>
            </div>

            <div className="mt-6 grid gap-5">
              {section.questions.map((question) => {
                const selected = answers[question.id] ?? [];

                return (
                  <fieldset
                    key={question.id}
                    className="rounded-[1.75rem] border border-sage-700/10 bg-white/70 p-4 sm:p-5"
                  >
                    <legend className="px-1 text-lg font-semibold leading-8 text-ink-900">
                      <span className="text-sage-700/70">{question.id}. </span>
                      {question.prompt}
                    </legend>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {Object.entries(question.choices).map(([choice, label]) => {
                        const selectedIndex = selected.indexOf(choice);
                        const isSelected = selectedIndex !== -1;

                        return (
                          <button
                            type="button"
                            key={choice}
                            onClick={() => handleSelect(question.id, choice)}
                            className={`min-h-[4.5rem] rounded-[1.25rem] border px-4 py-3 text-left transition ${
                              isSelected
                                ? "border-sage-500/40 bg-sage-100/70"
                                : "border-sage-700/10 bg-white/70 hover:bg-white"
                            }`}
                          >
                            <span className="flex items-start gap-3">
                              <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-full bg-sand-100 text-sm font-semibold text-sage-700">
                                {choice}
                              </span>
                              <span className="min-w-0 text-[0.98rem] leading-7 text-ink-900/70">
                                {label}
                                {isSelected ? (
                                  <span className="mt-2 block text-xs font-semibold uppercase tracking-[0.16em] text-sage-700/70">
                                    {selectedIndex === 0 ? "Primary" : "Secondary"}
                                  </span>
                                ) : null}
                              </span>
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>
                );
              })}
            </div>
          </section>
        ))}

        <section className="surface flex flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm leading-6 text-ink-900/58">
            {complete
              ? "You have answered every question. You can now see your reflection."
              : "Answer every question to unlock your result."}
          </p>
          <button type="submit" disabled={!complete} className="btn-primary">
            See Your Inner Direction
          </button>
        </section>
      </form>
    </div>
  );
}
