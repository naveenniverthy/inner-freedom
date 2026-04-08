import Link from "next/link";

import { getCourseLinks } from "../course-links";

const lessons = [
  { number: 1, title: "What are you really seeking?", href: "/course/1" },
  { number: 2, title: "Why nothing fully satisfies", href: "/course/2" },
  { number: 3, title: "The sense of incompleteness", href: "/course/3" },
  { number: 4, title: "The mistake we don’t see", href: "/course/4" },
  { number: 5, title: "Are you the body or the knower?", href: "/course/5" },
  {
    number: 6,
    title: "Thoughts are known — so what are you?",
    href: "/course/6",
  },
  { number: 7, title: "The observer and the observed", href: "/course/7" },
  { number: 8, title: "Awareness is not an object", href: "/course/8" },
  {
    number: 9,
    title: "What is Vedanta really saying?",
    href: "/course/9",
  },
  { number: 10, title: "You are not the changing", href: "/course/10" },
];

export const metadata = {
  title: "Foundations of Self-Knowledge",
  description:
    "Move through a step-by-step introduction to self-knowledge and the vision of Vedanta.",
};

export default function Page() {
  const morePaths = getCourseLinks().filter((course) => course.href !== "/course");

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
            Foundations of Self-Knowledge
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            This is a simple, step-by-step journey into understanding
            yourself. Each lesson builds on the previous one. Move slowly and
            reflect as you go.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-3">
            {lessons.map((lesson) => (
              <Link
                key={lesson.number}
                href={lesson.href}
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
