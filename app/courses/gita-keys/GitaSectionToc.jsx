import Link from "next/link";
import { getSection } from "./courseData";

export default function GitaSectionToc({ sectionKey, currentLessonSlug }) {
  const section = getSection(sectionKey);
  const activeIndex = section
    ? section.lessons.findIndex((lesson) => lesson.slug === currentLessonSlug)
    : -1;

  if (!section) {
    return null;
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
      <div className="border-b border-stone-100 pb-4">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-stone-400">
          {section.lessons.length} lessons
        </p>
        <h2 className="mt-2 text-lg font-semibold text-stone-900">
          {section.title}
        </h2>
        <p className="mt-1 text-sm leading-6 text-stone-500">
          {section.subtitle}
        </p>
      </div>

      <ol className="mt-4 space-y-2">
        {section.lessons.map((lesson, index) => {
          const isActive = lesson.slug === currentLessonSlug;
          const isComplete = activeIndex > index;

          return (
            <li key={lesson.slug}>
              <Link
                href={`/courses/gita-keys/${section.key}/${lesson.slug}`}
                className={[
                  "block rounded-xl border px-3 py-3 transition",
                  isActive
                    ? "border-stone-300 bg-stone-100 text-stone-900"
                    : "border-transparent hover:border-stone-200 hover:bg-stone-50",
                  isComplete ? "text-stone-500" : "text-stone-700"
                ].join(" ")}
              >
                <div className="flex gap-3">
                  <span
                    className={[
                      "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-medium",
                      isActive
                        ? "bg-stone-700 text-white"
                        : isComplete
                          ? "bg-stone-200 text-stone-600"
                          : "bg-stone-100 text-stone-500"
                    ].join(" ")}
                  >
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-medium leading-5">
                      {lesson.title}
                    </span>
                    <span className="mt-1 block text-xs text-stone-400">
                      {lesson.verse}
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
