"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import BridgeCard from "@/components/BridgeCard";
import PathDashboard from "@/components/PathDashboard";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  assessmentQuestions,
  calculateAssessmentResult,
  pendingAssessmentStorageKey,
  toDatabaseResult
} from "@/lib/assessment";

export default function AssessmentExperience({ user, latestInsight }) {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [showResult, setShowResult] = useState(false);
  const router = useRouter();

  const currentQuestion = assessmentQuestions[step];
  const selectedValue = answers[currentQuestion?.id];
  const totalQuestions = assessmentQuestions.length;

  const progress = useMemo(
    () => Math.round(((step + 1) / totalQuestions) * 100),
    [step, totalQuestions]
  );

  useEffect(() => {
    if (!result) return;

    setShowResult(false);
    const timeoutId = window.setTimeout(() => {
      setShowResult(true);
    }, 140);

    return () => window.clearTimeout(timeoutId);
  }, [result]);

  function begin() {
    setStarted(true);
    setResult(null);
  }

  function handleSelect(questionId, value) {
    setAnswers((current) => ({
      ...current,
      [questionId]: Number(value)
    }));
  }

  function goNext() {
    if (step < totalQuestions - 1) {
      setStep((current) => current + 1);
    }
  }

  function goPrevious() {
    if (step > 0) {
      setStep((current) => current - 1);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const assessmentResult = {
      ...calculateAssessmentResult(answers),
      createdAt: new Date().toISOString()
    };
    setResult(assessmentResult);
    setSaveMessage("");

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        pendingAssessmentStorageKey,
        JSON.stringify(assessmentResult)
      );
    }

    if (user) {
      const supabase = createBrowserSupabaseClient();
      const { error } = await supabase.from("assessment_results").insert({
        user_id: user.id,
        ...toDatabaseResult(assessmentResult)
      });

      if (!error && typeof window !== "undefined") {
        window.localStorage.removeItem(pendingAssessmentStorageKey);
        setSaveMessage("Your path has been saved to your account.");
      }
    }

    router.refresh();
  }

  if (!started) {
    return <BridgeCard onBegin={begin} />;
  }

  return (
    <div className="grid gap-6">
      <section className="surface px-5 py-6 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Find Your Next Step</p>
            <h1 className="mt-3 font-serif text-4xl tracking-[-0.04em] sm:text-5xl">
              A step-by-step reflection
            </h1>
          </div>
          <div className="min-w-[11rem] rounded-full border border-sage-700/10 bg-white/70 px-4 py-3 text-sm text-ink-900/60">
            Question {step + 1} of {totalQuestions}
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-sage-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sage-300 to-sage-700 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <fieldset className="rounded-[2rem] border border-sage-700/10 bg-white/70 p-5 sm:p-7">
            <legend className="w-full text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink-900">
              {currentQuestion.prompt}
            </legend>

            <div className="mt-6 grid gap-3">
              {currentQuestion.options.map((option, index) => {
                const value = index + 1;
                const selected = selectedValue === value;

                return (
                  <label
                    key={option}
                    className={`cursor-pointer rounded-[1.5rem] border px-4 py-4 transition ${
                      selected
                        ? "border-sage-500/35 bg-sage-100/70"
                        : "border-sage-700/10 bg-white/65 hover:bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={value}
                      checked={selected}
                      onChange={() => handleSelect(currentQuestion.id, value)}
                      className="sr-only"
                    />
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sand-100 text-xs font-semibold text-sage-700">
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="text-[1.02rem] leading-8 text-ink-900/70">
                        {option}
                      </span>
                    </div>
                  </label>
                );
              })}
            </div>
          </fieldset>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={goPrevious}
              disabled={step === 0}
              className="btn-secondary disabled:cursor-not-allowed disabled:opacity-40"
            >
              Previous
            </button>

            {step < totalQuestions - 1 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!selectedValue}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={Object.keys(answers).length !== totalQuestions}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-40"
              >
                See Your Path
              </button>
            )}
          </div>
        </form>
      </section>

      {result ? (
        <div>
          {saveMessage ? (
            <div className="surface mb-4 px-5 py-4 text-sm text-sage-700 reveal-soft">
              Your path has been saved.
            </div>
          ) : null}
          <div className={showResult ? "reveal-soft" : "opacity-0"}>
            <PathDashboard
              result={result}
              showSavePrompt
              user={user}
              latestInsight={latestInsight}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
