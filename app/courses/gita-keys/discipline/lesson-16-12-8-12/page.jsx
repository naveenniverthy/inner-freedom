import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-16-12-8-12" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 16
              </h1>

              <h2 className="text-lg text-gray-600">
                A practical ladder of discipline (Gita 12.8–12)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  मय्येव मन आधत्स्व मयि बुद्धिं निवेशय ।<br />
                  निवसिष्यसि मय्येव अत ऊर्ध्वं न संशयः ॥ १२.८ ॥<br /><br />

                  अथ चित्तं समाधातुं न शक्नोषि मयि स्थिरम् ।<br />
                  अभ्यासयोगेन ततो मामिच्छाप्तुं धनञ्जय ॥ १२.९ ॥<br /><br />

                  अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव ।<br />
                  मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि ॥ १२.१० ॥<br /><br />

                  अथैतदप्यशक्तोऽसि कर्तुं मद्योगमाश्रितः ।<br />
                  सर्वकर्मफलत्यागं ततः कुरु यतात्मवान् ॥ १२.११ ॥<br /><br />

                  श्रेयो हि ज्ञानमभ्यासाज्ज्ञानाद्ध्यानं विशिष्यते ।<br />
                  ध्यानात्कर्मफलत्यागस्त्यागाच्छान्तिरनन्तरम् ॥ १२.१२ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  mayy eva mana ādhatsva — place the mind steadily <br />
                  abhyāsa-yogena — through practice <br />
                  mat-karma-paramaḥ — act with the right orientation <br />
                  karma-phala-tyāga — giving up attachment to results
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Fix the mind steadily in clarity.

                  If that is not possible,
                  practice repeatedly.

                  If practice is difficult,
                  act with the right orientation.

                  If even that is difficult,
                  begin by letting go of attachment to results.

                  From this,
                  peace arises.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>abhyāsa — practice</li>
                  <li>dhyāna — focus</li>
                  <li>karma — action</li>
                  <li>tyāga — letting go</li>
                  <li>śānti — peace</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna gives a very practical approach.

                  Discipline is not one rigid method.

                  It is a ladder.

                  Start where you are.

                  If you can hold the mind steady, do that.

                  If not, practice.

                  If practice is difficult, act with the right attitude.

                  If even that is hard, begin with letting go of results.

                  Every step moves you forward.

                  No effort is wasted.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline must be practical.

                  It should adapt to where we are.

                  The key is to start
                  and continue.

                  This verse removes perfectionism
                  and makes sādhana accessible.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Where am I on this ladder today?

                  What is the simplest step I can take
                  right now?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-16-12-8-12" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-16-12-8-12" />
        </aside>
      </div>
    </div>
  );
}
