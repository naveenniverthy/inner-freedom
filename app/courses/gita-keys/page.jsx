import Link from "next/link";
import { courseTitle, sections } from "./courseData";

export const metadata = {
  title: "Bhagavad Gita Course | Five Keys to Inner Freedom",
  description:
    "Study selected Bhagavad Gita verses through the Five Keys of Moksha: clarity, responsibility, discipline, acceptance, and offering."
};

const descriptions = {
  clarity:
    "Begin with the Self, reality, non-doership, and the steady wisdom that resolves confusion at its root.",
  responsibility:
    "Move into dharma: right action, one’s role, obligation, leadership, and doing what is right without leaning on results for inner stability.",
  discipline:
    "Train the mind through sense mastery, repetition, meditation, and the practical steadiness needed for clear living.",
  offering:
    "Learn Īśvara Arpaṇa Buddhi: offer action before doing it, lighten doership, and let everyday work become worship.",
  acceptance:
    "Learn Īśvara Prasāda Buddhi: receive results with steadiness, trust in the larger order, and growing emotional maturity."
};

export default function GitaKeysPage() {
  const firstLesson = `/courses/gita-keys/${sections[0].key}/${sections[0].lessons[0].slug}`;

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-12 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
            Course
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {courseTitle}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
            This course presents the Bhagavad Gita through five keys: Clarity,
            Responsibility, Discipline, Offering, and Acceptance. Each section
            gathers verses around a living theme, so the Gita can be studied as
            a practical map for inner growth.
          </p>
          <div className="mt-6 max-w-3xl rounded-[1.25rem] bg-stone-50 px-5 py-4 ring-1 ring-stone-200">
            <p className="text-base leading-8 text-stone-600">
              The Bhagavad Gita shows how inner freedom is lived in the middle
              of action. This course uses the Five Keys to connect Vedanta,
              dharma, karma yoga, and self-knowledge in a clear sequence.
            </p>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={firstLesson}
              className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
            >
              Start Course
            </Link>
            <Link
              href="/five-keys"
              className="rounded-xl bg-stone-100 px-5 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
            >
              Back to Five Keys
            </Link>
            <Link
              href="/guided-path"
              className="rounded-xl bg-stone-100 px-5 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
            >
              Back to Guided Path
            </Link>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <article
              key={section.key}
              className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-stone-200"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-400">
                {section.lessons.length} lessons
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-stone-900">
                {section.title}
              </h2>
              <p className="mt-1 text-sm text-stone-500">{section.subtitle}</p>
              <p className="mt-4 flex-1 text-sm leading-7 text-stone-600">
                {descriptions[section.key]}
              </p>
              <Link
                href={`/courses/gita-keys/${section.key}`}
                className="mt-6 w-fit rounded-xl bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
              >
                Open Section
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
