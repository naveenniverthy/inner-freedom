import Link from "next/link";
import { notFound } from "next/navigation";

import {
  courseDescription,
  courseTitle,
  getLessonBySlug,
  getLessonIndex,
  lessons,
} from "../content";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export function generateMetadata({ params }) {
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) {
    return {
      title: courseTitle,
      description: courseDescription,
    };
  }

  return {
    title: `Day ${lesson.day}: ${lesson.title} | ${courseTitle}`,
    description: lesson.takeaway,
    openGraph: {
      title: `Day ${lesson.day}: ${lesson.title} | ${courseTitle}`,
      description: lesson.takeaway,
    },
    twitter: {
      title: `Day ${lesson.day}: ${lesson.title} | ${courseTitle}`,
      description: lesson.takeaway,
    },
  };
}

export default function AparokshanubhutiLessonPage({ params }) {
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  const lessonIndex = getLessonIndex(params.slug);
  const previousLesson = lessonIndex > 0 ? lessons[lessonIndex - 1] : null;
  const nextLesson =
    lessonIndex >= 0 && lessonIndex < lessons.length - 1
      ? lessons[lessonIndex + 1]
      : null;

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/courses/aparokshanubhuti"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Aparokshanubhuti
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Day {lesson.day}
          </p>
          <p className="mt-3 text-sm text-stone-500">{lesson.module}</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {lesson.title}
          </h1>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            {lesson.body.map((paragraph, index) => (
              <p key={`${lesson.slug}-${index}`}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            {lesson.reflection}
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Takeaway
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            {lesson.takeaway}
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
            Let this understanding stay with you through the day.
          </p>
          {lesson.day === 45 ? (
            <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
              When you are ready, return to the beginning and read again with a
              quieter mind.
            </p>
          ) : null}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <div className="flex flex-col gap-3 sm:flex-row">
              {previousLesson ? (
                <Link
                  href={`/courses/aparokshanubhuti/${previousLesson.slug}`}
                  className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
                >
                  Previous
                </Link>
              ) : null}
              {nextLesson ? (
                <Link
                  href={`/courses/aparokshanubhuti/${nextLesson.slug}`}
                  className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                >
                  Next
                </Link>
              ) : null}
            </div>

            <Link
              href="/courses/aparokshanubhuti"
              className="text-sm font-medium text-stone-500 transition hover:text-stone-700"
            >
              Back to course main page
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
