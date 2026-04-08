import Link from "next/link";

import { getCourseLinks } from "../course-links";
import { lessons } from "./lessons";

export const metadata = {
  title: "Living with Clarity",
  description:
    "Follow a practical study path for steadier action, healthier relationships, and emotional balance.",
};

export default function Page() {
  const morePaths = getCourseLinks().filter(
    (course) => course.href !== "/living-course"
  );

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
            Five Keys to Inner Freedom
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Living with Clarity
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            A practical study path for meeting daily life with steadier action,
            clearer relationships, healthier responsibility, and greater
            emotional balance. Each lesson is short, grounded, and designed to
            be read slowly.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={`/living-course/${lesson.slug}`}
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
                  <h2 className="text-lg font-semibold text-stone-900">
                    {course.title}
                  </h2>
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
      </div>
    </main>
  );
}
