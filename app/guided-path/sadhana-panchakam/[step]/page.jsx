import Link from "next/link";
import { notFound } from "next/navigation";

import {
  getNextStep,
  getPreviousStep,
  getStageForStep,
  getStepBySlug,
  steps
} from "../content";

export function generateStaticParams() {
  return steps.map((step) => ({ step: step.slug }));
}

export function generateMetadata({ params }) {
  const step = getStepBySlug(params.step);

  if (!step) {
    return {
      title: "Guided Path",
      description:
        "Go deeper through slower, more traditional study paths that support the Five Keys."
    };
  }

  return {
    title: `Step ${step.number}: ${step.title} - Sadhana Panchakam`,
    description: step.explanation[0]
  };
}

export default function StepPage({ params }) {
  const step = getStepBySlug(params.step);

  if (!step) {
    notFound();
  }

  const stage = getStageForStep(step.number);
  const previousStep = getPreviousStep(step.number);
  const nextStep = getNextStep(step.number);

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href={`/guided-path/sadhana-panchakam/${stage.slug}`}
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to {stage.title}
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Step {step.number}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {step.title}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-stone-500">
            {step.sanskrit}
          </p>
          <div className="mt-6 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            {step.explanation.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Practice
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            {step.practice}
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Related Keys
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {step.keys.map((key) => (
              <span
                key={key}
                className="rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 ring-1 ring-stone-200"
              >
                {key}
              </span>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Continue
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/guided-path/sadhana-panchakam"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Sadhana Panchakam
            </Link>
            <Link
              href={`/guided-path/sadhana-panchakam/${stage.slug}`}
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Back to {stage.title}
            </Link>
            {previousStep ? (
              <Link
                href={`/guided-path/sadhana-panchakam/${previousStep.slug}`}
                className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
              >
                ← Step {previousStep.number}
              </Link>
            ) : null}
            {nextStep ? (
              <Link
                href={`/guided-path/sadhana-panchakam/${nextStep.slug}`}
                className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Step {nextStep.number} →
              </Link>
            ) : null}
          </div>
        </section>
      </div>
    </main>
  );
}
