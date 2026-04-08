import Link from "next/link";

export const metadata = {
  title: "What is Meditation?",
  description:
    "Understand meditation as a steady flow of attention that prepares the mind for clarity and self-knowledge."
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/discipline"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Discipline
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Discipline
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            What is Meditation?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Meditation is not about stopping the mind. It is about preparing it
            to stay steady, clear, and available for truth.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Many people hear the word meditation and think it means no
              thoughts at all.
            </p>
            <p>
              In this tradition, that is not the point. Meditation means the
              mind becomes more collected, quiet, and steady.
            </p>
            <p>
              It is not a separate performance. It belongs to a larger life of
              preparation, where your values, actions, and attention begin to
              support clarity instead of confusion.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What Meditation Is
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              At first the mind runs outward. It follows memory, planning,
              reaction, and distraction.
            </p>
            <p>
              Meditation begins by gently bringing it back.
            </p>
            <p>
              As the mind becomes more prepared, it can remain with one chosen
              thought, prayer, teaching, or contemplation.
            </p>
            <p>
              When that attention becomes steadier and less broken, that is
              meditation.
            </p>
            <p>
              It is a trained flow of attention, not blankness and not
              suppression.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Dharana, Dhyana, Samadhi
          </p>
          <div className="mt-6 space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Dharana
              </p>
              <p className="mt-2">
                Dharana is bringing the mind back and holding it there. The
                mind still wanders, but you keep returning it to the chosen
                focus.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Dhyana
              </p>
              <p className="mt-2">
                Dhyana is a more continuous flow of attention. The mind stays
                with the helpful thought more easily and with fewer breaks.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Samadhi
              </p>
              <p className="mt-2">
                Samadhi is absorption or assimilation. The mind is no longer so
                scattered, and the contemplation is no longer constantly being
                interrupted from within.
              </p>
            </div>
            <p>
              These are not exotic experiences. They describe a simple
              deepening of steadiness.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Meditation Is Not the First Step
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Before meditation, there is preparation.
            </p>
            <p>
              Life needs some order. Values matter. Discipline matters. The
              body needs a stable posture. The breath needs some ease. The
              senses need relief from constant distraction. The mind needs
              practice in focus.
            </p>
            <p>
              This is the logic behind the larger structure of yoga. Meditation
              does not stand alone. It becomes possible when the earlier work
              has begun to support it.
            </p>
            <p>
              In the Bhagavad Gita, yoga is not reduced to sitting quietly. It
              includes right action, right attitude, and contemplative
              discipline. Meditation belongs within that whole preparation.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What Meditation Is Not
          </p>
          <div className="mt-4 grid gap-3 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Not force.</p>
            <p>Not performance.</p>
            <p>Not spiritual entertainment.</p>
            <p>Not chasing experiences.</p>
            <p>Not becoming special.</p>
            <p>Not escaping life.</p>
          </div>
          <div className="mt-5 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              It is also not blankness and not the violent pushing away of
              thought.
            </p>
            <p>
              Meditation is a quiet training of attention. It helps the mind
              become less scattered, not less alive.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Why Meditation Matters
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Meditation helps make the mind quieter, steadier, and more
              available for self-knowledge.
            </p>
            <p>
              It supports clarity. It does not by itself produce moksha.
            </p>
            <p>
              Meditation prepares the mind. Knowledge frees.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Simple Practice
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-700 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Sit
              </p>
              <p className="mt-2">Sit quietly and let the body settle.</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Stay With One Support
              </p>
              <p className="mt-2">
                Bring attention to a prayer, mantra, teaching, or chosen
                contemplation.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Return
              </p>
              <p className="mt-2">
                When the mind wanders, return without frustration.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Keep It Simple
              </p>
              <p className="mt-2">Stay simple and steady. Let repetition do the work.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Meditation does not create the Self.
            </p>
            <p>
              It helps the mind become quiet enough to recognize what was never
              absent.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Next Step
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              When the mind becomes steadier, clarity becomes easier to receive.
            </p>
            <p>
              Meditation supports the mind. Clarity helps you see what is true.
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/clarity"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Clarity
            </Link>
            <Link
              href="/discipline"
              className="inline-flex rounded-full border border-stone-300 bg-stone-50 px-6 py-3 text-sm font-medium text-stone-700 transition hover:bg-stone-100"
            >
              Back to Discipline
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
