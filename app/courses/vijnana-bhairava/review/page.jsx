import Link from "next/link";

import { dharanas } from "../dharanas";
import { extractionQueue } from "../extraction-queue";
import {
  hasCompleteSourceData,
  hasLiteralTranslation,
  isVerified,
} from "../utils/verification";

export const metadata = {
  title: "Vijnana Bhairava Source Review | MokshaKeys",
  robots: {
    index: false,
    follow: false,
  },
};

function countBy(predicate) {
  return dharanas.filter(predicate).length;
}

function reviewValue(value) {
  return value || "—";
}

function hasTranslationNotes(dharana) {
  return Array.isArray(dharana.translationComparisons)
    ? dharana.translationComparisons.length > 0
    : false;
}

function isFullyReviewed(dharana) {
  return (
    isVerified(dharana) &&
    hasLiteralTranslation(dharana) &&
    hasCompleteSourceData(dharana)
  );
}

function formatDays(days) {
  if (!Array.isArray(days) || days.length === 0) {
    return "—";
  }

  return days.length === 1
    ? `Day ${days[0]}`
    : `Days ${days[0]}–${days[days.length - 1]}`;
}

export default async function VijnanaBhairavaSourceReviewPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const activeFilter = resolvedSearchParams?.filter || "all";
  const nextSourceBatch = extractionQueue.find(
    (item) => item.status !== "complete",
  );
  const summary = [
    { label: "Total Days", value: dharanas.length },
    {
      label: "Published",
      value: countBy((dharana) => dharana.status === "published"),
    },
    {
      label: "Verified",
      value: countBy((dharana) => isVerified(dharana)),
    },
    {
      label: "Needs review",
      value: countBy((dharana) => dharana.sourceStatus === "needs-review"),
    },
    {
      label: "With literal translation",
      value: countBy((dharana) => hasLiteralTranslation(dharana)),
    },
    {
      label: "With translation notes",
      value: countBy((dharana) => hasTranslationNotes(dharana)),
    },
    {
      label: "Fully reviewed",
      value: countBy((dharana) => isFullyReviewed(dharana)),
    },
  ];
  const filters = [
    { key: "all", label: "All", count: dharanas.length },
    {
      key: "verified",
      label: "Verified",
      count: countBy((dharana) => dharana.sourceStatus === "verified"),
    },
    {
      key: "needs-review",
      label: "Needs Review",
      count: countBy((dharana) => dharana.sourceStatus === "needs-review"),
    },
    {
      key: "published",
      label: "Published",
      count: countBy((dharana) => dharana.status === "published"),
    },
    {
      key: "coming-soon",
      label: "Coming Soon",
      count: countBy((dharana) => dharana.status === "coming-soon"),
    },
  ];
  const filteredDharanas = dharanas.filter((dharana) => {
    if (activeFilter === "verified") {
      return dharana.sourceStatus === "verified";
    }

    if (activeFilter === "needs-review") {
      return dharana.sourceStatus === "needs-review";
    }

    if (activeFilter === "published") {
      return dharana.status === "published";
    }

    if (activeFilter === "coming-soon") {
      return dharana.status === "coming-soon";
    }

    return true;
  });

  return (
    <main className="min-h-screen bg-sand-100 px-6 py-12 text-ink-900 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <Link
          href="/courses/vijnana-bhairava"
          className="w-fit text-sm font-semibold text-sage-500 transition hover:text-sage-700"
        >
          Back to Course
        </Link>

        <section className="surface px-8 py-10 sm:px-10">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="eyebrow">Internal Review</p>
              <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
                Vijnana Bhairava Source Review
              </h1>
              <p className="mt-5 max-w-reading text-base leading-8 text-gray-700">
                This page is for internal content review before public expansion
                of the 112-day course.
              </p>
            </div>
            <Link
              href="/courses/vijnana-bhairava/verification"
              className="w-fit text-xs font-semibold uppercase tracking-[0.14em] text-sage-500/75 transition hover:text-sage-700"
            >
              How verification works
            </Link>
          </div>
        </section>

        <section className="rounded-shell border border-sage-700/10 bg-sage-100/45 px-8 py-8 shadow-soft sm:px-10">
          <p className="eyebrow">Next Source Batch</p>
          {nextSourceBatch ? (
            <div className="mt-4">
              <h2 className="font-serif text-3xl font-semibold text-ink-900">
                {nextSourceBatch.batch}: {formatDays(nextSourceBatch.days)}
              </h2>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-sage-700">
                {nextSourceBatch.status}
              </p>
              <p className="mt-4 max-w-reading text-base leading-8 text-gray-700">
                {nextSourceBatch.focus}
              </p>
              <p className="mt-2 max-w-reading text-sm leading-7 text-gray-600">
                {nextSourceBatch.notes}
              </p>
            </div>
          ) : (
            <p className="mt-4 text-base leading-8 text-gray-700">
              All source batches have been reviewed.
            </p>
          )}
        </section>

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {summary.map((item) => (
            <article
              key={item.label}
              className="rounded-3xl border border-sage-700/10 bg-white/70 px-5 py-5 shadow-soft"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-500">
                {item.label}
              </p>
              <p className="mt-3 font-serif text-4xl font-semibold text-ink-900">
                {item.value}
              </p>
            </article>
          ))}
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <p className="eyebrow">Next Verification Targets</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {[6, 7, 8, 9, 10].map((day) => (
              <span
                key={day}
                className="inline-flex min-h-10 items-center justify-center rounded-full border border-sage-700/10 bg-white/55 px-4 py-2 text-sm font-semibold text-gray-600"
              >
                Day {day}
              </span>
            ))}
          </div>
        </section>

        <section className="surface px-5 py-5">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter.key;

              return (
                <Link
                  key={filter.key}
                  href={
                    filter.key === "all"
                      ? "/courses/vijnana-bhairava/review"
                      : `/courses/vijnana-bhairava/review?filter=${filter.key}`
                  }
                  className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-sage-700/20 bg-sage-100/65 text-sage-700"
                      : "border-sage-700/10 bg-white/55 text-gray-600 hover:bg-white"
                  }`}
                >
                  {filter.label} ({filter.count})
                </Link>
              );
            })}
          </div>
        </section>

        <section className="surface overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[1500px] border-collapse text-left text-sm">
              <thead className="border-b border-sage-700/10 bg-sand-50">
                <tr className="text-xs font-semibold uppercase tracking-[0.14em] text-sage-500">
                  <th className="px-4 py-4">Day</th>
                  <th className="px-4 py-4">Title</th>
                  <th className="px-4 py-4">Theme</th>
                  <th className="px-4 py-4">Verse number / range</th>
                  <th className="px-4 py-4">Source status</th>
                  <th className="px-4 py-4">Literal translation</th>
                  <th className="px-4 py-4">Plain English rendering</th>
                  <th className="px-4 py-4">Source note</th>
                  <th className="px-4 py-4">Reviewed by</th>
                  <th className="px-4 py-4">Review date</th>
                  <th className="px-4 py-4">Reference notes</th>
                  <th className="px-4 py-4">Alternate verse number</th>
                  <th className="px-4 py-4">Traditional theme</th>
                  <th className="px-4 py-4">Slug</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sage-700/10">
                {filteredDharanas.map((dharana) => {
                  const needsReview = dharana.sourceStatus === "needs-review";
                  const verseReference =
                    dharana.verseRange || dharana.verseNumber || "under review";

                  return (
                    <tr
                      key={dharana.slug}
                      className={
                        needsReview ? "bg-[#f8efd9]/55" : "bg-white/45"
                      }
                    >
                      <td className="px-4 py-4 font-semibold text-sage-700">
                        {dharana.day}
                      </td>
                      <td className="px-4 py-4 font-semibold text-ink-900">
                        {dharana.title}
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {dharana.theme}
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {verseReference}
                      </td>
                      <td className="px-4 py-4">
                        <span className="rounded-full border border-sage-700/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">
                          {dharana.sourceStatus}
                        </span>
                      </td>
                      <td className="max-w-md px-4 py-4 leading-6 text-gray-700">
                        {reviewValue(dharana.literalTranslation)}
                      </td>
                      <td className="max-w-md px-4 py-4 leading-6 text-gray-700">
                        {reviewValue(
                          dharana.plainEnglishRendering || dharana.rendering,
                        )}
                      </td>
                      <td className="max-w-md px-4 py-4 leading-6 text-gray-700">
                        {dharana.sourceNote || ""}
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {reviewValue(dharana.reviewedBy)}
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {reviewValue(dharana.reviewDate)}
                      </td>
                      <td className="max-w-md px-4 py-4 leading-6 text-gray-700">
                        {reviewValue(dharana.referenceNotes)}
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {reviewValue(dharana.alternateVerseNumber)}
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {reviewValue(dharana.traditionalTheme)}
                      </td>
                      <td className="px-4 py-4 font-mono text-xs text-gray-600">
                        {dharana.slug}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section className="surface overflow-hidden">
          <div className="flex flex-col gap-3 border-b border-sage-700/10 px-5 py-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Extraction Queue</p>
              <p className="mt-3 text-sm leading-7 text-gray-600">
                Queue status options: not-started, in-progress, complete.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[980px] border-collapse text-left text-sm">
              <thead className="border-b border-sage-700/10 bg-sand-50">
                <tr className="text-xs font-semibold uppercase tracking-[0.14em] text-sage-500">
                  <th className="px-4 py-4">Batch</th>
                  <th className="px-4 py-4">Days</th>
                  <th className="px-4 py-4">Status</th>
                  <th className="px-4 py-4">Focus</th>
                  <th className="px-4 py-4">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sage-700/10">
                {extractionQueue.map((item) => (
                  <tr key={item.batch} className="bg-white/45">
                    <td className="px-4 py-4 font-semibold text-ink-900">
                      {item.batch}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {formatDays(item.days)}
                    </td>
                    <td className="px-4 py-4">
                      <span className="rounded-full border border-sage-700/10 bg-white/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-gray-600">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-700">{item.focus}</td>
                    <td className="max-w-md px-4 py-4 leading-6 text-gray-700">
                      {item.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </main>
  );
}
