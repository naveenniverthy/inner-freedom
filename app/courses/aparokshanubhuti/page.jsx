import Link from "next/link";

import {
  courseDescription,
  courseIntro,
  courseOrientation,
  courseTitle,
  modules,
  optionalLessons,
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

export default function AparokshanubhutiCoursePage() {
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
            {courseTitle}
          </h1>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              This is a 19-lesson journey through the teaching of
              Aparokshanubhuti.
            </p>
            {courseIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/courses/aparokshanubhuti/day-1"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Start Course
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="max-w-2xl text-base leading-8 text-stone-600">
            {courseOrientation}
          </p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Course Overview
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
            These four modules move from foundation and inquiry to
            understanding and living knowledge.
          </p>
          <div className="mt-6 space-y-3">
            {modules.map((module, index) => (
              <div
                key={module.name}
                className="rounded-[1.25rem] bg-stone-50 px-5 py-4"
              >
                <p className="text-sm text-stone-500">
                  Module {index + 1} • Days {module.startDay}-{module.endDay}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-stone-900">
                  {module.name}
                </h2>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {module.lessonCount} lessons
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Full Lesson Index
          </p>
          <div className="mt-6 space-y-6">
            {modules.map((module, index) => (
              <div key={module.name}>
                <div className="mb-3">
                  <p className="text-sm text-stone-500">
                    Module {index + 1} • Days {module.startDay}-{module.endDay}
                  </p>
                  <h2 className="mt-1 text-xl font-semibold text-stone-900">
                    {module.name}
                  </h2>
                </div>
                <div className="space-y-3">
                  {module.lessons.map((lesson) => (
                    <Link
                      key={lesson.slug}
                      href={`/courses/aparokshanubhuti/${lesson.slug}`}
                      className="flex items-start justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
                    >
                      <div>
                        <p className="text-sm text-stone-500">Day {lesson.day}</p>
                        <h3 className="mt-1 text-lg font-semibold text-stone-900">
                          {lesson.title}
                        </h3>
                      </div>
                      <span className="pt-1 text-sm font-medium text-stone-600">
                        Open
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {optionalLessons.length > 0 ? (
          <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Optional Reference
            </p>
            <div className="mt-4 space-y-3">
              {optionalLessons.map((lesson) => (
                <Link
                  key={lesson.slug}
                  href={`/courses/aparokshanubhuti/${lesson.slug}`}
                  className="flex items-start justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-stone-900">
                      {lesson.title}
                    </h3>
                    {lesson.note ? (
                      <p className="mt-2 text-sm leading-7 text-stone-600">
                        {lesson.note}
                      </p>
                    ) : null}
                  </div>
                  <span className="pt-1 text-sm font-medium text-stone-600">
                    Open
                  </span>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Begin
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
            Move slowly. Read one lesson each day, reflect, and let the
            teaching settle.
          </p>
          <div className="mt-6">
            <Link
              href="/courses/aparokshanubhuti/day-1"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Go to Day 1
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
