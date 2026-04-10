import Link from "next/link";
import { notFound } from "next/navigation";

import {
  courseDescription,
  courseTitle,
  getLessonBySlug,
  mainLessons,
  optionalLessons,
} from "../content";

export function generateStaticParams() {
  return [...mainLessons, ...optionalLessons].map((lesson) => ({
    slug: lesson.slug,
  }));
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
    title: lesson.isOptional
      ? `${lesson.title} | ${courseTitle}`
      : `Day ${lesson.day}: ${lesson.title} | ${courseTitle}`,
    description: lesson.takeaway,
    openGraph: {
      title: lesson.isOptional
        ? `${lesson.title} | ${courseTitle}`
        : `Day ${lesson.day}: ${lesson.title} | ${courseTitle}`,
      description: lesson.takeaway,
    },
    twitter: {
      title: lesson.isOptional
        ? `${lesson.title} | ${courseTitle}`
        : `Day ${lesson.day}: ${lesson.title} | ${courseTitle}`,
      description: lesson.takeaway,
    },
  };
}

export default function AparokshanubhutiLessonPage({ params }) {
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  const trimmed = (value) =>
    typeof value === "string" ? value.trim() : "";
  const verseText = trimmed(lesson.verse);
  const contentText = trimmed(lesson.content);
  const keyInsight = trimmed(lesson.keyInsight);
  const commonMisunderstanding = trimmed(lesson.commonMisunderstanding);
  const takeaway = trimmed(lesson.takeaway);
  const reflection = trimmed(lesson.reflection);
  const closing = trimmed(lesson.closing);
  const note = trimmed(lesson.note);
  const takeawayLine = trimmed(lesson.takeawayLine);

  const lessonIndex = mainLessons.findIndex((item) => item.slug === params.slug);
  const previousLesson = lesson.isOptional
    ? mainLessons.at(-1) ?? null
    : lessonIndex > 0
      ? mainLessons[lessonIndex - 1]
      : null;
  const nextLesson =
    lesson.isOptional || lessonIndex < 0 || lessonIndex >= mainLessons.length - 1
      ? null
      : mainLessons[lessonIndex + 1];
  const contentParagraphs = contentText
    ? lesson.content
        .split(/\n\s*\n/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean)
    : Array.isArray(lesson.body)
      ? lesson.body.map((paragraph) => trimmed(paragraph)).filter(Boolean)
      : [];
  const verseLines = verseText
    ? lesson.verse
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
    : [];
  const closingText =
    closing || (lesson.isOptional ? "" : "Let this understanding stay with you through the day.");
  const hasSupportingText = Boolean(note || takeawayLine);

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
            {lesson.isOptional ? "Optional Reference" : `Day ${lesson.day}`}
          </p>
          {lesson.module ? (
            <p className="mt-3 text-sm text-stone-500">{lesson.module}</p>
          ) : null}
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {lesson.title}
          </h1>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-8">
            {verseLines.length > 0 ? (
              <div className="rounded-[1.5rem] bg-stone-50 px-5 py-5 ring-1 ring-stone-200">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                  Verse
                </p>
                <div className="mt-4 space-y-2 text-base leading-8 text-stone-700 sm:text-lg">
                  {verseLines.map((line, index) => (
                    <p key={`${lesson.slug}-verse-${index}`}>{line}</p>
                  ))}
                </div>
              </div>
            ) : null}

            {contentParagraphs.length > 0 ? (
              <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
                {contentParagraphs.map((paragraph, index) => (
                  /^https?:\/\/\S+$/.test(paragraph) ? (
                    <p
                      key={`${lesson.slug}-content-${index}`}
                      className="whitespace-pre-line"
                    >
                      <a
                        href={paragraph}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-stone-700 underline decoration-stone-300 underline-offset-4 transition hover:text-stone-900"
                      >
                        View the original text and word meanings
                      </a>
                    </p>
                  ) : (
                    <p
                      key={`${lesson.slug}-content-${index}`}
                      className="whitespace-pre-line"
                    >
                      {paragraph}
                    </p>
                  )
                ))}
              </div>
            ) : null}

            {keyInsight ? (
              <div className="rounded-[1.5rem] bg-stone-50 px-5 py-5 ring-1 ring-stone-200">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                  Key Insight
                </p>
                <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
                  {keyInsight}
                </p>
              </div>
            ) : null}

            {commonMisunderstanding ? (
              <div className="rounded-[1.5rem] bg-stone-50 px-5 py-5 ring-1 ring-stone-200">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                  Common Misunderstanding
                </p>
                <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
                  {commonMisunderstanding}
                </p>
              </div>
            ) : null}
          </div>
        </section>

        {takeaway ? (
          <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Takeaway
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              {takeaway}
            </p>
          </section>
        ) : null}

        {reflection ? (
          <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Reflection
            </p>
            <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
              {reflection}
            </p>
          </section>
        ) : null}

        {closingText ? (
          <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Closing
            </p>
            <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
              {closingText}
            </p>
          </section>
        ) : null}

        {hasSupportingText ? (
          <section className="rounded-[2rem] bg-stone-50 px-8 py-7 shadow-sm ring-1 ring-stone-200 sm:px-10">
            <div className="space-y-2 text-sm leading-7 text-stone-500">
              {note ? <p>{note}</p> : null}
              {takeawayLine ? <p>{takeawayLine}</p> : null}
            </div>
          </section>
        ) : null}

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
