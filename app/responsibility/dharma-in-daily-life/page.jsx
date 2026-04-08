import Link from "next/link";

export const metadata = {
  title: "Dharma in Daily Life",
  description:
    "See dharma in ordinary life through action, speech, thought, and daily reflection.",
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
            Dharma in Daily Life
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            Dharma is not an idea. It is how you live.
          </p>
          <p className="mt-5 text-base leading-8 text-stone-700 sm:text-lg">
            It shows up in ordinary life: what you say, do, and avoid.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            In Action
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Do what you commit.</p>
            <p>Do not ignore what needs attention.</p>
            <p>Acknowledge mistakes.</p>
            <p>Take responsibility.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            In Speech
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Speak truth.</p>
            <p>Avoid unnecessary hurt.</p>
            <p>Avoid exaggeration.</p>
            <p>Avoid unfair talk.</p>
            <p>Sometimes silence is right.</p>
            <p>Sometimes speaking is right.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            In Thought
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Emotions arise. Anger, jealousy, irritation.</p>
            <p>That part is natural.</p>
            <p>But do not act blindly.</p>
            <p>Pause and choose.</p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            When It Is Difficult
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>Sometimes there is a difference between dharma and preference.</p>
            <p>What feels easy is not always what is right.</p>
            <p className="font-medium text-stone-900">
              Ask: "What is right, not easy?"
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Daily Practice
          </p>
          <div className="mt-4 space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Morning
              </p>
              <p className="mt-2">Ask what is important today.</p>
              <p>Ask what you should not avoid.</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                During
              </p>
              <p className="mt-2">Notice: am I reacting or acting?</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.14em] text-stone-500">
                Evening
              </p>
              <p className="mt-2">Notice where you were aligned.</p>
              <p>Notice where you missed.</p>
              <p>No guilt. Just clarity.</p>
            </div>
          </div>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Closing
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-600 sm:text-lg">
            <p>Living this way reduces conflict and regret.</p>
            <p>It prepares the mind for clarity.</p>
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
