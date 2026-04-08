import Link from "next/link";

export const metadata = {
  title: "Offering",
  description:
    "Learn Ishvara Arpana Buddhi, the attitude of offering action into the total order of life."
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
            Offering is an attitude. Before action, you pause and recognize:
            this is not just my action, I offer it. Nothing changes outside,
            but something shifts inside.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            <span className="font-medium text-stone-900">In one line:</span>
            {" "}Act fully, offer the action, and release the burden of
            controlling the result.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-12">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              The action becomes lighter. The pressure reduces. The sense of
              doership softens.
            </p>
            <p>
              In Vedanta, this attitude is called Ishvara Arpana Buddhi. It is
              one half of Karma Yoga: acting sincerely while understanding that
              results arise through a total order much larger than your
              individual effort.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What Is Ishvara?
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Ishvara is not just a deity.</p>
            <p>
              In Vedanta, Ishvara is the total order of life: the intelligence,
              the laws, and the cause and effect that governs everything.
            </p>
            <p>
              It is the same order that makes the sun rise, the body function,
              and actions produce results. Nothing stands outside this order.
            </p>
            <p>
              When you act, the result does not come from you alone. It comes
              through this total order. Offering is not giving something away.
              It is recognizing that you are already part of it.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What Is Offering?
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Offering means you do what is to be done, but you drop the burden
              of "I am the doer who must control the result."
            </p>
            <p>
              You prepare well. You act fully. But mentally, you release
              ownership. This action is offered.
            </p>
            <p>
              This is not passivity. You still care, prepare, and respond. But
              the inner grip loosens, and the action becomes cleaner and
              lighter.
            </p>
            <p>
              This way of acting is called Karma Yoga.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Why Offering Is Difficult
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              We are driven by likes and dislikes. We want certain outcomes and
              resist others. This creates pressure, anxiety, and constant inner
              tension.
            </p>
            <p>
              "I must succeed." "This should not fail." These demands tighten
              the mind and make action heavy.
            </p>
            <p>
              Offering breaks this pressure. When the action is offered, the
              mind becomes quieter. You still act with care, but you are no
              longer tight inside.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Daily Practice
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-700 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Before action
              </p>
              <p className="mt-2">
                Pause for a moment. Say inwardly, "I offer this."
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                After action
              </p>
              <p className="mt-2">
                Let the result come as it does. Stay with the action. Release
                the rest.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Completing The Cycle
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Offering is only one half. What comes as a result is to be
              received as prasada.
            </p>
            <p>
              Success, failure, and delay are all part of the same order. This
              is explained in Acceptance.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/acceptance"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Acceptance
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
              href="/acceptance"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Acceptance
            </Link>
            <Link
              href="/five-keys"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Return to the Five Keys
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
