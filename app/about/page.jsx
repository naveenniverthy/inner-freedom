import Link from "next/link";

export const metadata = {
  title: "About | Five Keys to Inner Freedom",
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
            Five Keys to Inner Freedom
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            About this framework
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            This site was created as a simple doorway into self-understanding
            and steady living.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              This site is rooted in the vision of Vedanta, a timeless teaching
              that helps us inquire into who we are, what freedom really means,
              and why lasting peace cannot be found through outer change alone.
            </p>
            <p>
              The aim here is not to promote belief, identity, or ideology. It
              is to make a subtle teaching more accessible in clear, simple,
              human language.
            </p>
            <p>
              Many people are drawn to these questions, but feel blocked by
              heavy terminology, difficult translations, or overly religious
              presentation. This space is meant to remove some of that
              friction.
            </p>
            <p>
              The five keys are a simple way of organizing that vision into
              everyday language: clarity, responsibility, discipline,
              acceptance, and offering.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-base leading-8 text-stone-700 sm:text-lg">
            If something here resonates, begin where you are. There is no need
            to pretend, perform, or become someone else.
          </p>
        </section>

        <div className="pt-2">
          <Link
            href="/understanding"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Explore the teaching
          </Link>
        </div>
      </div>
    </main>
  );
}
