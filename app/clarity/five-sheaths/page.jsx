import Link from "next/link";

export const metadata = {
  title: "Five Sheaths",
  description:
    "Examine the five sheaths to see the layers of experience that are not your deepest nature.",
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
            Five Sheaths (Pancha Kosha)
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Seeing the layers you are not
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Human Problem
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              We usually take ourselves to be a mix of body, mind, emotions,
              ability, and personality.
            </p>
            <p>
              Because these are close and familiar, they feel like "me." When
              one of them changes, it feels as if we change in essence.
            </p>
            <p>
              This creates confusion. We get tied to layers of experience and
              forget to ask who knows them.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The Prakriya
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              This teaching looks at five layers of experience.
            </p>
            <p>
              First is the body, the physical layer you can see and feel.
            </p>
            <p>
              Second is energy, the layer of vitality, hunger, breath, and
              life-force.
            </p>
            <p>
              Third is the mind, where feelings, reactions, and mental
              movement appear.
            </p>
            <p>
              Fourth is the intellect, the layer that judges, decides, and
              understands.
            </p>
            <p>
              Fifth is bliss, the subtle layer of ease, quietness, and
              undisturbed comfort.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What it reveals
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              The body is known. So it is not the self.
            </p>
            <p>
              Energy is known. So it is not the self.
            </p>
            <p>
              The mind is known. So it is not the self.
            </p>
            <p>
              The intellect is known. So it is not the self.
            </p>
            <p>
              Even quiet happiness or bliss is known. So that too is not the
              self.
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
                All these feel like me
              </p>
              <p className="mt-2">
                Yes, they feel intimate. But intimacy does not make them the
                self. They are still known to you.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Without them I do not exist
              </p>
              <p className="mt-2">
                The teaching is not saying these layers do not matter. It is
                only asking whether they define what you are in essence.
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Bliss feels like self
              </p>
              <p className="mt-2">
                Bliss or quiet ease may feel very close to truth. But if it is
                experienced and later remembered, it too is known.
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
              "Consciousness is product of body-mind"
            </p>
            <p>
              That view feels natural because body and mind are the usual place
              where experience is noticed and expressed.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Resolution
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Body and mind are known. Their changes are known. Their presence
              and absence are known.
            </p>
            <p>
              That means they cannot be the final knower. Awareness is the
              constant because of which all these layers are noticed.
            </p>
            <p>
              The layers may function as instruments, but they do not create
              the knower that knows them.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Nididhyasanam
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p className="font-medium text-stone-900">
              Am I this, or the one aware of this?
            </p>
            <p>
              Use the question gently with whatever is present: body sensation,
              mood, thought, or quietness.
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
                Treating the sheaths as rigid objects
              </p>
              <p>
                They are teaching layers, not boxes you need to map perfectly.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Rejecting body or mind
              </p>
              <p>
                This inquiry is not a rejection. It is a way of seeing their
                place more clearly.
              </p>
            </div>
            <div>
              <p className="font-medium text-stone-900">
                Stopping at peaceful experience
              </p>
              <p>
                A quiet or blissful state can help, but it is still something
                known. The inquiry goes further.
              </p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Where this helps
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            This helps when identity feels crowded by roles, moods, energy,
            success, or inner states. It helps sort out what belongs to
            experience and what does not.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing Insight
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600 sm:text-lg">
            Layer after layer may feel close, personal, even essential. But
            what is close is not always what you are. This inquiry gently
            removes one identification after another, until the quiet fact of
            the knower becomes easier to notice.
          </p>
        </section>
      </div>
    </main>
  );
}
