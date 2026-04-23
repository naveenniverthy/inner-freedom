import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-21-summary" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Final Lesson
              </h1>

              <h2 className="text-lg text-gray-600">
                Training the mind for clarity
              </h2>

              {/* Summary */}
              <section>
                <h3 className="font-medium text-lg">Summary</h3>

                <p className="text-gray-700">
                  Discipline is the bridge between understanding and living.

                  We may know what is right,
                  but without discipline,
                  we cannot live it.

                  The Gita shows that the mind is naturally restless.

                  It gets pulled by senses,
                  habits,
                  and reactions.

                  Discipline trains the mind
                  to become steady and available.
                </p>
              </section>

              {/* Core Principles */}
              <section>
                <h3 className="font-medium text-lg">Core Principles</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Manage the senses</li>
                  <li>Train the mind gradually</li>
                  <li>Practice consistently (abhyāsa)</li>
                  <li>Reduce dependence on likes and dislikes (vairāgya)</li>
                  <li>Live a balanced and structured life</li>
                  <li>Align body, speech, and mind</li>
                  <li>Act with awareness throughout the day</li>
                </ul>
              </section>

              {/* What Changes */}
              <section>
                <h3 className="font-medium text-lg">What Changes With Discipline</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Less distraction</li>
                  <li>More clarity in thinking</li>
                  <li>Emotional stability</li>
                  <li>Consistency in action</li>
                  <li>Inner calm and focus</li>
                </ul>
              </section>

              {/* Deeper Insight */}
              <section>
                <h3 className="font-medium text-lg">Deeper Insight</h3>

                <p className="text-gray-700">
                  Discipline is not restriction.

                  It is freedom from compulsion.

                  When the mind is trained,
                  it is no longer pulled in different directions.

                  It becomes available
                  for understanding.

                  This prepares the ground
                  for deeper knowledge.
                </p>
              </section>

              {/* Transition */}
              <section>
                <h3 className="font-medium text-lg">What Next?</h3>

                <p className="text-gray-700">
                  Now that the mind is prepared,
                  action itself can be transformed.

                  The next step is:

                  Offering (Īśvara Arpaṇa Buddhi) —
                  performing action with the right attitude,
                  as an offering.

                  This removes the sense of burden
                  and brings lightness into action.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Final Reflection</h3>

                <p className="text-gray-700">
                  Is my mind becoming more steady over time?

                  What one discipline can I continue daily
                  without break?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-21-summary" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-21-summary" />
        </aside>
      </div>
    </div>
  );
}
