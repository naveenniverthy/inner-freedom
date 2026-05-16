"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const FULL_STRUCTURE_STORAGE_KEY = "vijnana-show-full-structure";

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

function matchesSourceFilter(dharana, sourceFilter) {
  if (sourceFilter === "verified") {
    return dharana.sourceStatus === "verified";
  }

  if (sourceFilter === "under-review") {
    return dharana.sourceStatus === "needs-review";
  }

  if (sourceFilter === "published") {
    return dharana.status === "published";
  }

  return true;
}

function sourceBadge(dharana) {
  return dharana.sourceStatus === "verified"
    ? "Verified from source text"
    : "Under review";
}

function practiceActionLabel(dharana) {
  if (dharana.status !== "published") {
    return "Reserved for Source Review";
  }

  return dharana.sourceStatus === "verified"
    ? "Open Practice"
    : "Open Practice — Source Review Pending";
}

function PracticeCard({ dharana }) {
  const openingLine = Array.isArray(dharana.openingReflection)
    ? dharana.openingReflection[0]
    : dharana.openingReflection;
  const isPublished = dharana.status === "published";

  return (
    <article
      className={`flex min-h-64 flex-col rounded-3xl border border-sage-700/10 px-6 py-6 ${
        isPublished ? "bg-sand-50" : "bg-white/40 text-gray-600"
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
      <span
        className={`mt-3 w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] ${
          dharana.sourceStatus === "verified"
            ? "border-sage-700/15 bg-sage-100/50 text-sage-700"
            : "border-[#d7c49a]/55 bg-[#f8efd9]/55 text-gray-600"
        }`}
      >
        {sourceBadge(dharana)}
      </span>
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
          {practiceActionLabel(dharana)}
        </Link>
      ) : (
        <span className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-sage-700/10 bg-white/35 px-5 py-2 text-sm font-semibold text-gray-500">
          {practiceActionLabel(dharana)}
        </span>
      )}
    </article>
  );
}

function SourceGroup({ title, description, practices }) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-ink-900">
            {title}
          </h3>
          <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
        </div>
        <p className="text-sm font-semibold text-sage-500">
          {practices.length} practices
        </p>
      </div>
      {practices.length ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {practices.map((dharana) => (
            <PracticeCard key={dharana.slug} dharana={dharana} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-3xl border border-sage-700/10 bg-white/45 px-5 py-5 text-sm leading-7 text-gray-600">
          No practices in this group yet.
        </div>
      )}
    </div>
  );
}

export default function VijnanaPracticeBrowser({
  dharanas,
  initialSourceFilter = "all",
}) {
  const [query, setQuery] = useState("");
  const [viewMode, setViewMode] = useState("source");
  const [sourceFilter, setSourceFilter] = useState(initialSourceFilter);
  const [showFullStructure, setShowFullStructure] = useState(false);

  useEffect(() => {
    const storedPreference = window.localStorage.getItem(
      FULL_STRUCTURE_STORAGE_KEY,
    );

    if (storedPreference === "true") {
      setShowFullStructure(true);
    }
  }, []);

  function handleStructureToggle() {
    setShowFullStructure((currentValue) => {
      const nextValue = !currentValue;
      window.localStorage.setItem(
        FULL_STRUCTURE_STORAGE_KEY,
        String(nextValue),
      );
      return nextValue;
    });
  }

  const scopedDharanas = useMemo(() => {
    return showFullStructure
      ? dharanas
      : dharanas.filter((dharana) => dharana.status === "published");
  }, [dharanas, showFullStructure]);

  const visibleDharanas = useMemo(() => {
    return scopedDharanas
      .filter((dharana) => matchesSourceFilter(dharana, sourceFilter))
      .filter((dharana) => matchesSearch(dharana, query));
  }, [query, scopedDharanas, sourceFilter]);
  const groupedDharanas = useMemo(() => {
    return visibleDharanas.reduce((groups, dharana) => {
      const theme = dharana.theme || "Under Review";
      return {
        ...groups,
        [theme]: [...(groups[theme] || []), dharana],
      };
    }, {});
  }, [visibleDharanas]);
  const sourceGroups = useMemo(
    () => [
      {
        title: "Published Practices",
        description: "Practices currently available for public study.",
        practices: visibleDharanas.filter(
          (dharana) => dharana.status === "published",
        ),
      },
      {
        title: "Verified Practices",
        description: "Published practices checked against the source text.",
        practices: visibleDharanas.filter(
          (dharana) =>
            dharana.status === "published" &&
            dharana.sourceStatus === "verified",
        ),
      },
      ...(showFullStructure
        ? [
            {
              title: "Under Review",
              description:
                "Practices awaiting source extraction or final review.",
              practices: visibleDharanas.filter(
                (dharana) =>
                  dharana.sourceStatus === "needs-review" &&
                  dharana.status !== "coming-soon",
              ),
            },
            {
              title: "Coming Soon",
              description: "Reserved places in the 112-day course structure.",
              practices: visibleDharanas.filter(
                (dharana) => dharana.status === "coming-soon",
              ),
            },
          ]
        : []),
    ],
    [showFullStructure, visibleDharanas],
  );
  const hasResults = visibleDharanas.length > 0;
  const sourceFilters = [
    ["all", "All"],
    ["verified", "Verified"],
    ["under-review", "Under Review"],
    ["published", "Published"],
  ];

  return (
    <section className="surface px-8 py-10 sm:px-10">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Practice Index</p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-ink-900 sm:text-4xl">
            Published practices
          </h2>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="inline-flex rounded-full border border-sage-700/10 bg-white/55 p-1">
            {[
              ["source", "Source Groups"],
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
        </div>
      </div>

      <div className="mt-6 rounded-3xl border border-sage-700/10 bg-white/45 px-5 py-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-reading text-sm leading-7 text-gray-600">
            The full 112-day structure is being built gradually from the source
            text. Only reviewed practices are shown by default.
          </p>
          <button
            type="button"
            onClick={handleStructureToggle}
            className={`inline-flex min-h-10 w-fit items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
              showFullStructure
                ? "border-sage-700/20 bg-sage-100/65 text-sage-700"
                : "border-sage-700/10 bg-white/70 text-gray-600 hover:bg-white"
            }`}
            aria-pressed={showFullStructure}
          >
            {showFullStructure
              ? "Hide full 112-day structure"
              : "Show full 112-day structure"}
          </button>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {sourceFilters.map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setSourceFilter(value)}
            className={`inline-flex min-h-10 items-center justify-center rounded-full border px-4 py-2 text-sm font-semibold transition ${
              sourceFilter === value
                ? "border-sage-700/20 bg-sage-100/65 text-sage-700"
                : "border-sage-700/10 bg-white/55 text-gray-600 hover:bg-white"
            }`}
          >
            {label}
          </button>
        ))}
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

      {showFullStructure ? (
        <p className="mt-6 max-w-reading text-sm leading-7 text-gray-600">
          The full 112-day structure is shown here. Practices are opened
          gradually as each verse and explanation is reviewed.
        </p>
      ) : null}

      {!hasResults ? (
        <div className="mt-7 rounded-3xl border border-[#d7c49a]/50 bg-[#f8efd9]/55 px-5 py-5 text-sm leading-7 text-gray-600">
          <p className="font-semibold text-ink-900">
            No practices match this view yet.
          </p>
          <p className="mt-1">Try clearing the search or changing the filter.</p>
        </div>
      ) : viewMode === "source" ? (
        <div className="mt-8 space-y-10">
          {sourceGroups.map((group) => (
            <SourceGroup
              key={group.title}
              title={group.title}
              description={group.description}
              practices={group.practices}
            />
          ))}
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
