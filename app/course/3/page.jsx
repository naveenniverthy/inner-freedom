import Link from "next/link";

export const metadata = {
  title: "The sense of incompleteness | Inner Freedom",
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
            Lesson 3
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            The sense of incompleteness
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            In the first two lessons, we saw the movement of seeking and the
            way satisfaction fades. Now we can look more closely at what keeps
            that movement alive.
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              For many people, there is a quiet feeling in the background of
              life: something is missing. It may not always be dramatic. Often
              it appears as restlessness, comparison, self-improvement, or the
              sense that real ease will come later.
            </p>
            <p>
              We may think, &quot;Once I am more successful, I will feel secure.&quot;
              Or, &quot;Once this relationship works out, I will feel complete.&quot; Or,
              &quot;Once I become calmer, wiser, stronger, or more admired, then I
              can finally relax.&quot;
            </p>
            <p>
              In different forms, the message is the same. Life seems to say:
              not yet. I am not there yet. Something about me or my life still
              needs to be fixed, filled, or improved before I can be at peace.
            </p>
            <p>
              Hidden inside this movement is an assumption so familiar that we
              rarely question it. The assumption is: I am incomplete.
            </p>
            <p>
              Once that assumption is in place, the whole loop of becoming
              begins. I must become more. I must achieve more. I must secure
              more. I must heal enough, prove enough, or gather enough before I
              can rest.
            </p>
            <p>
              Vedanta asks us to pause here. Not to deny the human experience
              of longing, but to examine the belief underneath it. What if the
              feeling of incompleteness is real as an experience, but not true
              as a fact about who you are?
            </p>
            <p>
              That is a turning point. If incompleteness is assumed rather than
              real, then endless becoming cannot solve it. What is needed is
              not more self-construction, but clearer understanding.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              In what areas of life do you most strongly feel, &quot;I will be okay
              when...&quot;?
            </p>
            <p>
              What forms does the sense of &quot;something missing&quot; take in your
              daily life?
            </p>
            <p>
              What changes if you consider the possibility that incompleteness
              may be assumed, not essential?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/4"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
