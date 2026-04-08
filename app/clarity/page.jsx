import Link from "next/link";

export const metadata = {
  title: "Clarity",
  description:
    "Begin with clarity and inquire into the difference between awareness and what is known."
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
            Key One
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Clarity
          </h1>
          <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Jnana
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Most of us move through life assuming we are the body, the mind,
            our emotions, and our story. Clarity begins when that assumption is
            gently questioned.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            <span className="font-medium text-stone-900">In one line:</span> You
            are the knower, not what is known.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Start Here
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <div>
              <p className="font-medium text-stone-900">
                Step 1 - What is Clarity?
              </p>
              <p className="mt-1">
                A simple introduction to what clarity means on this path, and
                why confusion runs deeper than missing information.
              </p>
              <Link
                href="/clarity/what-is-clarity"
                className="mt-3 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read What is Clarity? →
              </Link>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Step 2 - What is a Prakriya
              </p>
              <p className="mt-1">
                A simple introduction to the teaching methods used to remove
                confusion.
              </p>
              <Link
                href="/clarity/prakriya"
                className="mt-3 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read What is a Prakriya →
              </Link>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Step 3 - Seer-Seen
              </p>
              <p className="mt-1">
                See the difference between what you experience and what you
                truly are.
              </p>
              <Link
                href="/clarity/seer-seen"
                className="mt-3 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read Seer-Seen →
              </Link>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Step 4 - Snake-Rope
              </p>
              <p className="mt-1">
                See how confusion gets projected onto what is actually there.
              </p>
              <Link
                href="/clarity/snake-rope"
                className="mt-3 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read Snake-Rope →
              </Link>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Step 5 - Three States
              </p>
              <p className="mt-1">
                Notice what changes across waking, dream, and deep sleep, and
                what remains.
              </p>
              <Link
                href="/clarity/three-states"
                className="mt-3 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read Three States →
              </Link>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Step 6 - Five Sheaths
              </p>
              <p className="mt-1">
                See the layers of experience clearly, without taking them to be
                the self.
              </p>
              <Link
                href="/clarity/five-sheaths"
                className="mt-3 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
              >
                Read Five Sheaths →
              </Link>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Where Inquiry Begins
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Clarity begins when confusion is noticed.
            </p>
            <p>
              Inquiry begins when we stop taking every thought, feeling, role,
              and experience to be the whole of who we are.
            </p>
            <p>
              One of the simplest ways to begin is to look carefully at the
              difference between what is seen and the one who sees.
            </p>
            <p>
              This is not abstract philosophy. It is a way of seeing more
              truthfully.
            </p>
          </div>
          <Link
            href="/clarity/seer-seen"
            className="mt-5 inline-flex text-sm font-medium text-stone-700 transition hover:text-stone-900"
          >
            Begin with Seer-Seen →
          </Link>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              The central confusion is simple. We mistake ourselves for what we
              experience.
            </p>
            <p>
              A thought appears, and we say, "This is me." A feeling moves
              through, and we say, "This is what I am." A role changes, and it
              feels as though we have changed with it.
            </p>
            <p>
              This is misidentification. It is the habit of taking the changing
              to be the self.
            </p>
            <p>
              Much of our struggle grows from this confusion. We hold tightly
              to what comes and goes, and then wonder why life feels unstable.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Vedanta offers a clear shift: you are the knower, not what is
              known.
            </p>
            <p>
              Thoughts are known. Feelings are known. Sensations are known. The
              body is known. Even the sense of "my life" is known.
            </p>
            <p>
              What is known changes. The knower is that because of which all of
              it is noticed.
            </p>
            <p>
              Clarity is not about becoming special. It is about seeing this
              difference clearly enough that confusion begins to fall away.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Moksha
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              In Advaita Vedanta, this freedom is called moksha.
            </p>
            <p>
              It is not something action produces in time. It is freedom from
              taking yourself to be limited, a freedom that becomes clear when
              the basic confusion about yourself begins to clear.
            </p>
            <p>
              Nothing new is created. What changes is understanding.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Three Steps
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Clarity deepens through three simple movements: listening,
              reflection, and assimilation.
            </p>
            <p>
              First you hear the teaching clearly. Then you reflect until doubt
              begins to soften. Over time, it settles more deeply and becomes
              something lived.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Notice Right Now
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Notice a thought appearing right now. Notice that it is known.
            </p>
            <p>
              Notice a feeling or sensation in the body. That too is known.
            </p>
            <p>
              Stay with the simple fact of knowing. The experience changes. The
              knowing of it remains.
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
                Try this
              </p>
              <p className="mt-2">
                A few times today, pause and notice one thought, feeling, or
                sensation. Then quietly notice that it is known.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Reflect
              </p>
              <p className="mt-2">
                What changes when you remember that you are the knower of the
                experience, not the passing experience itself?
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
              Clarity helps you see what is true, and begins to loosen the
              confusion that shapes so much of life.
            </p>
            <p>
              Once something is seen more clearly, the next step is
              responsibility: living from that clarity in the choices that are
              yours to make.
            </p>
          </div>
          <div className="mt-5">
            <Link
              href="/responsibility"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Responsibility →
            </Link>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/responsibility"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Key: Responsibility
          </Link>
        </div>
      </div>
    </main>
  );
}
