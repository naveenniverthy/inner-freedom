import Link from "next/link";

export const metadata = {
  title: "Preparation and practice | Inner Freedom",
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
            Preparation and practice
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            The truth is simple, but the mind has to be ready to receive it.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Vedanta does not say freedom is created by practice. Freedom is
              understood through knowledge.
            </p>
            <p>Still, preparation matters.</p>
            <p>
              Why? Because a distracted or agitated mind struggles to stay with
              something subtle.
            </p>
            <p>
              So practice has an important place. Not to produce the self, but
              to prepare the mind for clear seeing.
            </p>
            <div className="space-y-3">
              <p>Preparation includes:</p>
              <ul className="space-y-2 pl-5 text-base leading-8 text-stone-600 sm:text-lg">
                <li className="list-disc">living thoughtfully</li>
                <li className="list-disc">growing in steadiness</li>
                <li className="list-disc">learning to reflect</li>
                <li className="list-disc">becoming less driven by compulsion</li>
                <li className="list-disc">
                  developing values that support clarity
                </li>
              </ul>
            </div>
            <p>
              This is why discipline, attention, prayer, meditation, karma
              yoga, and honest self-observation can all help. They do not make
              you whole. They help remove what keeps clarity out of view.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            What genuinely helps your mind become quiet, available, and honest?
            And what tends to pull it back into hurry, reaction, or avoidance?
          </p>
        </section>

        <div className="pt-2">
          <Link
            href="/living"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next → Living with clarity
          </Link>
        </div>
      </div>
    </main>
  );
}
