import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-19-summary" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

      <h1 className="text-2xl font-semibold">
        Responsibility — Final Lesson
      </h1>

      <h2 className="text-lg text-gray-600">
        Living in alignment with dharma
      </h2>

      {/* Summary */}
      <section>
        <h3 className="font-medium text-lg">Summary</h3>

        <p className="text-gray-700">
          Responsibility begins with a simple recognition:

          Action cannot be avoided.

          Life demands response.

          The question is not whether to act,
          but how to act.

          We saw that each person has roles —
          based on their situation, nature, and context.

          Acting according to these roles is dharma.

          Avoiding responsibility creates inner conflict.

          Taking responsibility creates clarity and strength.
        </p>
      </section>

      {/* Core Principles */}
      <section>
        <h3 className="font-medium text-lg">Core Principles</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Act according to your role (svadharma)</li>
          <li>Do not avoid action due to discomfort</li>
          <li>Focus on action, not results</li>
          <li>Let knowledge guide decisions</li>
          <li>Act for the larger good (loka-saṅgraha)</li>
          <li>Stay aligned with your nature</li>
        </ul>
      </section>

      {/* What Changes */}
      <section>
        <h3 className="font-medium text-lg">What Changes With Responsibility</h3>

        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Clarity in decision-making</li>
          <li>Reduction in avoidance and confusion</li>
          <li>Greater inner strength</li>
          <li>Consistency in action</li>
          <li>Better impact on others</li>
        </ul>
      </section>

      {/* Deeper Insight */}
      <section>
        <h3 className="font-medium text-lg">Deeper Insight</h3>

        <p className="text-gray-700">
          Responsibility is not a burden.

          It is alignment with the order of life.

          When action is aligned,
          the mind becomes steady.

          This prepares the ground
          for deeper understanding.
        </p>
      </section>

      {/* Transition */}
      <section>
        <h3 className="font-medium text-lg">What Next?</h3>

        <p className="text-gray-700">
          Even when we know what is right,
          acting consistently is not easy.

          The mind gets distracted,
          pulled by likes and dislikes.

          Therefore, the next step is:

          Discipline (Sādhana) —
          training the mind to stay steady and aligned.
        </p>
      </section>

      {/* Reflection */}
      <section>
        <h3 className="font-medium text-lg">Final Reflection</h3>

        <p className="text-gray-700">
          Am I fully taking responsibility for my life?

          Or am I still avoiding what I know must be done?
        </p>
      </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="responsibility" lessonSlug="lesson-19-summary" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="responsibility" currentLessonSlug="lesson-19-summary" />
        </aside>
      </div>
    </div>
  );
}
