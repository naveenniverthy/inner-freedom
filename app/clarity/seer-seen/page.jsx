import Link from "next/link";

export const metadata = {
  title: "Seer-Seen",
  description:
    "Use the seer-seen teaching to distinguish awareness from what is experienced.",
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
            Seer–Seen (Drg–Drshya)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Seeing clearly what you are, and what you are not.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Human Problem
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Most of us take the body and mind to be the self. That feels
              natural because they are so close to us.
            </p>
            <p>
              When the body is tired, we say, "I am tired" and mean more than a
              condition. When the mind is restless, we say, "I am restless" as
              though restlessness defines what we are.
            </p>
            <p>
              From there, every change in body or mind feels deeply personal.
              Fear, strain, and confusion grow from this mix-up.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Prakriya
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p className="font-medium text-stone-900">
              What is seen is not the seer.
            </p>
            <p>Body is seen. So the body is not the seer.</p>
            <p>Thoughts are seen. So thoughts are not the seer.</p>
            <p>Feelings are seen. So feelings are not the seer.</p>
            <p>The changing mind is seen. So the mind is not the seer.</p>
            <p>
              The seer is the one to whom all of this is known: awareness
              itself.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What it reveals
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>You are the seer, the awareness to which experience appears.</p>
            <p>You are not the body, which is known.</p>
            <p>You are not the mind, which is also known.</p>
            <p>
              Body and mind matter in life, but they are not your essential
              nature.
            </p>
            <p>
              Here, "seer" does not mean the ego or a thinker standing apart.
              It means the awareness because of which body, mind, and world are
              known.
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
                Doubt about body
              </p>
              <p className="mt-2">
                The body is intimate, but it is still experienced. You know its
                age, shape, comfort, pain, and change. What is known cannot be
                the knower.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Doubt about thoughts
              </p>
              <p className="mt-2">
                Thoughts come and go. Some are clear, some confused, some
                helpful, some painful. Since they are noticed, they cannot be
                what you are in essence.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Doubt about feeling affected
              </p>
              <p className="mt-2">
                Experience can still affect the body and mind. This teaching is
                not denying that. It is only showing that the affected part is
                what is observed, not the awareness that knows it.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Purvapaksha
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-tight text-stone-900 sm:text-3xl">
            A common view today
          </h2>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p className="font-medium text-stone-900">
              "Consciousness is produced by the brain"
            </p>
            <p>
              The brain is certainly part of the body and closely linked with
              thought, memory, and perception. Vedanta does not deny that.
            </p>
            <p>
              But the brain too is something known. It belongs to the field of
              what can be observed, studied, measured, and described.
            </p>
            <p>
              The teaching here is simple: whatever is known cannot be the
              knower. So the brain may be an instrument in experience, but it
              does not explain away the awareness because of which all
              instruments are known.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Nididhyasanam
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Sit quietly for a moment and notice a thought as it appears.
            </p>
            <p className="font-medium text-stone-900">
              Am I the thought, or the one aware of it?
            </p>
            <p>
              Stay with that question gently. Let the mind become simple.
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
                Turning it into a slogan
              </p>
              <p>
                Repeating "I am awareness" without understanding does not help
                much. The value is in clear seeing, not in new language.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Rejecting the body or mind
              </p>
              <p>
                This teaching is not asking you to dismiss them. It is only
                helping you place them correctly.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Expecting instant peace
              </p>
              <p>
                Clarity may come before emotional patterns fully settle. The
                understanding is still valuable even when old reactions remain.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Where this helps
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            This clarity helps by reducing confusion about who you are. It does
            not always remove emotion at once, but it changes the basis from
            which you meet emotion.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing Insight
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
            The body changes. Thoughts change. Feelings change. What this
            inquiry offers is a calm shift in understanding: what you truly are
            is not lost in those changes. You are the one to whom they appear,
            the quiet knower present through them all.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Continue
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm font-medium sm:flex-row sm:flex-wrap">
            <Link
              href="/clarity"
              className="inline-flex rounded-full bg-stone-200 px-5 py-3 text-stone-800 transition hover:bg-stone-300"
            >
              Previous: Clarity
            </Link>
            <Link
              href="/clarity/snake-rope"
              className="inline-flex rounded-full bg-stone-900 px-5 py-3 text-stone-50 transition hover:bg-stone-800"
            >
              Next: Snake-Rope
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
