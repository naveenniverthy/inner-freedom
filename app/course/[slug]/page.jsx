import Link from "next/link";
import { notFound } from "next/navigation";
import { getLessonBySlug, lessons } from "../lessons";

export function generateStaticParams() {
  return lessons.map((lesson) => ({ slug: lesson.slug }));
}

export function generateMetadata({ params }) {
  const { slug } = params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    return {
      title: "Foundations of Self-Knowledge",
      description:
        "Move through a step-by-step introduction to self-knowledge and the vision of Vedanta.",
    };
  }

  return {
    title: `${lesson.title} - Foundations of Self-Knowledge`,
    description: lesson.intro,
  };
}

export default function Page({ params }) {
  const { slug } = params;
  const lesson = getLessonBySlug(slug);

  if (!lesson) {
    notFound();
  }

  const nextLesson = lessons[lesson.number] ?? null;

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Foundations of Self-Knowledge
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson {lesson.number}
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            {lesson.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            {lesson.intro}
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            {lesson.paragraphs.map((paragraph, index) => (
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

        <div className="pt-2">
          <Link
            href={nextLesson ? `/course/${nextLesson.slug}` : "/course"}
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            {nextLesson ? "Next Lesson" : "Next Lesson"}
          </Link>
        </div>
      </div>
    </main>
  );
}
