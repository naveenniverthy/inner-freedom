import Link from "next/link";

import { getCourseLinks } from "./course-links";

const cards = [
  {
    title: "Understanding your true nature",
    href: "/understanding",
    description:
      "A simple look at what stays constant beneath thoughts, feelings, and changing roles.",
  },
  {
    title: "Why self-knowledge matters",
    href: "/why",
    description:
      "Why clarity about yourself changes the way you seek peace, meaning, and stability.",
  },
  {
    title: "Preparation and practice",
    href: "/practice",
    description:
      "The inner preparation that helps the mind become steady, open, and ready to see clearly.",
  },
  {
    title: "Living with clarity",
    href: "/living",
    description:
      "What it means to meet work, relationships, and daily life with less confusion and more ease.",
  },
];

export default function Page() {
  const courseLinks = getCourseLinks();

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-8">
        <section className="rounded-[2rem] bg-white px-8 py-12 text-center shadow-sm ring-1 ring-stone-200 sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Inner Freedom
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Inner Freedom begins with understanding yourself
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            A quiet, practical introduction to understanding yourself more
            clearly, and meeting life with a little more steadiness, peace, and
            freedom.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/dashboard"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Begin
            </Link>
            <Link
              href="#pathways"
              className="rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Explore
            </Link>
            <Link
              href="/course"
              className="rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Course
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">
            Why this matters
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-stone-600">
            <p>
              Many of us spend years trying to feel whole through outer change.
            </p>
            <p>But deep peace does not come from circumstances alone.</p>
            <p>It begins with seeing yourself more clearly.</p>
          </div>
        </section>

        <section id="pathways" className="grid scroll-mt-8 gap-4 sm:grid-cols-2">
          {cards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-[1.75rem] bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-stone-900">
                {card.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {card.description}
              </p>
            </Link>
          ))}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">Vedanta</h2>
          <p className="mt-5 text-base leading-8 text-stone-600">
            Vedanta is a living tradition of self-knowledge. It does not ask
            you to believe something new. It invites you to look carefully at
            what is already true.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Courses
          </p>
          <div className="mt-4 space-y-3">
            {courseLinks.map((course) => (
              <Link
                key={course.href}
                href={course.href}
                className="flex items-center justify-between gap-4 rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <div>
                  <h2 className="text-lg font-semibold text-stone-900">
                    {course.title}
                  </h2>
                  <p className="mt-1 text-sm leading-7 text-stone-600">
                    {course.description}
                  </p>
                </div>
                <span className="pt-1 text-sm font-medium text-stone-600">
                  Open
                </span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-center gap-3 pb-2 text-center text-sm text-stone-500">
          <p>Rooted in the vision of Vedanta. Written for modern life.</p>
          <Link
            href="/course"
            className="font-medium text-stone-600 transition hover:text-stone-800"
          >
            Course
          </Link>
        </footer>
      </div>
    </main>
  );
}
