import Link from "next/link";

export const metadata = {
  title: "Awareness Is Not an Object - Foundations of Self-Knowledge",
  description:
    "Explore why awareness cannot be treated as another thing to experience or grasp.",
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
            Lesson 8
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Awareness is not an object
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In the last lesson, we distinguished the observer from the
            observed. Now we take one more careful step.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              A common assumption is that the observer must be some kind of
              inner thing hidden inside us. Perhaps a subtle witness sitting in
              the mind, watching everything else.
            </p>
            <p>
              But if something can be experienced, noticed, pictured, or
              described, then it is an object of experience. A sensation is an
              object. A thought is an object. An inner image is an object. Even
              the feeling of being a watcher can appear as an object.
            </p>
            <p>
              So a more careful question is needed: can the true observer be
              observed in that way? Can awareness itself be placed in front of
              you and known as one more thing?
            </p>
            <p>
              The answer is no. Whatever you can notice is already appearing in
              awareness. It belongs to the known side of experience.
            </p>
            <p>
              Awareness is different. It is not an object among other objects.
              It is that because of which all objects are known. When you see a
              tree, the tree is known. When you notice a thought, the thought
              is known. In both cases, awareness is present, but not as a thing
              being looked at.
            </p>
            <p>
              This is why awareness is easy to miss. We keep trying to find it
              the same way we find everything else. But it is never an object
              to be found. It is the ever-present fact because of which finding
              is possible at all.
            </p>
            <p>
              Vedanta points here with great precision. What you are is not a
              hidden object waiting to be discovered. What you are is the
              awareness in whose presence body, mind, and world are known.
            </p>
            <p>
              If that is true, a new question begins to matter. Can awareness,
              which is not an object, really be limited in the way we usually
              imagine ourselves to be?
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              What in your experience can be noticed right now as an object?
            </p>
            <p>
              Can awareness itself be noticed in the same way a thought or
              sensation is noticed?
            </p>
            <p>
              What changes when you stop trying to find awareness as a thing?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/9"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
