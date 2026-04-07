import Link from "next/link";

import { stages } from "./content";

export const metadata = {
  title: "Sadhana Panchakam – A Guided Path | Five Keys to Inner Freedom"
};

export default function SadhanaPanchakamPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/guided-path"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Guided Path
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Guided Path
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Sadhana Panchakam – A Guided Path
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            This is a traditional forty-step guide attributed to Adi
            Shankaracharya. It does not offer a way to become whole.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            It helps prepare the mind, clarify understanding, and remove what
            hides your already present nature.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/guided-path/sadhana-panchakam/preparation"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Start the Journey
            </Link>
            <Link
              href="/guided-path/sadhana-panchakam/full-text"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Full Text
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-3">
            {stages.map((stage) => (
              <Link
                key={stage.slug}
                href={`/guided-path/sadhana-panchakam/${stage.slug}`}
                className="flex items-start justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <div>
                  <p className="text-sm text-stone-500">{stage.subtitle}</p>
                  <h2 className="mt-1 text-lg font-semibold text-stone-900">
                    Stage {stages.findIndex((item) => item.slug === stage.slug) + 1}:{" "}
                    {stage.title}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-stone-600">
                    {stage.intro}
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
