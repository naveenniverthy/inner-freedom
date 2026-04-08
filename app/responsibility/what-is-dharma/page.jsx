import Link from "next/link";

export const metadata = {
  title: "What is Dharma?",
  description:
    "Understand dharma in simple terms as living rightly, clearly, and in alignment with life.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/responsibility"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Responsibility
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Responsibility
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            What is Dharma?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Dharma is a simple word, but it carries a deep meaning.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            A simple meaning
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>It does not mean religion.</p>
            <p>It does not mean belief.</p>
            <p>Dharma is the way to live rightly.</p>
            <p>We all act. We speak. We think.</p>
            <p>In every moment, there is a choice.</p>
            <p>Dharma is about that choice.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Here and now
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Dharma means: what is appropriate, here and now.</p>
            <p>Not based on mood.</p>
            <p>Not based on preference.</p>
            <p>But based on understanding.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            The larger order
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Life follows an order.</p>
            <p>Your body follows an order.</p>
            <p>Nature follows an order.</p>
            <p>Relationships function within an order.</p>
            <p>Dharma is aligning with that order.</p>
            <p>When you align, there is harmony.</p>
            <p>When you go against it, there is disturbance.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Discovered, not imposed
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Dharma is not imposed.</p>
            <p>It is discovered.</p>
            <p>You already sense it when you are truthful.</p>
            <p>You already sense it when you avoid.</p>
            <p>You already sense it when something feels off.</p>
            <p>Dharma is responsibility.</p>
            <p>Not a burden.</p>
            <p>But clarity.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Living it
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Living with Dharma means responding to life properly.</p>
            <p>It shows up in simple ways.</p>
            <p>Speak truth.</p>
            <p>Do what you commit.</p>
            <p>Avoid harm.</p>
            <p>Take responsibility.</p>
            <p>Sometimes it is easy.</p>
            <p>Sometimes uncomfortable.</p>
            <p>Dharma does not depend on your mood.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Choice
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>There is a difference:</p>
            <p>What I feel like doing</p>
            <p>vs</p>
            <p>What is right to do</p>
            <p>Dharma is the second.</p>
            <p>You have choice.</p>
            <p>Dharma helps you use it well.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            What it gives
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>When you live this way, the mind is lighter.</p>
            <p>There is less conflict.</p>
            <p>There is less regret.</p>
            <p>Dharma prepares you for freedom.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Clarity helps you see.</p>
            <p>Dharma helps you live.</p>
          </div>
          <div className="mt-5">
            <Link
              href="/discipline"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
            >
              Continue to Discipline
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
