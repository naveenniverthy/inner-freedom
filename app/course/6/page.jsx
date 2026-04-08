import Link from "next/link";

export const metadata = {
  title: "Thoughts Are Known - So What Are You? - Foundations of Self-Knowledge",
  description:
    "Notice that thoughts are known in awareness and ask what that reveals about you.",
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
            Lesson 6
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Thoughts are known — so what are you?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In the last lesson, we looked at the body as something known. Now
            we turn to something even closer: the mind.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Thoughts seem deeply personal. Plans, memories, opinions, fears,
              hopes, and private commentary can feel like the center of who we
              are.
            </p>
            <p>
              But thoughts are also objects of experience. You know them as
              they appear. A thought arrives, stays for a moment, changes, and
              passes. You do not need anyone to prove this. It is visible in
              your own experience.
            </p>
            <p>
              So the same question returns. If thoughts are known, can the
              known be you? Or are you the one to whom thoughts appear?
            </p>
            <p>
              Thoughts come and go all day long. Some are clear. Some are
              confused. Some are gentle. Some are painful. Some repeat for
              years, while others vanish almost as soon as they arise. But they
              all share one feature: they are known.
            </p>
            <p>
              Because they are known, they cannot be the whole of what you are.
              The known changes. The knower is present to know the change.
            </p>
            <p>
              This points to something steady. Not a thought, but the awareness
              in whose presence thoughts are noticed. That awareness does not
              need each thought to be calm or perfect in order to be present.
            </p>
            <p>
              This is why there is no need to stop thoughts before inquiry can
              begin. The point is not to create a blank mind. The point is to
              notice that even a busy mind is known.
            </p>
            <p>
              Once this becomes clear, the inquiry deepens naturally. If
              thoughts are observed, then what exactly is the observer? That is
              the next step.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Can you notice a thought right now as something appearing in your
              experience?
            </p>
            <p>
              What happens to a thought after it appears? Does it stay, or does
              it pass?
            </p>
            <p>
              If thoughts are known, what does that suggest about the presence
              that knows them?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/7"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
