import Link from "next/link";
import { notFound } from "next/navigation";

import {
  courseDescription,
  courseTitle,
  getLessonBySlug,
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
    title: `${lesson.title} | ${courseTitle}`,
    description: lesson.intro,
    openGraph: {
      title: `${lesson.title} | ${courseTitle}`,
      description: lesson.intro,
    },
    twitter: {
      title: `${lesson.title} | ${courseTitle}`,
      description: lesson.intro,
    },
  };
}

export default function InquiryLessonPage({ params }) {
  const lesson = getLessonBySlug(params.slug);

  if (!lesson) {
    notFound();
  }

  const currentIndex = lessons.findIndex((item) => item.slug === params.slug);
  const lessonNumber = currentIndex + 1;
  const totalLessons = lessons.length;
  const previousLesson = lessons[currentIndex - 1] ?? null;
  const nextLesson = lessons[currentIndex + 1] ?? null;

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/courses/inquiry"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Inquiry into the Self
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson {lessonNumber}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {lesson.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {lesson.intro}
          </p>
          <p className="mt-5 w-fit rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-stone-600 ring-1 ring-stone-200">
            Lesson {lessonNumber} of {totalLessons}
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            {lesson.paragraphs.map((paragraph, index) => (
              <p key={`${lesson.slug}-${index}`}>{paragraph}</p>
            ))}

            {lesson.highlights?.length ? (
              <div className="space-y-3 rounded-[1.5rem] bg-stone-50 px-5 py-5 ring-1 ring-stone-200">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                  In Simple Terms
                </p>
                <ul className="space-y-2 pl-5 text-base leading-8 text-stone-600 sm:text-lg">
                  {lesson.highlights.map((item) => (
                    <li key={item} className="list-disc">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            {lesson.reflection.map((prompt) => (
              <p key={prompt}>{prompt}</p>
            ))}
          </div>
        </section>

        {!nextLesson ? (
          <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
              Go Deeper
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-stone-600">
              If this inquiry has become meaningful to you, the next step is
              Foundations of Self-Knowledge — a more structured introduction to
              the vision of Vedanta.
            </p>
            <div className="mt-6">
              <Link
                href="/courses/foundations"
                className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Explore Foundations of Self-Knowledge
              </Link>
            </div>
          </section>
        ) : null}

        <nav className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-3">
            {previousLesson ? (
              <Link
                href={`/courses/inquiry/${previousLesson.slug}`}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200 transition hover:bg-stone-50"
              >
                Previous Lesson
              </Link>
            ) : null}

            {nextLesson ? (
              <Link
                href={`/courses/inquiry/${nextLesson.slug}`}
                className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
              >
                Next Lesson
              </Link>
            ) : null}
          </div>

          <Link
            href="/courses/inquiry"
            className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-stone-700 shadow-sm ring-1 ring-stone-200 transition hover:bg-stone-50"
          >
            Back to Course
          </Link>
        </nav>
      </div>
    </main>
  );
}
