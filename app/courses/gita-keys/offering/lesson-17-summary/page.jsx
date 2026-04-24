import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-17-summary" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Final Lesson
              </h1>

              <h2 className="text-lg text-gray-600">
                Living with the attitude of offering
              </h2>

              {/* Summary */}
              <section>
                <h3 className="font-medium text-lg">Summary</h3>

                <p className="text-gray-700">
                  Offering transforms action.

                  The action may remain the same,
                  but the attitude changes everything.

                  Instead of acting for personal gain,
                  the action becomes an offering.

                  Instead of carrying the burden,
                  the burden is handed over.

                  This brings lightness into life.
                </p>
              </section>

              {/* Core Principles */}
              <section>
                <h3 className="font-medium text-lg">Core Principles</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Perform action as an offering (yajña)</li>
                  <li>Reduce the sense of doership</li>
                  <li>Let go of attachment to results</li>
                  <li>Align the mind with the highest</li>
                  <li>Trust the yoga-kṣema of the total order</li>
                  <li>See action as part of a larger order</li>
                  <li>Bring this attitude into all aspects of life</li>
                </ul>
              </section>

              {/* What Changes */}
              <section>
                <h3 className="font-medium text-lg">What Changes With Offering</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Less stress about results</li>
                  <li>Reduction in ego and possessiveness</li>
                  <li>More ease in action</li>
                  <li>Better relationships</li>
                  <li>Inner lightness and trust</li>
                </ul>
              </section>

              {/* Deeper Insight */}
              <section>
                <h3 className="font-medium text-lg">Deeper Insight</h3>

                <p className="text-gray-700">
                  Offering begins as a practice.

                  It matures into a way of living.

                  Finally, it becomes a vision—

                  that everything is already part
                  of a total order.

                  In this vision,
                  there is no isolation,
                  no burden,
                  and no inner conflict.
                </p>
              </section>

              {/* Transition */}
              <section>
                <h3 className="font-medium text-lg">What Next?</h3>

                <p className="text-gray-700">
                  Even with the attitude of offering,
                  results still come.

                  Sometimes favorable,
                  sometimes not.

                  The final step is:

                  Acceptance (Īśvara Prasāda Buddhi) —
                  receiving results with balance.

                  This completes the teaching.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Final Reflection</h3>

                <p className="text-gray-700">
                  Is my action becoming lighter?

                  Where do I still feel burden,
                  and what happens if I offer it?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-17-summary" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-17-summary" />
        </aside>
      </div>
    </div>
  );
}
