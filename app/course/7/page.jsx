import Link from "next/link";

export const metadata = {
  title: "The observer and the observed | Inner Freedom",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Course
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson 7
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            The observer and the observed
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In the last two lessons, we looked at the body and the mind as
            things that are known. Now we can name the pattern more clearly:
            there is the observed, and there is the observer.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              The observed includes anything that can be noticed. The body is
              observed. Sensations are observed. Thoughts are observed.
              Emotions are observed. Even confusion, clarity, and inner
              movement are observed.
            </p>
            <p>
              The observer is that because of which all of this is known. It is
              not one more thing in the field of experience. It is the presence
              to which the whole field appears.
            </p>
            <p>
              This distinction matters because the observed is always changing.
              The body changes. Thoughts change. Feelings change. Moods change.
              The content of experience is never still for very long.
            </p>
            <p>
              Yet the observer is present through every change. Without that
              steady presence, change itself could not be noticed. The passing
              can only be known because something is present to know it.
            </p>
            <p>
              This leads to a simple insight. What is known is not you in the
              deepest sense. The known appears and disappears. It belongs to the
              changing side of experience.
            </p>
            <p>
              The observer, however, is not available as an object in the same
              way. You cannot place it in front of yourself like a thought, a
              sensation, or an image. It is not something you stand apart from
              and inspect.
            </p>
            <p>
              Vedanta uses this distinction to loosen the old habit of
              misidentification. Again and again, it points out that what is
              observed cannot be the essential self.
            </p>
            <p>
              But one more question remains. If there is an observer and an
              observed, are they truly two separate things? Or is there
              something subtler here still to understand?
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              What in your experience right now belongs to the observed?
            </p>
            <p>
              What keeps changing in experience, and what seems to remain
              present through the change?
            </p>
            <p>
              If the observer cannot be noticed as an object, how is it known?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/8"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
