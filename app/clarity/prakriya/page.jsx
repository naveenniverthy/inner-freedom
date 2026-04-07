import Link from "next/link";

export const metadata = {
  title: "What is a Prakriya | Clarity | Inner Freedom",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/clarity"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Clarity
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Clarity
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            What is a Prakriya
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            A method to help you see clearly
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Opening
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              A prakriya is a teaching method used in Vedanta. It is a way of
              helping the mind see more clearly.
            </p>
            <p>
              It does not create truth. It helps remove confusion about what is
              already true.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Why it is needed
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Most of us already live with strong assumptions about who we are.
            </p>
            <p>
              We say, "I am the body." We say, "I am the mind." These feel
              obvious, so we rarely question them.
            </p>
            <p>
              A prakriya helps correct these mistakes gently. It gives the mind
              another way to look.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Key idea
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>A prakriya is a method of seeing.</p>
            <p>Different prakriyas remove different confusions.</p>
            <p>No single prakriya is final.</p>
            <p>
              When the confusion goes, the method is no longer needed.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Simple examples
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Seer-Seen helps separate you from what you experience.
            </p>
            <p>
              Snake-Rope helps show how error happens.
            </p>
            <p>
              Pot-Space helps show that you are never truly limited.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            How to use this section
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Read carefully. Let the teaching land.
            </p>
            <p>
              Think it through until the doubt becomes smaller.
            </p>
            <p>
              Then live with it quietly, so it becomes natural in daily life.
            </p>
            <p>
              In simple terms: read, think, live it.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing insight
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
            These are not ideas to collect, but ways to see. Each one removes a
            layer of confusion.
          </p>
        </section>
      </div>
    </main>
  );
}
