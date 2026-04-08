import Link from "next/link";

export const metadata = {
  title: "Dharma vs Preference",
  description:
    "See the difference between what feels comfortable and what is right to do.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/responsibility"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Responsibility
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Responsibility
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Dharma vs Preference
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Much of inner conflict begins by confusing two things:
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            What I feel like doing.
          </p>
          <p className="text-base leading-8 text-stone-700 sm:text-lg">
            What is right to do.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Preference
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Preference is personal.</p>
            <p>It comes from comfort, habit, fear, mood, and desire.</p>
            <p>Because of that, it changes easily.</p>
            <p>What feels right in one mood can feel different in another.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Dharma
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Dharma is different.</p>
            <p>It is about what is appropriate, true, responsible, and aligned.</p>
            <p>It is steadier than mood and convenience.</p>
            <p>Sometimes preference and Dharma match.</p>
            <p>Sometimes they do not.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Examples
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              You may prefer to avoid a hard conversation, but Dharma asks you
              to speak.
            </p>
            <p>
              You may prefer comfort, but Dharma asks for effort.
            </p>
            <p>
              You may prefer silence, but Dharma asks you to stand up.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Difference
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p className="font-medium text-stone-900">
              Preference says: "What do I feel like doing?"
            </p>
            <p className="font-medium text-stone-900">
              Dharma asks: "What is the right thing here?"
            </p>
            <p>Preference changes with mood and convenience.</p>
            <p>Dharma is steadier.</p>
            <p>
              Preference is not always wrong, but it cannot lead when it
              conflicts with what is right.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              "Am I choosing this because it is right, or only because it is
              easier?"
            </p>
            <p>
              "If I were not afraid, lazy, or attached, what would be the
              appropriate action here?"
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Next Step
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Living by Dharma does not mean perfection.</p>
            <p>It means letting wisdom lead more than mood.</p>
            <p>Preference says, "I want."</p>
            <p>Dharma asks, "What is to be done?"</p>
            <p>When Dharma becomes stronger than preference, the mind matures.</p>
          </div>
          <div className="mt-5">
            <Link
              href="/responsibility/why-dharma-matters"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Why Dharma Matters
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
