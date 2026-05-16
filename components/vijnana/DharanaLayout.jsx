import Link from "next/link";

function asArray(value) {
  return Array.isArray(value) ? value : [value].filter(Boolean);
}

export default function DharanaLayout({
  day,
  title,
  openingReflection,
  sanskrit,
  transliteration,
  literalTranslation,
  plainEnglishRendering,
  rendering,
  meaning,
  practice,
  noticing,
  misunderstandings,
  reflection,
  freedom,
  previousHref,
  nextHref,
  navigationItems = [],
  sourceText,
  verseNumber,
  verseRange,
  sourceStatus,
  translationComparisons = [],
}) {
  const practiceSteps = Array.isArray(practice) ? practice : practice?.steps ?? [];
  const practiceNote = Array.isArray(practice) ? "" : practice?.note ?? "";
  const isSourceUnderReview = sourceStatus === "needs-review";
  const sourceBadge =
    sourceStatus === "verified" ? "Verified from source text" : "Under review";
  const accessibleRendering = plainEnglishRendering || rendering;
  const sanskritLines = asArray(sanskrit);
  const transliterationLines = asArray(transliteration);
  const comparisonNotes = Array.isArray(translationComparisons)
    ? translationComparisons.filter(
        (comparison) =>
          comparison?.source || comparison?.translation || comparison?.notes,
      )
    : [];
  const sourceLabel =
    sourceStatus === "verified" && sourceText && (verseNumber || verseRange)
      ? `Source: ${sourceText}, Verse ${verseRange || verseNumber}`
      : "Verse reference under review";
  const navItems = navigationItems.length
    ? navigationItems
    : Array.from({ length: 12 }, (_, index) => ({
        day: index + 1,
        slug: `day-${index + 1}`,
        status: index < 12 ? "published" : "coming-soon",
      }));

  return (
    <main className="min-h-screen bg-sand-100 px-6 py-12 text-ink-900 sm:px-8 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[240px_minmax(0,760px)] lg:items-start lg:justify-center">
        <aside className="surface px-5 py-6 lg:sticky lg:top-8">
          <Link
            href="/courses/vijnana-bhairava"
            className="text-sm font-semibold text-sage-500 transition hover:text-sage-700"
          >
            Vijnana Bhairava
          </Link>
          <p className="mt-2 text-sm leading-6 text-gray-600">
            112 Days of Awareness
          </p>
          <nav className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-1">
            {navItems.map((item) => {
              const isPublished = item.status === "published";
              const isCurrent = item.day === day;
              const className = `rounded-full px-3 py-2 text-center text-sm font-semibold transition lg:text-left ${
                isCurrent
                  ? "bg-sage-700 text-sand-50"
                  : isPublished
                    ? "bg-sand-50 text-ink-900 hover:bg-white"
                    : "bg-white/35 text-gray-400"
              }`;

              return isPublished ? (
                <Link
                  key={item.slug}
                  href={`/courses/vijnana-bhairava/${item.slug}`}
                  className={className}
                  aria-current={isCurrent ? "page" : undefined}
                >
                  Day {item.day}
                </Link>
              ) : (
                <span key={item.slug} className={className}>
                  Day {item.day}
                </span>
              );
            })}
          </nav>
        </aside>

        <div className="flex flex-col gap-6">
          <Link
            href="/courses/vijnana-bhairava"
            className="w-fit text-sm font-semibold text-sage-500 transition hover:text-sage-700"
          >
            Back to Course
          </Link>

          <section className="surface px-8 py-12 sm:px-10 sm:py-16">
            <p className="eyebrow">Vijnana Bhairava · Day {day}</p>
            <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
              Day {day} — {title}
            </h1>
            <div className="mt-7 max-w-reading space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
              {asArray(openingReflection).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="surface px-8 py-10 sm:px-10">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">
                  {isSourceUnderReview
                    ? "Verse Text Under Review"
                    : "Original Verse"}
                </p>
                <span
                  className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
                    sourceStatus === "verified"
                      ? "border-sage-700/15 bg-sage-100/45 text-sage-700"
                      : "border-[#d7c49a]/55 bg-[#f8efd9]/55 text-gray-600"
                  }`}
                >
                  {sourceBadge}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sage-500/75">
                {sourceLabel}
              </p>
            </div>
            {isSourceUnderReview ? (
              <p className="mt-4 rounded-2xl border border-[#d7c49a]/50 bg-[#f8efd9]/55 px-4 py-3 text-sm leading-6 text-gray-600">
                This entry is being reviewed for verse accuracy before final
                publication.
              </p>
            ) : null}
            <div className="mt-7 rounded-[1.75rem] border border-sage-700/10 bg-sand-50 px-5 py-8 text-center sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">
                Sanskrit
              </p>
              <p
                lang="sa"
                className="mx-auto mt-5 max-w-2xl whitespace-normal break-words font-serif text-3xl leading-[2.05] text-ink-900 sm:text-4xl sm:leading-[2.1]"
              >
                {sanskritLines.length ? (
                  sanskritLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                ) : (
                  <span className="block text-base leading-8 text-gray-600">
                    Sanskrit under review.
                  </span>
                )}
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-sage-700/10 bg-white/60 px-5 py-5 sm:px-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">
                Transliteration
              </p>
              <p className="mt-4 text-base leading-8 text-gray-700">
                {transliterationLines.length ? (
                  transliterationLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))
                ) : (
                  <span className="block">Transliteration under review.</span>
                )}
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-sage-700/10 bg-white/60 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">
                  Literal Translation
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  {literalTranslation || "Literal translation under review."}
                </p>
              </div>
              <div className="rounded-3xl border border-sage-700/10 bg-white/60 px-5 py-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">
                  Plain English Rendering
                </p>
                <p className="mt-4 text-base leading-8 text-gray-700">
                  “{accessibleRendering}”
                </p>
              </div>
            </div>

            <p className="mt-6 border-t border-sage-700/10 pt-5 text-xs leading-6 text-gray-500">
              Literal translations remain close to the source text. Plain
              English renderings are interpretive contemplative renderings for
              accessibility and reflection.
            </p>

            {comparisonNotes.length ? (
              <details className="mt-6 rounded-3xl border border-sage-700/10 bg-white/45 px-5 py-4">
                <summary className="cursor-pointer text-sm font-semibold uppercase tracking-[0.14em] text-sage-500">
                  Translation Notes
                </summary>
                <div className="mt-5 space-y-4">
                  {comparisonNotes.map((comparison) => (
                    <div
                      key={`${comparison.source}-${comparison.translation}`}
                      className="rounded-2xl border border-sage-700/10 bg-sand-50 px-4 py-4 text-sm leading-7 text-gray-700"
                    >
                      {comparison.source ? (
                        <p className="font-semibold text-ink-900">
                          {comparison.source}
                        </p>
                      ) : null}
                      {comparison.translation ? (
                        <p className="mt-2">{comparison.translation}</p>
                      ) : null}
                      {comparison.notes ? (
                        <p className="mt-2 text-gray-600">
                          {comparison.notes}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>
              </details>
            ) : null}
          </section>

          <section className="surface px-8 py-10 sm:px-10">
            <p className="eyebrow">Meaning</p>
            <div className="mt-5 space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
              {asArray(meaning).map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="surface px-8 py-10 sm:px-10">
            <p className="eyebrow">The Practice</p>
            <ol className="mt-6 space-y-3">
              {practiceSteps.map((step, index) => (
                <li
                  key={step}
                  className="flex gap-4 rounded-3xl border border-sage-700/10 bg-sand-50 px-5 py-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sage-100 text-sm font-semibold text-sage-700">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-base leading-7 text-gray-700">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            {practiceNote ? (
              <div className="mt-6 rounded-3xl border border-sage-700/10 bg-sage-100/45 px-5 py-5">
                <p className="text-base font-semibold text-sage-700">
                  {practiceNote}
                </p>
              </div>
            ) : null}
          </section>

          <section className="surface px-8 py-10 sm:px-10">
            <p className="eyebrow">What to Notice</p>
            <ul className="mt-5 space-y-3 text-base leading-8 text-gray-700 sm:text-lg">
              {asArray(noticing).map((point) => (
                <li key={point} className="rounded-3xl bg-sand-50 px-5 py-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="surface px-8 py-10 sm:px-10">
            <p className="eyebrow">Common Misunderstandings</p>
            <ul className="mt-5 space-y-3 text-base leading-8 text-gray-700 sm:text-lg">
              {asArray(misunderstandings).map((point) => (
                <li key={point} className="rounded-3xl bg-sand-50 px-5 py-4">
                  {point}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-shell border border-sage-700/10 bg-sage-100/45 px-8 py-10 shadow-soft sm:px-10">
            <p className="eyebrow">Reflection Prompt</p>
            <p className="mt-5 font-serif text-2xl font-semibold leading-snug text-ink-900 sm:text-3xl">
              “{reflection}”
            </p>
          </section>

          <section className="surface px-8 py-10 sm:px-10">
            <p className="eyebrow">Connection to Inner Freedom</p>
            <p className="mt-5 text-base leading-8 text-gray-700 sm:text-lg">
              {freedom}
            </p>
          </section>

          <section className="surface px-8 py-8 sm:px-10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-3 sm:flex-row">
                {previousHref ? (
                  <Link href={previousHref} className="btn-secondary">
                    Previous Practice
                  </Link>
                ) : null}
                <Link href="/courses/vijnana-bhairava" className="btn-secondary">
                  Back to Course
                </Link>
              </div>
              {nextHref ? (
                <Link href={nextHref} className="btn-primary">
                  Next Practice
                </Link>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
