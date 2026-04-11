import Link from "next/link";

export const metadata = {
  title: "The Mistake We Don't See - Foundations of Self-Knowledge",
  description:
    "Explore the unnoticed confusion that keeps self-knowledge out of view.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-100 px-6 py-12 text-stone-800 sm:px-8 sm:py-16">
      <div className="mx-auto flex max-w-[700px] flex-col gap-6">
        <Link
          href="/course"
          className="w-fit text-sm font-medium text-stone-500 transition hover:text-stone-700"
        >
          Back to Foundations of Self-Knowledge
        </Link>

        <section className="rounded-[2rem] bg-white px-8 py-12 shadow-sm ring-1 ring-stone-200 sm:px-10 sm:py-14">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-stone-500">
            Lesson 4
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight text-stone-900 sm:text-5xl">
            The mistake we don’t see
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            So far, we have looked at seeking, the fading of satisfaction, and
            the quiet feeling that something is missing. Now we come to a more
            important question: what keeps this whole pattern in place?
          </p>
        </section>

        <section className="rounded-[2rem] bg-white px-8 py-10 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
            <p>
              Vedanta says the deepest problem is not mainly external. It is
              not simply that life fails to give us enough. The deeper problem
              is that we are mistaken about who we are.
            </p>
            <p>
              This mistake is easy to miss because it feels normal. We say,
              &quot;I am anxious.&quot; &quot;I am tired.&quot; &quot;I am hurt.&quot; &quot;I am successful.&quot;
              The body, the mind, and our feelings are so close that we take
              them to be the whole of ourselves.
            </p>
            <p>
              But pause for a moment. Thoughts are known. Feelings are known.
              Sensations in the body are known. Even changing moods and shifting
              self-images are known.
            </p>
            <p>
              This leads to a quiet but powerful question: are you these known
              things, or are you the one to whom they are known?
            </p>
            <p>
              The mistake is that we mix the two. We confuse the knower with
              the known. We take what appears in experience to be the self,
              instead of noticing the presence because of which experience is
              known at all.
            </p>
            <p>
              It is a little like watching a movie and becoming so absorbed
              that you forget you are the viewer. The story may be intense,
              moving, frightening, or beautiful. But the viewer is not the
              events on the screen.
            </p>
            <p>
              In the same way, thoughts, feelings, and bodily changes belong to
              the moving picture of experience. Vedanta gently corrects the
              confusion by helping us see that what you are is not the changing
              content, but the knower because of which the content is known.
            </p>
            <p>
              This is the turning point. If the problem is misidentification,
              then the answer is not endless improvement of the known. The
              answer is clearer knowledge of the knower.
            </p>
          </div>
        </section>

        <section className="rounded-[2rem] bg-stone-50 px-8 py-8 shadow-sm ring-1 ring-stone-200 sm:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-500">
            Reflection
          </p>
          <div className="mt-4 space-y-4 text-base leading-8 text-stone-700 sm:text-lg">
            <p>
              What do you usually take yourself to be without questioning it?
            </p>
            <p>
              Can you notice that thoughts, feelings, and bodily states are all
              things you know?
            </p>
            <p>
              What opens up when you ask, very simply: am I the known, or the
              knower?
            </p>
          </div>
        </section>

        <div className="pt-2">
          <Link
            href="/course/5"
            className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
          >
            Next Lesson
          </Link>
        </div>
      </div>
    </main>
  );
}
