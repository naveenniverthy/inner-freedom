import Link from "next/link";

export const metadata = {
  title: "Why Dharma Matters",
  description:
    "Understand why dharma matters for preparing the mind for clarity and inner freedom.",
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
            Why Dharma Matters
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Inner freedom is not created. It is recognized.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            But the mind must be ready.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Why readiness matters
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>A restless mind cannot see clearly.</p>
            <p>A disturbed mind cannot stay with the teaching.</p>
            <p>A conflicted mind keeps returning to its problems.</p>
            <p>Dharma prepares the mind.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Without Dharma
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Without Dharma, actions remain unresolved.</p>
            <p>Guilt stays in the background.</p>
            <p>Avoidance keeps growing.</p>
            <p>Inner conflict does not settle.</p>
            <p>Even in silence, the mind stays disturbed.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What Dharma brings
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Dharma brings order.</p>
            <p>With Dharma, there are fewer unresolved issues.</p>
            <p>There is less disturbance.</p>
            <p>There is less regret.</p>
            <p>The mind becomes lighter.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Quietness
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Self-knowledge is subtle.</p>
            <p>It requires a quiet mind.</p>
            <p>Dharma supports this quietness.</p>
            <p className="font-medium text-stone-900">
              Dharma does not give freedom directly. It removes disturbance.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Five Keys
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Clarity helps you see.</p>
            <p>Dharma supports right action.</p>
            <p>Discipline brings steadiness.</p>
            <p>Acceptance reduces resistance.</p>
            <p>Offering brings ease.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Next Step
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>A prepared mind is not perfect.</p>
            <p>It is available.</p>
            <p>
              From here, the next key is discipline: the steadiness that helps
              the mind stay available.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/discipline"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Discipline
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
