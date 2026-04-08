import Link from "next/link";

export const metadata = {
  title: "Living with Clarity in Daily Life",
  description:
    "Explore what it means to meet ordinary life with more clarity, steadiness, and less inner strain.",
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
            Living with clarity
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Understanding is not a way out of life. It is a different way of
            meeting life.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Clarity does not remove responsibility. It changes the way you
              carry it.
            </p>
            <p>
              You still work, choose, relate, care, act, and respond. But the
              inner strain begins to soften.
            </p>
            <p>
              Why? Because life is no longer being asked to complete an
              incomplete self.
            </p>
            <p>
              From clarity comes greater steadiness, greater responsibility,
              greater compassion, and more freedom in action.
            </p>
            <p>
              Living with clarity does not mean becoming passive. It means
              living with less confusion and less fear.
            </p>
            <p>
              Vedanta does not take you away from ordinary life. It helps you
              stand in the middle of it with understanding.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            What would begin to change in daily life if your sense of self no
            longer rose and fell with every outcome?
          </p>
        </section>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Return Home
          </Link>
        </div>
      </div>
    </main>
  );
}
