import Link from "next/link";

import { getCourseLinks } from "../course-links";
import { courseMeta, lessons } from "./lessons";

export const metadata = {
  title: courseMeta.title,
  description: courseMeta.description,
};

export default function Page() {
  const morePaths = getCourseLinks().filter((course) => course.href !== "/course");
  const firstLesson = lessons[0];
  const courseIncludes = [
    "20 guided lessons",
    "Sanskrit terms in simple English",
    "Reflection, practice, and daily inquiry",
    "Rooted in Vedanta",
  ];

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
            {courseMeta.subtitle}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {courseMeta.title}
          </h1>
          <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            {courseMeta.duration}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            These are the 20 jnana values from the Bhagavad Gita. In Vedanta,
            they are the qualities that prepare the mind for Self-knowledge and
            support a life of greater clarity, steadiness, and inner freedom.
          </p>
          {firstLesson ? (
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href={`/course/${firstLesson.slug}`}
                className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Start Course
              </Link>
              <p className="text-sm text-stone-500">
                Begin with Lesson 1 and move one lesson at a time.
              </p>
            </div>
          ) : null}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Course Includes
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {courseIncludes.map((item) => (
              <div
                key={item}
                className="rounded-[1.25rem] bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-600"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="mb-5 text-sm leading-7 text-stone-500">
            You can begin at the beginning and move one lesson at a time.
          </p>
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.slug}
                href={`/course/${lesson.slug}`}
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

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            More paths
          </p>
          <div className="mt-4 space-y-3">
            {morePaths.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="flex items-center justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-stone-900">
                      {course.title}
                    </h2>
                    {course.startHere ? (
                      <span className="rounded-full bg-stone-200 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-stone-700">
                        Start Here
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm leading-7 text-stone-600">
                    {course.description}
                  </p>
                </div>
                <span className="pt-1 text-sm font-medium text-stone-600">
                  Open
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Which course should I take?
          </p>
          <div className="mt-4 space-y-4 text-sm leading-7 text-stone-500">
            <p>
              This course focuses on the twenty values that prepare the mind
              for clarity and Self-knowledge.
            </p>
            <p>
              If you want a gentle, direct inquiry into your own experience,
              begin with{" "}
              <Link
                href="/courses/inquiry"
                className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900"
              >
                Inquiry into the Self
              </Link>
              . If you want a deeper, more structured follow-on, continue with{" "}
              <Link
                href="/courses/foundations"
                className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900"
              >
                Foundations of Self-Knowledge
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
