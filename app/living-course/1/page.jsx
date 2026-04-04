import Link from "next/link";

export const metadata = {
  title: "Why action continues | Inner Freedom",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/living-course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Course
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson 1
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Why action continues
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Understanding does not make life stop. It changes the pressure we
            bring into action.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              A common fear is that clarity will make a person passive. People
              imagine that if they understand themselves more deeply, they will
              lose motivation, stop caring, or withdraw from ordinary life. But
              this is not what happens in a healthy way of living.
            </p>
            <p>
              Action continues because life continues. Meals still need to be
              cooked. Work still needs to be done. Children still need
              attention. Bills still need to be paid. Understanding does not
              erase these things. It simply changes the inner weight attached
              to them.
            </p>
            <p>
              Many of us act with hidden pressure. We are not only doing the
              task. We are also trying to secure approval, prove our worth,
              control the future, or avoid feeling inadequate. That is why even
              simple action can feel exhausting.
            </p>
            <p>
              When there is more clarity, action becomes cleaner. You answer
              the email because it needs an answer. You have the conversation
              because it needs to be had. You do your work because it is yours
              to do. There is less extra strain around the action.
            </p>
            <p>
              Think of someone preparing dinner for their family. One evening
              they are tense, resentful, and mentally keeping score. Another
              evening they simply cook, serve, and move on. The action is the
              same, but the burden is different. Clarity removes some of that
              burden.
            </p>
            <p>
              So the point is not to stop acting. It is to stop using action as
              a way to hold yourself together. Then life can keep moving
              without every task feeling like a test of who you are.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Which daily actions feel heavier than they need to feel?</p>
            <p>What pressure do you usually add to simple responsibilities?</p>
            <p>
              What might change if one task today were done without proving
              anything through it?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/living-course/2"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
