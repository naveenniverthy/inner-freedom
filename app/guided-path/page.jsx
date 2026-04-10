import Link from "next/link";

export const metadata = {
  title: "Guided Path",
  description:
    "Go deeper through slower, more traditional study paths that support the Five Keys."
};

export default function GuidedPathPage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Home
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Guided Path
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Guided paths for deeper practice
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            The Five Keys remain the main structure of the site. Guided Path is
            a deeper layer for moving more slowly through traditional teachings.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <Link
            href="/guided-path/sadhana-panchakam"
            className="block rounded-[1.75rem] bg-stone-50 px-6 py-6 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              40 Steps from Sadhana Panchakam
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-900">
              Sadhana Panchakam
            </h2>
            <p className="mt-3 text-base leading-8 text-stone-600">
              A traditional 40-step path from Adi Shankaracharya, presented as
              a calm guided journey through preparation, inquiry,
              assimilation, and freedom.
            </p>
          </Link>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <Link
            href="/courses/aparokshanubhuti"
            className="block rounded-[1.75rem] bg-stone-50 px-6 py-6 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
          >
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              45-Day Study from Aparokshanubhuti
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-stone-900">
              Aparokshanubhuti
            </h2>
            <p className="mt-3 text-base leading-8 text-stone-600">
              A calm 45-day course in self-knowledge, moving from preparation
              and inquiry to clear seeing, assimilation, and living freedom.
            </p>
          </Link>
        </section>
      </div>
    </main>
  );
}
