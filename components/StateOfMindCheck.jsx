"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const questions = [
  {
    id: "energy",
    label: "How does your energy feel right now?",
    options: [
      { value: "tamas", label: "Low / heavy" },
      { value: "rajas", label: "Restless / high" },
      { value: "sattva", label: "Calm / steady" }
    ]
  },
  {
    id: "tendency",
    label: "What is your current tendency?",
    options: [
      { value: "tamas", label: "Avoiding / delaying" },
      { value: "rajas", label: "Doing too many things" },
      { value: "sattva", label: "Focused / present" }
    ]
  },
  {
    id: "mind",
    label: "How is your mind?",
    options: [
      { value: "tamas", label: "Foggy / dull" },
      { value: "rajas", label: "Busy / overthinking" },
      { value: "sattva", label: "Clear / quiet" }
    ]
  }
];

const guidance = {
  tamas: {
    title: "Tamas",
    body: "Start small. Move. Do one simple task.",
    nextTitle: "Responsibility",
    nextBody:
      "When the mind is dull or resistant, responsibility helps bring movement and order.",
    nextHref: "/responsibility",
    nextLabel: "Go to Responsibility"
  },
  rajas: {
    title: "Rajas",
    body: "Slow down. Focus on one thing. Reduce input.",
    nextTitle: "Acceptance",
    nextBody:
      "When the mind is restless, acceptance helps reduce inner pressure and resistance.",
    nextHref: "/acceptance",
    nextLabel: "Go to Acceptance"
  },
  sattva: {
    title: "Sattva",
    body: "Use this clarity. Reflect or stay present.",
    nextTitle: "Clarity",
    nextBody:
      "When the mind is clear, clarity can deepen into understanding.",
    nextHref: "/clarity",
    nextLabel: "Go to Clarity"
  }
};

export default function StateOfMindCheck() {
  const [answers, setAnswers] = useState({});

  const result = useMemo(() => {
    const values = Object.values(answers);

    if (values.length !== questions.length) {
      return null;
    }

    const counts = values.reduce(
      (acc, value) => ({
        ...acc,
        [value]: acc[value] + 1
      }),
      { tamas: 0, rajas: 0, sattva: 0 }
    );

    if (counts.tamas >= counts.rajas && counts.tamas >= counts.sattva) {
      return guidance.tamas;
    }

    if (counts.rajas >= counts.sattva) {
      return guidance.rajas;
    }

    return guidance.sattva;
  }, [answers]);

  return (
    <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
        Check Your State of Mind
      </p>

      <div className="mt-5 space-y-6">
        {questions.map((question) => (
          <fieldset key={question.id} className="space-y-3">
            <legend className="text-base font-medium text-stone-900">
              {question.label}
            </legend>
            <div className="grid gap-3 sm:grid-cols-3">
              {question.options.map((option) => {
                const checked = answers[question.id] === option.value;

                return (
                  <label
                    key={option.label}
                    className={`rounded-[1.25rem] border px-4 py-3 text-sm transition ${
                      checked
                        ? "border-stone-900 bg-stone-900 text-stone-50"
                        : "border-stone-300 bg-white text-stone-700 hover:bg-stone-100"
                    }`}
                  >
                    <input
                      type="radio"
                      name={question.id}
                      value={option.value}
                      checked={checked}
                      onChange={() =>
                        setAnswers((current) => ({
                          ...current,
                          [question.id]: option.value
                        }))
                      }
                      className="sr-only"
                    />
                    {option.label}
                  </label>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>

      {result ? (
        <div className="mt-6 rounded-[1.5rem] bg-white px-5 py-5 ring-1 ring-stone-200">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500">
            Result
          </p>
          <h3 className="mt-2 text-xl font-semibold text-stone-900">
            {result.title}
          </h3>
          <p className="mt-2 text-base leading-8 text-stone-600">{result.body}</p>

          <div className="mt-5 rounded-[1.25rem] bg-stone-50 px-4 py-4 ring-1 ring-stone-200">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-stone-500">
              Recommended Next Step
            </p>
            <h4 className="mt-2 text-base font-semibold text-stone-900">
              {result.nextTitle}
            </h4>
            <p className="mt-2 text-sm leading-7 text-stone-600">
              {result.nextBody}
            </p>
            <div className="mt-4">
              <Link
                href={result.nextHref}
                className="inline-flex rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                {result.nextLabel}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
