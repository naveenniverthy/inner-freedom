import Link from "next/link";

export const metadata = {
  title: "Understanding Your True Nature",
  description:
    "Reflect on the difference between changing experience and the awareness that knows it.",
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
            Understanding your true nature
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            You are not becoming whole. You are learning to recognize what has
            always been true.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Advaita Vedanta is a means of understanding who you truly are. It
              does not ask you to adopt a belief. It asks you to look carefully
              and see clearly.
            </p>
            <p>
              Most of us take ourselves to be the body, the mind, our feelings,
              and the story of our life. But each of these is known to us. The
              body is known. Thoughts are known. Feelings are known.
            </p>
            <p>
              So a quiet question begins to matter: are you these changing
              things, or are you the one to whom they appear?
            </p>
            <p>
              Vedanta points to a simple discovery. You are not the changing
              contents of experience. You are the awareness because of which
              every experience is known.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <p className="mt-4 text-base leading-8 text-stone-700 sm:text-lg">
            Pause for a moment and notice a single thought. Then notice that
            you are aware of it. The thought changes, but what about the
            awareness to which it appears?
          </p>
        </section>

        <div className="pt-2">
          <Link
            href="/why"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next → Why self-knowledge matters
          </Link>
        </div>
      </div>
    </main>
  );
}
