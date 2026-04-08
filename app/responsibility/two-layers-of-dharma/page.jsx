import Link from "next/link";

export const metadata = {
  title: "Two Layers of Dharma",
  description:
    "See dharma in two simple layers: universal values and what is personally yours to do.",
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
            Two Layers of Dharma
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Dharma is not one fixed rule.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            It has two layers.
          </p>
          <p className="text-base leading-8 text-stone-700 sm:text-lg">
            The first is universal. The second is personal.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Universal Dharma
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Universal Dharma applies to everyone.</p>
            <p>It includes simple values that support harmony.</p>
            <p>Do not harm unnecessarily.</p>
            <p>Be truthful.</p>
            <p>Be fair.</p>
            <p>Practice self-control.</p>
            <p>Show respect.</p>
            <p>You already recognize these.</p>
            <p>When you lie or hurt, something feels off.</p>
            <p>
              Living this way makes the mind lighter and relationships smoother.
            </p>
            <p>
              In the tradition, this is lightly called Samanya Dharma.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Personal Dharma
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Personal Dharma is not the same for everyone.</p>
            <p>It depends on role and situation.</p>
            <p>A parent has responsibilities.</p>
            <p>A leader has responsibilities.</p>
            <p>A student has responsibilities.</p>
            <p>What is right depends on your role.</p>
            <p>It depends on your stage.</p>
            <p>It depends on the situation.</p>
            <p>This is called Svadharma.</p>
            <p>It is not preference.</p>
            <p>It is appropriateness for you.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            "What is truly mine to do here?"
          </p>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Bringing both together
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Universal keeps you grounded.</p>
            <p>Personal makes it relevant.</p>
            <p>Without universal, action becomes selfish.</p>
            <p>Without personal, action becomes confused.</p>
            <p>Together, there is clarity in action.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Daily reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Am I aligned with values?</p>
            <p>Am I doing what is mine to do?</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Dharma does not need perfection.</p>
            <p>It needs attention.</p>
          </div>
          <div className="mt-5">
            <Link
              href="/responsibility/dharma-in-daily-life"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Dharma in Daily Life
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
