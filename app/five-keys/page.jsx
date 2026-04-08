import Link from "next/link";

const keys = [
  {
    title: "Clarity",
    subtitle: "Jnana",
    href: "/clarity",
    body:
      "See yourself and your life more clearly, so confusion begins to loosen."
  },
  {
    title: "Responsibility",
    subtitle: "Dharma",
    href: "/responsibility",
    body:
      "Own your choices and effort without carrying what never belonged to you."
  },
  {
    title: "Discipline",
    subtitle: "Sadhana",
    href: "/discipline",
    body:
      "Build the steadiness that allows understanding to stay present in daily life."
  },
  {
    title: "Acceptance",
    subtitle: "Prasada Buddhi",
    href: "/acceptance",
    body:
      "Stop fighting what has already happened, and meet reality with honesty."
  },
  {
    title: "Offering",
    subtitle: "Ishvara Arpana Buddhi",
    href: "/ishvara-arpana-buddhi",
    body:
      "Act wholeheartedly, offer the results, and let trust soften the strain of living."
  }
];

export const metadata = {
  title: "Five Keys",
  description:
    "Explore the five key themes that shape the path of inner freedom: clarity, responsibility, discipline, acceptance, and offering."
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Home
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Five Keys to Inner Freedom
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            A simple framework for inner freedom
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            The five keys are not rules to perform perfectly. They are five
            steady reminders for how to understand yourself and meet life more
            wisely.
          </p>
        </section>

        <section className="grid gap-4 sm:grid-cols-2">
          {keys.map((key, index) => (
            <Link
              key={key.title}
              href={key.href}
              className="rounded-[1.75rem] bg-white px-6 py-6 shadow-sm ring-1 ring-stone-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
                Key {index + 1}
              </p>
              <h2 className="mt-3 text-xl font-semibold text-stone-900">
                {key.title}
              </h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-stone-500">
                {key.subtitle}
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {key.body}
              </p>
            </Link>
          ))}
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">
            How they work together
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-stone-600">
            <p>
              Clarity helps you see what is true. Responsibility helps you act
              from what is yours to do.
            </p>
            <p>
              Discipline gives your life shape. Acceptance softens resistance
              to what has already come.
            </p>
            <p>
              Offering brings trust, humility, and release into action.
              Together, they create space for steadiness and freedom.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
