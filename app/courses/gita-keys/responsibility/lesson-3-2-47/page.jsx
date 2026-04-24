import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-3-2-47" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Lesson 3
      </h1>

      <h2 className="text-lg text-gray-600">
        You control action, not results (Gita 2.47)
      </h2>

      {/* Verse */}
      <section>
        <h3 className="font-medium text-lg">Verse</h3>

        <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
          कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।<br />
          मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥ २.४७ ॥
        </div>
      </section>

      {/* Transliteration */}
      <section>
        <h3 className="font-medium text-lg">Transliteration</h3>

        <p className="text-gray-700">
          karmaṇy evādhikāras te mā phaleṣu kadācana <br />
          mā karma-phala-hetur bhūr mā te saṅgo&apos;stv akarmaṇi
        </p>
      </section>

      {/* Meaning */}
      <section>
        <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          You have a choice over action alone, never over the results.
          Do not take yourself to be the sole cause of the results,
          and do not fall into inaction.
        </p>
      </section>

      {/* Key Words */}
      <section>
        <h3 className="font-medium text-lg">Key Words</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>karmaṇi — action</li>
          <li>adhikāraḥ — choice, control</li>
          <li>phaleṣu — results</li>
          <li>karma-phala — result of action</li>
          <li>saṅgaḥ — attachment</li>
          <li>akarmaṇi — inaction</li>
        </ul>
      </section>

      {/* Teaching */}
      <section>
        <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          This is one of the most important teachings.

          You have control over what you do,
          not over what comes out of it.

          Results depend on many factors —
          effort, environment, timing, and others.

          When we expect full control over results,
          we create stress and disappointment.

          Krishna says:
          focus on right action.

          This does not mean
          “results do not matter.”

          Results matter,
          because action should be thoughtful and responsible.

          The teaching is:
          do not depend on the result
          for your inner stability.

          Do not tie your identity or peace to the outcome.

          And do not avoid action out of fear of failure.
        </p>
      </section>

      {/* Connection */}
      <section>
        <h3 className="font-medium text-lg">Connection to Responsibility</h3>

        <p className="text-gray-700">
          Responsibility means doing your part fully.

          It does not mean controlling everything.

          When I understand my role correctly,
          I act with commitment,
          care,
          and preparation,
          but without making the result the basis of my worth.

          This is the foundation of karma yoga.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Reflection</h3>

        <p className="text-gray-700">
          In my actions, am I focused more on results
          or on doing what is right?

          What changes if I shift my focus to action alone?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-3-2-47" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-3-2-47" />
        </aside>
      </div>
    </div>
  );
}
