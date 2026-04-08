import Link from "next/link";

import { getStepsForStage, stages } from "../content";

const stage = stages.find((item) => item.slug === "freedom");
const steps = getStepsForStage("freedom");

export const metadata = {
  title: "Freedom in Sadhana Panchakam",
  description:
    "Move through the closing stage of Sadhana Panchakam and its final steps toward freedom."
};

export default function FreedomPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/guided-path/sadhana-panchakam"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Sadhana Panchakam
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Guided Path
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Stage 4: {stage.title}
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            {stage.subtitle}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {stage.intro}
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-3">
            {steps.map((step) => (
              <Link
                key={step.slug}
                href={`/guided-path/sadhana-panchakam/${step.slug}`}
                className="flex items-start justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <div>
                  <p className="text-sm text-stone-500">Step {step.number}</p>
                  <h2 className="mt-1 text-lg font-semibold text-stone-900">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {step.explanation[0]}
                  </p>
                </div>
                <span className="pt-1 text-sm font-medium text-stone-600">
                  Open
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
