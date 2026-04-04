import Link from "next/link";

export const metadata = {
  title: "You are not the changing | Inner Freedom",
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
            Lesson 10
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            You are not the changing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            We began with desire, dissatisfaction, and the sense that
            something was missing. From there, we followed the inquiry into the
            body, the mind, the observer, and the meaning of Vedanta itself.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Along the way, one fact has become clearer. Everything that is
              experienced is changing. The body changes. Thoughts change.
              Emotions change. Roles change. Relationships change. Conditions
              change.
            </p>
            <p>
              Yet every change is known. The change does not announce itself.
              It is noticed. That means the knower is present through the whole
              movement.
            </p>
            <p>
              So the question now becomes direct: are you the changing, or are
              you the knower of change?
            </p>
            <p>
              The changing cannot be you in the deepest sense, because it comes
              and goes before you. It appears, shifts, and disappears in your
              experience. What is seen cannot be the seer. What is known cannot
              be the knower.
            </p>
            <p>
              Vedanta points to a simple recognition. You are awareness. Not as
              an idea to repeat, but as the fact because of which every
              experience is known.
            </p>
            <p>
              Nothing new is gained here. You do not become awareness. You do
              not produce it through effort. You do not add something missing to
              yourself.
            </p>
            <p>
              What changes is understanding. The old confusion begins to loosen.
              The habit of taking yourself to be the changing loses its force.
              Clarity replaces strain.
            </p>
            <p>
              This is a quiet shift, but a profound one. Life may continue to
              change in all the usual ways, but what you are is no longer taken
              to rise and fall with every passing state.
            </p>
            <p>
              That is the calm clarity at the heart of this inquiry. You are
              not the changing. You are the awareness in whose presence change
              is known.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              What in your experience has been constantly changing?
            </p>
            <p>
              What has been present enough to know those changes?
            </p>
            <p>
              What becomes quieter in you when you no longer take the changing
              to be your deepest identity?
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
