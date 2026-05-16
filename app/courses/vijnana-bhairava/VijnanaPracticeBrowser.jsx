"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

function openingText(dharana) {
  return Array.isArray(dharana.openingReflection)
    ? dharana.openingReflection.join(" ")
    : dharana.openingReflection || "";
}

function matchesSearch(dharana, query) {
  if (!query.trim()) {
    return true;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const searchable = [
    String(dharana.day),
    dharana.title,
    dharana.theme,
    openingText(dharana),
    dharana.sourceStatus,
  ]
    .join(" ")
    .toLowerCase();

  return searchable.includes(normalizedQuery);
}

function PracticeCard({ dharana }) {
  const openingLine = Array.isArray(dharana.openingReflection)
    ? dharana.openingReflection[0]
    : dharana.openingReflection;
  const isPublished = dharana.status === "published";

  return (
    <article
      className={`flex min-h-64 flex-col rounded-3xl border border-sage-700/10 px-6 py-6 ${
        isPublished ? "bg-sand-50" : "bg-white/45"
      }`}
    >
      <p className="text-sm font-semibold text-sage-500">Day {dharana.day}</p>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-sage-500/80">
        {dharana.theme}
      </p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
        Verse:{" "}
        {dharana.sourceStatus === "verified" &&
        (dharana.verseRange || dharana.verseNumber)
          ? dharana.verseRange || dharana.verseNumber
          : "under review"}
      </p>
      <h3 className="mt-3 text-xl font-semibold leading-snug text-ink-900">
        {dharana.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-gray-700">
        {openingLine}
      </p>
      {isPublished ? (
        <Link
          href={`/courses/vijnana-bhairava/${dharana.slug}`}
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-sage-700/15 bg-white/70 px-5 py-2 text-sm font-semibold text-ink-900 transition hover:-translate-y-0.5 hover:bg-white"
        >
          Open Practice
        </Link>
      ) : (
        <span className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-sage-700/10 bg-white/35 px-5 py-2 text-sm font-semibold text-gray-500">
          Under Review
        </span>
      )}
    </article>
  );
}

export default function VijnanaPracticeBrowser({ dharanas, verifiedOnly }) {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState("day");
  const visibleDharanas = useMemo(() => {
    return dharanas
      .filter((dharana) =>
        verifiedOnly ? dharana.sourceStatus === "verified" : true,
      )
      .filter((dharana) => matchesSearch(dharana, query));
  }, [dharanas, query, verifiedOnly]);
  const groupedDharanas = useMemo(() => {
    return visibleDharanas.reduce((groups, dharana) => {
      const theme = dharana.theme || "Under Review";
      return {
        ...groups,
        [theme]: [...(groups[theme] || []), dharana],
      };
    }, {});
  }, [visibleDharanas]);
  const hasResults = visibleDharanas.length > 0;

  return (
    <section className="surface px-8 py-10 sm:px-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Practice Index</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Begin with simple observation
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="inline-flex rounded-full border border-sage-700/10 bg-white/55 p-1">
            {[
              ["day", "Day Order"],
              ["theme", "Theme Groups"],
            ].map(([value, label]) => (
              <button
                key={value}
                type="button"
                onClick={() => setViewMode(value)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  viewMode === value
                    ? "bg-sage-700 text-sand-50"
                    : "text-gray-600 hover:bg-white"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
          <Link
            href={
              verifiedOnly
                ? "/courses/vijnana-bhairava"
                : "/courses/vijnana-bhairava?source=verified"
            }
            className={`inline-flex min-h-10 w-fit items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
              verifiedOnly
                ? "border-sage-700/20 bg-sage-100/60 text-sage-700"
                : "border-sage-700/10 bg-white/55 text-gray-600 hover:bg-white"
            }`}
          >
            Verified only
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="vijnana-search" className="sr-only">
          Search practices
        </label>
        <input
          id="vijnana-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search by theme, title, or day..."
          className="input-shell max-w-xl bg-white/60"
        />
      </div>

      <div className="mt-6 grid gap-3 rounded-3xl border border-sage-700/10 bg-white/45 px-5 py-5 text-sm leading-6 text-gray-600 sm:grid-cols-2 lg:grid-cols-4">
        <p>
          <span className="font-semibold text-ink-900">Open Practice</span> =
          available
        </p>
        <p>
          <span className="font-semibold text-ink-900">Under Review</span> =
          reserved but not yet published
        </p>
        <p>
          <span className="font-semibold text-ink-900">Source Verified</span> =
          verse reference reviewed
        </p>
        <p>
          <span className="font-semibold text-ink-900">
            Source Under Review
          </span>{" "}
          = verse reference still being checked
        </p>
      </div>

      <p className="mt-6 max-w-reading text-sm leading-7 text-gray-600">
        The full 112-day structure is shown here. Practices are opened gradually
        as each verse and explanation is reviewed.
      </p>

      {!hasResults ? (
        <div className="mt-7 rounded-3xl border border-[#d7c49a]/50 bg-[#f8efd9]/55 px-5 py-5 text-sm leading-7 text-gray-600">
          <p className="font-semibold text-ink-900">
            No practices match this view yet.
          </p>
          <p className="mt-1">Try clearing the search or changing the filter.</p>
        </div>
      ) : viewMode === "theme" ? (
        <div className="mt-8 space-y-8">
          {Object.entries(groupedDharanas).map(([theme, practices]) => (
            <div key={theme}>
              <h3 className="font-serif text-2xl font-semibold text-ink-900">
                {theme}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {practices.map((dharana) => (
                  <PracticeCard key={dharana.slug} dharana={dharana} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDharanas.map((dharana) => (
            <PracticeCard key={dharana.slug} dharana={dharana} />
          ))}
        </div>
      )}
    </section>
  );
}
