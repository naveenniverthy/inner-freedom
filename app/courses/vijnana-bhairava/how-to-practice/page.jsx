import Link from "next/link";

export const metadata = {
  title: "How to Practice the 112 Days of Awareness | MokshaKeys",
  description:
    "A gentle guide for practicing the Vijnana Bhairava contemplations with steadiness, care, and attention.",
};

const sections = [
  {
    title: "Move Slowly",
    body: "This is not a race. One day can be practiced for several days, and some contemplations may stay with you longer than expected.",
  },
  {
    title: "Practice Gently",
    body: "Do not force breath, emotion, energy, or concentration. Let attention become steady without strain.",
  },
  {
    title: "Do Not Chase Experiences",
    body: "The purpose is not mystical experience. The purpose is refined attention and recognition of awareness in ordinary experience.",
  },
  {
    title: "Journal Lightly",
    body: "A few simple notes can help: what was noticed, what felt clear, and what felt forced. There is no need to analyze everything.",
  },
  {
    title: "Stay Grounded",
    body: "Stay connected to daily responsibilities, relationships, work, and care for the body. Practice should support clear living, not replace it.",
  },
  {
    title: "Return to Awareness",
    body: "If a practice creates discomfort, stop and return to simple breathing. Awareness is not far away; it is present in this simple return.",
  },
];

export default function VijnanaBhairavaPracticeGuidePage() {
  return (
    <main className="min-h-screen bg-sand-100 px-6 py-12 text-ink-900 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[760px] flex-col gap-6">
        <Link
          href="/courses/vijnana-bhairava"
          className="w-fit text-sm font-semibold text-sage-500 transition hover:text-sage-700"
        >
          Back to Course
        </Link>

        <section className="surface px-8 py-12 sm:px-10 sm:py-16">
          <p className="eyebrow">Practice Guide</p>
          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight text-ink-900 sm:text-5xl">
            How to Practice the 112 Days of Awareness
          </h1>
          <div className="mt-7 space-y-4 text-base leading-8 text-gray-700 sm:text-lg">
            <p>
              These contemplations are meant to be approached with steadiness
              and care. Some may suit a person more than others.
            </p>
            <p>
              Move gently, stay grounded, and let the practice support clearer
              attention in ordinary life.
            </p>
          </div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/courses/vijnana-bhairava" className="btn-secondary">
              Back to Course
            </Link>
            <Link href="/courses/vijnana-bhairava/day-1" className="btn-primary">
              Start Day 1
            </Link>
          </div>
        </section>

        <section className="grid gap-4">
          {sections.map((section, index) => (
            <article
              key={section.title}
              className="surface px-8 py-8 sm:px-10"
            >
              <p className="text-sm font-semibold text-sage-500">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-ink-900">
                {section.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-gray-700">
                {section.body}
              </p>
            </article>
          ))}
        </section>

        <section className="surface px-8 py-8 sm:px-10">
          <p className="text-base leading-8 text-gray-700">
            For source notes and translation approach, see{" "}
            <Link
              href="/courses/vijnana-bhairava/sources"
              className="font-semibold text-sage-700 underline decoration-sage-300 underline-offset-4 transition hover:text-ink-900"
            >
              Sources and Acknowledgements
            </Link>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
