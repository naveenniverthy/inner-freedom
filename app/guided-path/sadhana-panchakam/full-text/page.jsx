import Link from "next/link";

import { fullText } from "../content";

export const metadata = {
  title: "Full Text of Sadhana Panchakam",
  description:
    "Read the full text of Sadhana Panchakam in one quiet reference page."
};

export default function FullTextPage() {
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
            Reference
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Full Text of Sadhana Panchakam
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            This page is for reference and deeper study. It supports the guided
            path, but it is quieter than the main learning flow.
          </p>
        </section>

        {fullText.map((verse) => (
          <section
            key={verse.number}
            className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Verse {verse.number}
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              {verse.transliteration}
            </p>
          </section>
        ))}
      </div>
    </main>
  );
}
