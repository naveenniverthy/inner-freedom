import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-14-summary" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Final Lesson
              </h1>

              <h2 className="text-lg text-gray-600">
                Receiving life as prasāda
              </h2>

              {/* Summary */}
              <section>
                <h3 className="font-medium text-lg">Summary</h3>

                <p className="text-gray-700">
                  Acceptance completes the teaching.

                  After clarity,
                  after discipline,
                  after right action,
                  after offering—

                  what remains is receiving.

                  Life continues to give results.

                  Some are favorable.
                  Some are not.

                  Acceptance means receiving both
                  with balance.
                </p>
              </section>

              {/* Core Principles */}
              <section>
                <h3 className="font-medium text-lg">Core Principles</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Recognize that experiences are temporary</li>
                  <li>Remain balanced in pleasure and pain</li>
                  <li>Reduce strong likes and dislikes</li>
                  <li>Accept results as they come</li>
                  <li>Trust the order of life</li>
                  <li>Let devotion mature into emotional steadiness</li>
                  <li>Let go of regret and craving</li>
                </ul>
              </section>

              {/* What Changes */}
              <section>
                <h3 className="font-medium text-lg">What Changes With Acceptance</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Emotional stability</li>
                  <li>Less anxiety about outcomes</li>
                  <li>Reduction in regret and worry</li>
                  <li>Greater clarity in thinking</li>
                  <li>Inner peace</li>
                </ul>
              </section>

              {/* Deeper Insight */}
              <section>
                <h3 className="font-medium text-lg">Deeper Insight</h3>

                <p className="text-gray-700">
                  Acceptance is not weakness.

                  It is strength.

                  It is the ability to receive life
                  without resistance.

                  When resistance drops,
                  disturbance drops.

                  When disturbance drops,
                  clarity shines.

                  This is prasāda buddhi —
                  receiving everything
                  as part of a larger order.
                </p>
              </section>

              {/* Completion */}
              <section>
                <h3 className="font-medium text-lg">Completion</h3>

                <p className="text-gray-700">
                  With this,
                  the five keys are complete:

                  Clarity — seeing correctly  
                  Responsibility — acting rightly  
                  Discipline — training the mind  
                  Offering — lightening action  
                  Acceptance — receiving results

                  Together,
                  they prepare the mind for freedom.
                </p>
              </section>

              {/* Final Reflection */}
              <section>
                <h3 className="font-medium text-lg">Final Reflection</h3>

                <p className="text-gray-700">
                  How do I receive what comes in life?

                  Can I begin to receive it
                  with understanding and balance?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-14-summary" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-14-summary" />
        </aside>
      </div>
    </div>
  );
}
