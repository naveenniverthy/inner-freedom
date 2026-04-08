import Link from "next/link";

export const metadata = {
  title: "Doership and Role - Living with Clarity",
  description:
    "Reflect on the difference between healthy responsibility and a burdened sense of doership.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/living-course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Living with Clarity
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson 2
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Doership and role
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            You may play many roles in life, but you do not need to carry each
            one as your whole identity.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Much of our burden comes from how personally we carry our roles.
              We are a parent, partner, employee, manager, son, daughter, or
              friend. These roles matter. But trouble begins when we forget
              they are roles and start treating them as the full truth of who
              we are.
            </p>
            <p>
              When identity gets tied too tightly to role, everything becomes
              heavier. A mistake at work feels like a failure of the self. A
              disagreement at home feels like a collapse of the relationship. A
              child’s difficulty feels like proof that you are not enough.
            </p>
            <p>
              It helps to see the difference clearly. A role is a function. It
              comes with duties, limits, and context. You step into it, respond
              as well as you can, and keep learning. But the role is still not
              the whole of you.
            </p>
            <p>
              Think of a doctor finishing a long shift. If every outcome is
              carried as a personal identity wound, exhaustion builds quickly.
              If the doctor sincerely serves, learns, and does what is possible
              within the role, there is still effort, but less inner damage.
            </p>
            <p>
              Seeing roles more clearly does not make you careless. It makes
              you more balanced. You can show up fully without carrying every
              moment as a judgment on your worth.
            </p>
            <p>
              This softens doership. You still act, decide, and participate.
              But the personal burden becomes lighter because you are no longer
              asking every role to define you.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Which role in your life feels the heaviest right now?</p>
            <p>Where do you confuse a role with your whole identity?</p>
            <p>
              What would change if you served one role sincerely without making
              it define your worth?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/living-course/3"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
