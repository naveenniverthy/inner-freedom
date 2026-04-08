import Link from "next/link";

export const metadata = {
  title: "Three States",
  description:
    "Explore waking, dream, and deep sleep to see what changes and what remains constant.",
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
            Three States (Avastha Traya)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Seeing what changes, and what remains
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Human Problem
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              In waking life, the world feels solid and continuous. In dream,
              another world appears and feels real while it lasts.
            </p>
            <p>
              Yet the waking world changes, and the dream world changes too.
              Both come and go.
            </p>
            <p>
              This raises a quiet question: if experiences keep changing, what
              is constant through them?
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Prakriya
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              In waking, you experience the body, the mind, and the outer
              world.
            </p>
            <p>
              In dream, you experience another world created within the mind.
              There too, you see, feel, think, and react.
            </p>
            <p>
              In deep sleep, there is no active world, no dream scene, and no
              clear mental activity.
            </p>
            <p>
              These three states come and go. Waking comes. Dream comes. Deep
              sleep comes. Then each one passes.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What it reveals
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Waking changes. Dream changes. Deep sleep also comes and goes.
            </p>
            <p>
              But you do not say, "I was not there." You say, "I was awake," "I
              dreamed," and "I slept."
            </p>
            <p>
              That suggests something steady across all three: the awareness
              because of which each state is later known.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Mananam
          </p>
          <div className="mt-4 space-y-6 text-base leading-8 text-stone-600 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Waking feels more real
              </p>
              <p className="mt-2">
                Yes, waking has a different order and stability. This teaching
                does not deny that. It only asks you to notice that waking too
                is a changing state.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Not aware in deep sleep
              </p>
              <p className="mt-2">
                In deep sleep there is no active object known. Still, on waking
                you say, "I slept well" or "I knew nothing." That points to a
                continuity not limited to mental activity.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Is waking just a dream?
              </p>
              <p className="mt-2">
                No. The point is not to collapse them into the same thing. The
                point is to see that both are states known to you.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Purvapaksha
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p className="font-medium text-stone-900">
              "Waking is shared, dream is private"
            </p>
            <p>
              That is true as far as ordinary experience goes. Waking has a
              shared order that dream does not.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Resolution
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Vedanta is not saying waking and dream are identical in every
              way.
            </p>
            <p>
              It is showing that both are experienced states, while you are the
              one to whom they appear.
            </p>
            <p>
              The difference between them remains, but neither defines what you
              are.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Nididhyasanam
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p className="font-medium text-stone-900">
              What is constant across all experiences?
            </p>
            <p>
              Sit with that quietly. Let attention move from changing content to
              that which does not come and go with it.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Common Mistakes
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <div>
              <p className="font-medium text-stone-900">
                Thinking waking is being denied
              </p>
              <p>
                This is not a rejection of ordinary life. It is an inquiry into
                what stays present through every state.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Treating deep sleep as blank nothing
              </p>
              <p>
                Deep sleep is used here as a pointer. It helps show that the
                absence of mental activity does not end your continuity.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Turning it into abstract philosophy
              </p>
              <p>
                The value of this prakriya is practical. It helps loosen
                identification with changing experience.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Where this helps
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            This helps when you are overly tied to the current state of mind,
            mood, or experience. It reminds you that all states pass, and that
            what you are is not limited to any one of them.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing Insight
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
            Waking comes and goes. Dream comes and goes. Deep sleep comes and
            goes. What this inquiry gently points to is not another experience,
            but the quiet continuity because of which every experience is later
            known.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Continue
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap">
            <Link
              href="/clarity/snake-rope"
              className="inline-flex rounded-full bg-stone-200 px-5 py-3 text-stone-800 transition hover:bg-stone-300"
            >
              Previous: Snake-Rope
            </Link>
            <Link
              href="/clarity/five-sheaths"
              className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-stone-50 transition hover:bg-stone-800"
            >
              Next: Five Sheaths
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
