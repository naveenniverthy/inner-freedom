import Link from "next/link";

import {
  courseDescription,
  courseIntro,
  courseSections,
  courseSubtitle,
  courseTitle,
} from "./content";
import { dharanas } from "./dharanas";
import VijnanaPracticeBrowser from "./VijnanaPracticeBrowser";

export const metadata = {
  title: "Vijnana Bhairava | 112 Days of Awareness",
  description: courseDescription,
  openGraph: {
    title: "Vijnana Bhairava | 112 Days of Awareness",
    description: courseDescription,
  },
  twitter: {
    title: "Vijnana Bhairava | 112 Days of Awareness",
    description: courseDescription,
  },
};

export default async function VijnanaBhairavaCoursePage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const firstPublished = dharanas.find(
    (dharana) => dharana.status === "published",
  );

  return (
    <main className="min-h-screen bg-sand-100 px-6 py-12 text-ink-900 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-6">
        <Link
          href="/guided-path"
          className="w-fit text-sm font-semibold text-sage-500 transition hover:text-sage-700"
        >
          Back to Guided Path
        </Link>

        <section
          id="course-introduction"
          className="surface px-8 py-12 sm:px-10 sm:py-16"
        >
          <p className="eyebrow">{courseSubtitle}</p>
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-tight text-ink-900 sm:text-6xl">
            {courseTitle}
          </h1>
          <p className="mt-5 max-w-reading text-lg leading-8 text-gray-700 sm:text-xl">
            A contemplative journey through 112 classical dhāraṇās on
            awareness, stillness, perception, breath, silence, and direct
            recognition.
          </p>
          <div className="mt-8 max-w-reading space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
            {courseIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p>
              This course is being expanded slowly from the source text itself.
              Practices are published gradually after verse extraction and
              review.
            </p>
          </div>
          <div className="mt-9">
            <Link
              href={
                firstPublished
                  ? `/courses/vijnana-bhairava/${firstPublished.slug}`
                  : "/courses/vijnana-bhairava"
              }
              className="btn-primary"
            >
              Begin Day 1
            </Link>
          </div>
        </section>

        <VijnanaPracticeBrowser
          dharanas={dharanas}
          initialSourceFilter={resolvedSearchParams?.source || "all"}
        />

        <section className="rounded-shell border border-sage-700/10 bg-sage-100/45 px-8 py-8 shadow-soft sm:px-10">
          <p className="eyebrow">Continue Last Practice</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900">
            Return to the next available contemplation.
          </h2>
          <p className="mt-4 max-w-reading text-base leading-8 text-gray-700">
            Move at your own pace. Some contemplations may stay with you longer
            than a single day.
          </p>
          <div className="mt-6">
            <Link
              href={
                firstPublished
                  ? `/courses/vijnana-bhairava/${firstPublished.slug}`
                  : "/courses/vijnana-bhairava"
              }
              className="btn-primary"
            >
              Continue Practice
            </Link>
          </div>
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <p className="eyebrow">New to this course?</p>
          <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900">
            Read “How to Practice the 112 Days of Awareness” before beginning.
          </h2>
          <p className="mt-4 max-w-reading text-base leading-8 text-gray-700">
            A short guide for moving slowly, practicing gently, and staying
            grounded while exploring these contemplations.
          </p>
          <div className="mt-6">
            <Link
              href="/courses/vijnana-bhairava/how-to-practice"
              className="btn-secondary"
            >
              How to Practice
            </Link>
          </div>
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <div className="rounded-3xl border border-sage-700/10 bg-sand-50 px-5 py-5">
            <p className="font-serif text-2xl font-semibold text-ink-900">
              Sources and Acknowledgements
            </p>
            <p className="mt-3 max-w-reading text-sm leading-7 text-gray-600">
              How this course handles source texts, translations, and original
              commentary.
            </p>
            <Link
              href="/courses/vijnana-bhairava/sources"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-sage-700/15 bg-white/70 px-5 py-2 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:bg-white"
            >
              View Sources
            </Link>
          </div>
        </section>

        <section className="rounded-shell border border-sage-700/10 bg-sage-100/45 px-8 py-8 shadow-soft sm:px-10">
          <p className="font-serif text-2xl font-semibold leading-snug text-ink-900">
            Move slowly.
          </p>
          <p className="mt-4 max-w-reading text-base leading-8 text-gray-700">
            These contemplations are not meant to produce altered states or
            replace grounded living, psychological care, or medical care.
          </p>
          <p className="mt-4 text-base font-semibold text-sage-700">
            Depth matters more than speed.
          </p>
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <p className="max-w-reading text-base leading-8 text-gray-700">
            The course is being built carefully. Each contemplation is paired
            with its relevant verse, and source references are reviewed before
            final publication.
          </p>
          <div className="mt-5 space-y-3 text-sm leading-7 text-gray-600">
            <p>
              Plain English renderings are original interpretive renderings for
              contemplation, not literal scholarly translations.
            </p>
            <p>
              Where traditional verses are shown, they are included for study
              and reference. Commentary and practice guidance are original to
              MokshaKeys.
            </p>
          </div>
        </section>

        <section className="surface px-8 py-10 sm:px-10">
          <p className="eyebrow">Course Structure</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Six movements of attention
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {courseSections.map((section, index) => (
              <article
                key={section.title}
                className="rounded-3xl border border-sage-700/10 bg-sand-50 px-6 py-6"
              >
                <p className="text-sm font-semibold text-sage-500">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-ink-900">
                  {section.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-gray-700">
                  {section.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <Link
            href="/courses/vijnana-bhairava/review"
            className="inline-flex text-xs font-semibold uppercase tracking-[0.14em] text-sage-500/70 transition hover:text-sage-700"
          >
            Source review
          </Link>
        </section>
      </div>
    </main>
  );
}
