import Link from "next/link";

export const metadata = {
  title: "Why Nothing Fully Satisfies - Foundations of Self-Knowledge",
  description:
    "Reflect on why fulfillment through outer gain fades and the search begins again.",
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
            Lesson 2
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Why nothing fully satisfies
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In the last lesson, we began to see that behind many desires there
            is one deeper search: the search for wholeness.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Once we see that, another question naturally appears. If we are
              always seeking fullness, why do the things we reach never settle
              the search for very long?
            </p>
            <p>
              The pattern is familiar. First there is desire. Then effort. Then
              the moment of getting what we wanted. For a while there may be
              pleasure, relief, excitement, or calm. But before long, something
              else appears. Restlessness returns. Another desire takes shape.
            </p>
            <p>
              This does not mean life has nothing to offer. Relationships,
              beauty, comfort, success, and meaningful work all matter. They
              can enrich life deeply. But they do not remove the underlying
              sense that something more is still being asked for.
            </p>
            <p>
              External things are limited by nature. They change. They pass.
              They depend on conditions. What is limited cannot give unlimited
              satisfaction, and what comes and goes cannot provide lasting
              completion.
            </p>
            <p>
              So the issue may not be that we have not found the right object
              yet. The deeper issue may be that we are asking objects to do
              something they cannot do. We are asking the changing to bring an
              end to a much deeper search.
            </p>
            <p>
              This leads us to a more honest question. What is the nature of
              the one who feels incomplete? Until that is understood, the mind
              will keep moving outward, hoping the next experience will finally
              do what the last one could not.
            </p>
            <p>
              This is where the movement begins to turn inward. Not out of
              withdrawal, but out of clarity. If nothing external fully
              satisfies, perhaps the answer is not further away from us, but
              closer than we have noticed.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              Think of something you strongly wanted and later received. How
              long did the feeling of satisfaction last?
            </p>
            <p>
              What do you usually expect the next achievement, relationship, or
              experience to finally give you?
            </p>
            <p>
              If the search keeps repeating, what deeper question might be
              asking for your attention now?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/3"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
