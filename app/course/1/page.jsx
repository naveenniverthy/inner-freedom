import Link from "next/link";

export const metadata = {
  title: "What are you really seeking? | Inner Freedom",
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
            Lesson 1
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            What are you really seeking?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Most of us spend our days moving toward something we believe will
            make life feel more complete.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              We want many different things. Love. Stability. Recognition.
              Comfort. A clearer future. More time. Less stress. On the
              surface, these desires seem separate, and each one feels personal
              to our own life.
            </p>
            <p>
              But if we look a little more closely, something deeper begins to
              show itself. We do not only want the object. We want what we
              imagine the object will give us: ease, fullness, relief,
              happiness, peace.
            </p>
            <p>
              In that sense, many desires point in one direction. They are part
              of a deeper search for wholeness. We want to feel that nothing is
              missing, that we are settled in ourselves, that life is not
              pressing on an inner wound.
            </p>
            <p>
              This is why the pattern of seeking repeats. We reach something,
              enjoy it for a while, and then the movement begins again. A new
              goal appears. A new promise of completion takes its place. Even
              when life goes well, the search often continues in quieter forms.
            </p>
            <p>
              Seeing this clearly is not a reason for discouragement. It is a
              gentle turning point. Instead of endlessly chasing forms, we can
              begin to ask what we are truly hoping to find through them.
            </p>
            <p>
              That question matters. If what we are seeking is deeper than any
              single experience, then the answer may not lie in getting more
              from the world. It may begin with understanding ourselves more
              honestly.
            </p>
            <p>
              This is where the inquiry begins. Not with rejection of life, but
              with a quieter kind of attention. What do I really want? And what
              would it mean if the search is pointing me back toward something
              more fundamental than the next achievement, pleasure, or result?
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>What do you most often hope will finally make you feel settled?</p>
            <p>When one desire is fulfilled, what usually appears next?</p>
            <p>
              Beneath all the different things you seek, is there one deeper
              longing they seem to share?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/2"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
