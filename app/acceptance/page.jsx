import Link from "next/link";

export const metadata = {
  title: "Acceptance | Five Keys to Inner Freedom"
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
            Key Four
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Acceptance
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Prasada Buddhi
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In Vedanta, prasada buddhi is the attitude of receiving what comes
            with greater composure and humility. Acceptance is the strength to
            stop fighting what has already happened.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            <span className="font-medium text-stone-900">In one line:</span>
            {" "}Receive what has come.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Acceptance does not mean liking everything. It does not mean
              passivity, weakness, or pretending pain is pleasant.
            </p>
            <p>
              It means letting reality be reality. This happened. This is what
              I feel. This is the situation in front of me now.
            </p>
            <p>
              When acceptance is missing, the mind stays in argument. It keeps
              replaying, resisting, and demanding a different past. That inner
              fight creates exhaustion.
            </p>
            <p>
              Acceptance brings energy back into the present. From there, you
              can grieve, respond, repair, or move forward with much more
              steadiness.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            What part of your inner struggle comes not from the event itself,
            but from continuing to argue with what is already here?
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
                Bring to mind one thing that has already happened today and
                gently stop retelling it in resistance for a moment.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Reflect
              </p>
              <p className="mt-2">
                What softens when you let this moment be what it is, before
                deciding what to do next?
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Transition
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Acceptance softens the struggle that comes from resisting what is
              already here.
            </p>
            <p>
              From that softness, the next key is offering: acting sincerely
              while letting the results rest in a larger order.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/ishvara-arpana-buddhi"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Offering →
            </Link>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/ishvara-arpana-buddhi"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Key: Offering
          </Link>
        </div>
      </div>
    </main>
  );
}
