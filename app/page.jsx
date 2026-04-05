import Link from "next/link";

import { getCourseLinks } from "./course-links";

const cards = [
  {
    title: "Clarity",
    subtitle: "Jnana",
    href: "/clarity",
    description:
      "See yourself and your life more clearly.",
  },
  {
    title: "Responsibility",
    subtitle: "Dharma",
    href: "/responsibility",
    description:
      "Own your choices and what is yours to do.",
  },
  {
    title: "Discipline",
    subtitle: "Sadhana",
    href: "/discipline",
    description:
      "Build steadiness through simple inner practice.",
  },
  {
    title: "Acceptance",
    subtitle: "Prasada Buddhi",
    href: "/acceptance",
    description:
      "Receive what has come with less resistance.",
  },
  {
    title: "Offering",
    subtitle: "Ishvara Arpana Buddhi",
    href: "/ishvara-arpana-buddhi",
    description:
      "Act sincerely, and let go of the results.",
  },
];

export default function Page() {
  const courseLinks = getCourseLinks();

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-8">
        <section className="rounded-[2rem] bg-white px-8 py-12 text-center shadow-sm ring-1 ring-stone-200 sm:px-12 sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Five Keys to Inner Freedom
          </p>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Inner Freedom is not something you create. It is what remains when
            confusion falls away.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            A simple framework, rooted in Advaita Vedanta, for living with
            clarity, steadiness, and freedom.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
            These five do not create freedom. They remove what hides it.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="#five-keys"
              className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Explore the Five Keys
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Start Here
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            If you are new, begin with Clarity. Read slowly, try the practice,
            and continue one key at a time.
          </p>
          <div className="mt-6">
            <Link
              href="/clarity"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Start with Clarity
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Today&apos;s Practice
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            Pick one key. Try the practice. Notice what changes.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/clarity"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Start with Clarity
            </Link>
            <Link
              href="/five-keys"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              View All Keys
            </Link>
          </div>
        </section>

        <section id="five-keys" className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">
            Five Keys
          </h2>
          <div className="mt-5 space-y-3">
            <p className="text-base leading-8 text-stone-600">
              Five simple keys for bringing this understanding into daily life.
            </p>
            <p className="text-base leading-8 text-stone-600">
              Inner freedom is not separate from life. It is discovered in the
              middle of work, relationship, uncertainty, and change.
            </p>
            {cards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="block rounded-[1.25rem] bg-stone-50 px-5 py-4 transition hover:-translate-y-0.5 hover:bg-stone-100 hover:shadow-sm"
              >
                <h3 className="text-lg font-semibold text-stone-900">
                  {card.title}
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                  {card.subtitle}
                </p>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Go Deeper
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
          <p>Rooted in Vedanta. Expressed as five simple keys for modern life.</p>
          <Link
            href="/five-keys"
            className="font-medium text-stone-600 transition hover:text-stone-800"
          >
            Five Keys
          </Link>
        </footer>
      </div>
    </main>
  );
}
