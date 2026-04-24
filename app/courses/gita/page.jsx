import Link from "next/link";

export const metadata = {
  title: "Bhagavad Gita Course | Moksha",
  description:
    "A simple, practical course on the Bhagavad Gita through the Five Keys: Clarity, Responsibility, Discipline, Offering, and Acceptance.",
};

const transformationPoints = [
  "Move from confusion to clarity",
  "Move from stress to steadiness",
  "Move from reaction to conscious action",
  "Move from dependence to inner freedom",
];

const questionPoints = [
  "Who am I?",
  "What is my duty?",
  "How should I live?",
  "How do I find freedom?",
];

const fiveKeys = [
  {
    title: "Clarity",
    sanskrit: "Atma-Jnana",
    description: "Understanding who you truly are.",
  },
  {
    title: "Responsibility",
    sanskrit: "Dharma",
    description: "Doing what is right in life.",
  },
  {
    title: "Discipline",
    sanskrit: "Sadhana",
    description: "Preparing the mind.",
  },
  {
    title: "Offering",
    sanskrit: "Ishvara Arpana Buddhi",
    description: "Acting with the right attitude.",
  },
  {
    title: "Acceptance",
    sanskrit: "Prasada Buddhi",
    description: "Receiving results gracefully.",
  },
];

const courseFormat = [
  "Short lessons (5-10 minutes)",
  "One verse at a time",
  "Simple explanations",
  "Practical reflections",
];

export default function GitaCoursePage() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Course
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Bhagavad Gita - A Guide for Everyday Life
          </h1>

          <div className="mt-6 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>You may have a good life. But still feel something is missing.</p>
            <p>
              Stress, confusion, overthinking, pressure, expectations - they
              do not go away with success.
            </p>
            <p>
              The <strong className="font-semibold text-stone-900">Bhagavad Gita</strong>{" "}
              is not a religious text. It is a guide to handle life clearly,
              steadily, and freely.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">
            What this course helps you do
          </h2>
          <ul className="mt-5 space-y-3 text-base leading-7 text-stone-600">
            {transformationPoints.map((point) => (
              <li key={point} className="rounded-2xl bg-white px-5 py-4">
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">
            What is the Bhagavad Gita?
          </h2>

          <div className="mt-5 space-y-4 text-base leading-8 text-stone-600">
            <p>
              The Gita is a dialogue between Krishna and Arjuna in a moment of
              deep crisis. Arjuna is confused about what to do in life.
            </p>
            <p>That confusion is not his alone - it is universal.</p>
            <p>The Gita answers:</p>
          </div>

          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {questionPoints.map((point) => (
              <li
                key={point}
                className="rounded-[1.25rem] bg-stone-50 px-5 py-4 text-sm font-medium text-stone-700"
              >
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">The Five Keys</h2>
          <p className="mt-4 text-base leading-8 text-stone-600">
            This course organizes the entire Gita into five simple ideas.
          </p>

          <div className="mt-6 grid gap-4">
            {fiveKeys.map((key) => (
              <div
                key={key.title}
                className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-5"
              >
                <h3 className="text-lg font-semibold text-stone-900">
                  {key.title}{" "}
                  <span className="text-sm font-medium text-stone-500">
                    ({key.sanskrit})
                  </span>
                </h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">
                  {key.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <h2 className="text-2xl font-semibold text-stone-900">
            How this course works
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {courseFormat.map((item) => (
              <li
                key={item}
                className="rounded-[1.25rem] bg-stone-50 px-5 py-4 text-sm leading-7 text-stone-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="pt-2">
          <Link
            href="/courses/gita-keys/clarity/lesson-1-2-11"
            className="inline-flex w-full items-center justify-center rounded-[1.25rem] bg-stone-900 px-6 py-4 text-center text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Start the Course
          </Link>
        </section>
      </div>
    </main>
  );
}
