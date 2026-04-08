import Link from "next/link";

export const metadata = {
  title: "Are You the Body or the Knower? - Foundations of Self-Knowledge",
  description:
    "Question the assumption that you are only the body and begin to inquire into the knower.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Foundations of Self-Knowledge
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson 5
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Are you the body or the knower?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In the last lesson, we looked at misidentification: taking what is
            known to be what we are. Here we begin to examine that mistake more
            carefully.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Let us begin with the body. It is close, familiar, and always
              present in experience. We feel its weight, its energy, its
              comfort, its pain, its movement, and its limits.
            </p>
            <p>
              In that sense, the body is an object of experience. It is
              something known. You know hunger, tiredness, tension, warmth, and
              sensation. You know the body as it appears to you.
            </p>
            <p>
              So a clear question begins to open: if the body is known, can the
              known be you? Or are you the one to whom the body is known?
            </p>
            <p>
              The body changes throughout life. It grows, matures, weakens,
              heals, tires, and ages. The body you had as a child is not the
              body you have now. Yet all of those changes have been known.
            </p>
            <p>
              This suggests something important. If change in the body is known,
              then the knower cannot be changing in the same way as the body.
              There is an unbroken presence because of which the body and its
              changes are noticed.
            </p>
            <p>
              This is not a rejection of the body. The body matters. It is part
              of life, relationship, action, and care. Vedanta is not asking
              you to deny or neglect it. It is only asking you to see clearly
              that the body is known.
            </p>
            <p>
              Once this is seen, the same inquiry naturally extends further.
              Thoughts are known. Emotions are known. Sensations are known. The
              pattern is the same: what is known is one thing, and the knower
              is another.
            </p>
            <p>
              For now, it is enough to stay with this simple clarity. The body
              appears in your experience, and you are aware of it. This opens
              the door to the next inquiry: if you are not merely the body,
              then what about the mind?
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Right now, can you notice the body as something experienced?
            </p>
            <p>
              What has changed in the body over the years, and what has been
              present to know those changes?
            </p>
            <p>
              If the body is known, what does that suggest about the one who
              knows it?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/6"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
