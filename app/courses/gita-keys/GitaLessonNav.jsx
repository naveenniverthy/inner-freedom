import Link from "next/link";
import {
  courseTitle,
  getLesson,
  getLessonIndex,
  getNextLesson,
  getPreviousLesson,
  getSection,
  getTotalLessonCount
} from "./courseData";

function NavButton({ lesson, direction }) {
  const label = direction === "previous" ? "Previous" : "Next";

  if (!lesson) {
    return (
      <span className="rounded-xl border border-stone-200 px-4 py-2 text-sm font-medium text-stone-300">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={lesson.href}
      className="rounded-xl border border-stone-200 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-300 hover:bg-stone-50"
    >
      {label}
    </Link>
  );
}

export default function GitaLessonNav({ sectionKey, lessonSlug }) {
  const section = getSection(sectionKey);
  const lesson = getLesson(sectionKey, lessonSlug);

  if (!section || !lesson) {
    return null;
  }

  const globalIndex = getLessonIndex(sectionKey, lessonSlug);
  const totalCount = getTotalLessonCount();
  const sectionIndex = lesson.sectionLessonIndex;
  const progress = Math.round((globalIndex / totalCount) * 100);
  const previousLesson = getPreviousLesson(sectionKey, lessonSlug);
  const nextLesson = getNextLesson(sectionKey, lessonSlug);
  const sectionHref = `/courses/gita-keys/${section.key}`;

  return (
    <nav className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-stone-200">
      <div className="space-y-4">
        <div className="text-sm leading-6 text-stone-500">
          <Link href="/courses/gita-keys" className="hover:text-stone-700">
            {courseTitle}
          </Link>
          <span className="px-2 text-stone-300">/</span>
          <Link href={sectionHref} className="hover:text-stone-700">
            {section.title}
          </Link>
          <span className="px-2 text-stone-300">/</span>
          <span className="text-stone-700">{lesson.title}</span>
        </div>

        <div>
          <p className="text-sm font-medium text-stone-700">
            Lesson {globalIndex} of {totalCount}
          </p>
          <p className="mt-1 text-sm text-stone-500">
            Section progress: {sectionIndex} of {lesson.sectionLessonTotal} in{" "}
            {section.title}
          </p>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-stone-100">
          <div
            className="h-full rounded-full bg-stone-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <NavButton lesson={previousLesson} direction="previous" />
          <NavButton lesson={nextLesson} direction="next" />
          <Link
            href={sectionHref}
            className="rounded-xl bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
          >
            Section
          </Link>
          <Link
            href="/courses/gita-keys"
            className="rounded-xl bg-stone-100 px-4 py-2 text-sm font-medium text-stone-700 transition hover:bg-stone-200"
          >
            Course Home
          </Link>
        </div>
      </div>
    </nav>
  );
}
