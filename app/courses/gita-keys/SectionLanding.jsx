import Link from "next/link";
import { getSection } from "./courseData";

const intros = {
  clarity:
    "Clarity gathers the Gita’s teachings on the Self, the nature of reality, non-doership, and the vision of oneness.",
  responsibility:
    "Responsibility gathers the Gita’s teachings on dharma, right action, role, obligation, leadership, and alignment with life’s order.",
  discipline:
    "Discipline gathers the Gita’s teachings on sense mastery, steadiness, meditation, practice, and training the mind."
};

export default function SectionLanding({ sectionKey }) {
  const section = getSection(sectionKey);

  if (!section) {
    return null;
  }

  const firstLesson = section.lessons[0];

  return (
    <main className="min-h-screen bg-stone-50 px-4 py-12 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200 sm:p-10">
          <Link
            href="/courses/gita-keys"
            className="text-sm font-medium text-stone-500 transition hover:text-stone-700"
          >
            Back to Course Home
          </Link>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.22em] text-stone-500">
            Bhagavad Gita — Five Keys
          </p>
          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {section.title}
          </h1>
          <p className="mt-2 text-lg text-stone-500">{section.subtitle}</p>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-600">
            {intros[section.key]}
          </p>
          <p className="mt-5 text-sm font-medium text-stone-500">
            {section.lessons.length} lessons
          </p>
          <Link
            href={`/courses/gita-keys/${section.key}/${firstLesson.slug}`}
            className="mt-7 inline-flex rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
          >
            Start Section
          </Link>
        </section>

        <section className="grid gap-4">
          {section.lessons.map((lesson, index) => (
            <Link
              key={lesson.slug}
              href={`/courses/gita-keys/${section.key}/${lesson.slug}`}
              className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-stone-100 text-sm font-medium text-stone-600">
                  {index + 1}
                </span>
                <span>
                  <span className="block text-lg font-semibold text-stone-900">
                    {lesson.title}
                  </span>
                  <span className="mt-1 block text-sm text-stone-500">
                    Gita {lesson.verse}
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
