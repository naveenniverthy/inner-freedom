import Link from "next/link";

import {
  courseDescription,
  courseIntro,
  courseSubtitle,
  courseTitle,
  lessons,
} from "./content";

export const metadata = {
  title: courseTitle,
  description: courseDescription,
  openGraph: {
    title: courseTitle,
    description: courseDescription,
  },
  twitter: {
    title: courseTitle,
    description: courseDescription,
  },
};

export default function InquiryCoursePage() {
  const firstLesson = lessons[0] ?? null;

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
            {courseSubtitle}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {courseTitle}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            {courseIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {firstLesson ? (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={`/courses/inquiry/${firstLesson.slug}`}
                className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Start Course
              </Link>
              <p className="text-sm text-stone-500">{lessons.length} lessons</p>
            </div>
          ) : null}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Which course should I take?
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-500">
            <p>
              Inquiry into the Self is the primary starting course. It begins
              with your own experience and introduces the vision of Vedanta in
              a gentle, direct way.
            </p>
            <p>
              When this inquiry becomes meaningful, continue with{" "}
              <Link
                href="/courses/foundations"
                className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900"
              >
                Foundations of Self-Knowledge
              </Link>
              , a more structured introduction to Vedanta and freedom.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Lesson Index
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            This {lessons.length}-lesson course moves step by step through a
            direct inquiry into the nature of the self.
          </p>
          <div className="mt-6 space-y-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/courses/inquiry/${lesson.slug}`}
                className="flex items-start justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <div>
                  <p className="text-sm text-stone-500">Lesson {lesson.number}</p>
                  <h2 className="mt-1 text-lg font-semibold text-stone-900">
                    {lesson.title}
                  </h2>
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
