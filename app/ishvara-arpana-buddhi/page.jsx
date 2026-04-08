import Link from "next/link";

export const metadata = {
  title: "Offering",
  description:
    "Learn the spirit of offering action fully while letting the results belong to the larger order of life."
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/five-keys"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Five Keys
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Key Five
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Offering
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Ishvara Arpana Buddhi
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In Vedanta, Ishvara Arpana Buddhi is the attitude of offering your
            action into Ishvara, the larger order of life. Act sincerely,
            offer the action, and let the results belong to that order.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            <span className="font-medium text-stone-900">In one line:</span> Act
            fully, let go of results.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-12">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              In Vedanta, this attitude is called Ishvara Arpana Buddhi. It is
              a simple but powerful shift in attitude. You do what is to be
              done, as carefully and sincerely as you can, and you inwardly
              offer that action to Ishvara, the total order in which all
              results arise.
            </p>
            <p>
              This softens the ego's burden. You are no longer acting only for
              self-image, fear, or control. Your effort becomes cleaner and
              lighter.
            </p>
            <p>
              It also helps you release your tight grip on outcomes. Results
              come through many factors, not through your effort alone. When
              you remember that, life becomes less heavy.
            </p>
            <p>
              This is not passivity. It is wholehearted action joined with
              humility and trust. You still care. You still prepare. You still
              show up fully. But you stop carrying the whole universe on your
              shoulders.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            What changes when you give your best to an action, but stop asking
            the result to prove your worth?
          </p>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Daily Practice
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-700 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Try this
              </p>
              <p className="mt-2">
                Before one action today, pause inwardly and offer it. After the
                action, notice the urge to cling to the result and let it ease.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Reflect
              </p>
              <p className="mt-2">
                What changes when the action is wholehearted, but the result is
                allowed to belong to life?
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            How These Work Together
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Responsibility shows what is to be done. Discipline gives you the
              steadiness to do it well. Offering brings the right attitude to
              action.
            </p>
            <p>
              Together, they help daily life become part of the path.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/discipline"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Back to Discipline
            </Link>
            <Link
              href="/five-keys"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Return to Five Keys
            </Link>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Continue
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/five-keys"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Return to the Five Keys
            </Link>
            <Link
              href="/course"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Explore Foundations of Self-Knowledge
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
