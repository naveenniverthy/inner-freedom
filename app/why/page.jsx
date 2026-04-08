import Link from "next/link";

export const metadata = {
  title: "Why Self-Knowledge Matters",
  description:
    "See why the search for lasting peace points toward self-knowledge rather than outer change.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Home
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Inner Freedom
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            Why self-knowledge matters
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            What you keep seeking outside may be pointing to something more
            fundamental within.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Many of us live with a quiet sense that something is missing. So
              we search through achievement, relationships, control,
              recognition, pleasure, and security.
            </p>
            <p>
              These things have their place in life. But they do not fully
              resolve the deeper human problem.
            </p>
            <p>
              Why not? Because the basic confusion remains: not knowing clearly
              who we are.
            </p>
            <p>
              If I take myself to be limited, incomplete, and vulnerable by
              nature, then no outer gain can fully remove fear, restlessness,
              or dependence.
            </p>
            <p>
              Vedanta says the problem is not that you are lacking. The problem
              is that you do not yet see yourself clearly.
            </p>
            <p>
              Self-knowledge matters because clarity changes the very place
              from which life is lived.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            Think about the moments when you finally got what you wanted. Did
            the search truly end, or did the mind begin looking again for the
            next thing that might complete it?
          </p>
        </section>

        <div className="pt-2">
          <Link
            href="/practice"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next → Preparation and practice
          </Link>
        </div>
      </div>
    </main>
  );
}
