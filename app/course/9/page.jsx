import Link from "next/link";

export const metadata = {
  title: "What is Vedanta really saying? | Inner Freedom",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Course
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson 9
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            What is Vedanta really saying?
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            So far, the inquiry has taken us through desire, dissatisfaction,
            incompleteness, misidentification, the body, the mind, the
            observer, and the fact that awareness is not an object.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              At this point, it becomes easier to say clearly what Vedanta is
              really doing. Vedanta is a teaching that points to your own
              nature.
            </p>
            <p>
              It is not saying that you must become whole. It is saying that
              wholeness is not absent in the way you imagine. The central
              problem is not that you are missing something essential. The
              problem is that you misunderstand yourself.
            </p>
            <p>
              When you take yourself to be only the body, only the mind, or
              only the changing personality, limitation appears natural. Then
              life becomes a long attempt to repair that limitation through
              effort, experience, and external gain.
            </p>
            <p>
              Vedanta corrects that misunderstanding. It shows, step by step,
              that what you truly are is not the changing content of
              experience, but the awareness because of which all experience is
              known.
            </p>
            <p>
              This is why Vedanta is not a system of belief. It is a means of
              self-knowledge. It does not ask for conversion. It does not ask
              you to accept a comforting idea. It asks you to see clearly what
              is already true.
            </p>
            <div className="space-y-3">
              <p className="font-medium text-stone-700">In simple terms:</p>
              <ul className="space-y-2 pl-5 text-base leading-8 text-stone-600 sm:text-lg">
                <li className="list-disc">
                  You seek wholeness because you assume it is missing.
                </li>
                <li className="list-disc">
                  What you usually take yourself to be is changing and known.
                </li>
                <li className="list-disc">
                  The knower of change is not itself changing in the same way.
                </li>
                <li className="list-disc">
                  Awareness is not an object in experience.
                </li>
                <li className="list-disc">
                  Self-knowledge, not endless becoming, is the key correction.
                </li>
              </ul>
            </div>
            <p>
              The final step is to see the conclusion more directly. If what
              you are is awareness, then what exactly are you not? The next
              lesson takes us there: you are not the changing.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              What part of this inquiry feels most clear to you now?
            </p>
            <p>
              What part still feels abstract, difficult, or easy to overlook?
            </p>
            <p>
              If the core problem is self-misunderstanding, how does that
              change the way you think about growth and freedom?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/10"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
