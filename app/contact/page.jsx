import Link from "next/link";

export const metadata = {
  title: "Contact",
  description:
    "Reach out with a thoughtful note, question, or collaboration inquiry."
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
            Contact
          </h1>
          <div className="mt-6 space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              This site is still growing. More reflections, teachings, and
              guided pages will be added over time.
            </p>
            <p>
              If you would like to connect, collaborate, or share a thoughtful
              note, you can reach out here.
            </p>
            <p>
              <a
                href="mailto:annitya@gmail.com"
                className="font-medium text-stone-900 underline decoration-stone-300 underline-offset-4 transition hover:decoration-stone-500"
              >
                annitya@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm leading-7 text-stone-600 sm:text-base">
            Please keep messages thoughtful and relevant to the spirit of the
            site.
          </p>
        </section>
      </div>
    </main>
  );
}
