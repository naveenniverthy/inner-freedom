import Link from "next/link";

export const metadata = {
  title: "Acting without pressure | Inner Freedom",
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
            Lesson 3
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Acting without pressure
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Stress grows when our peace depends on results. Clarity helps us
            act well without leaning on outcomes for stability.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Results matter. We all care how things turn out. A project may
              succeed or fail. A conversation may go well or badly. A plan may
              work or fall apart. The difficulty is not in caring about
              outcomes. It is in depending on them too much.
            </p>
            <p>
              When your inner state is tied tightly to results, pressure rises
              before the action even begins. You start rehearsing failure,
              seeking reassurance, and carrying tension into the task. That
              tension often makes clear action harder.
            </p>
            <p>
              Consider someone going into a job interview. If they believe the
              result will decide their value, anxiety increases. They may
              overthink every word. If they prepare sincerely and show up
              clearly, the mind stays steadier. The result still matters, but
              it does not carry the whole weight of the self.
            </p>
            <p>
              Acting without pressure does not mean acting carelessly. It means
              giving full attention to what can be done now while recognizing
              that the final result is not fully in your hands. This is a more
              honest way to live.
            </p>
            <p>
              Clarity reduces stress because it puts energy in the right place.
              Instead of feeding fear about what may happen, you return to the
              next step, the next sentence, the next responsible action. That
              is where steadiness becomes possible.
            </p>
            <p>
              Over time, this changes the feel of daily life. You still plan,
              care, and work hard. But the mind becomes less trapped by the
              constant demand for guaranteed results before it can relax.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Which result are you most emotionally leaning on right now?</p>
            <p>How does that dependence show up in your body or mind?</p>
            <p>
              What would responsible action look like if you focused on effort
              more than reassurance?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/living-course"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
