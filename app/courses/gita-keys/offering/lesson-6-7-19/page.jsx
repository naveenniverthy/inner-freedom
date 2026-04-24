import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-6-7-19" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 6
              </h1>

              <h2 className="text-lg text-gray-600">
                After many actions, clarity arises (Gita 7.19)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  बहूनां जन्मनामन्ते ज्ञानवान्मां प्रपद्यते ।<br />
                  वासुदेवः सर्वमिति स महात्मा सुदुर्लभः ॥ ७.१९ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  bahūnāṁ janmanām ante jñānavān māṁ prapadyate <br />
                  vāsudevaḥ sarvam iti sa mahātmā su-durlabhaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  After many experiences and actions,
                  a person gains clarity
                  and recognizes:

                  “All this is one total reality.”

                  Such a person is rare.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>jñānavān — one with knowledge</li>
                  <li>prapadyate — surrenders, recognizes</li>
                  <li>vāsudevaḥ sarvam — everything is the total</li>
                  <li>mahātmā — a mature, clear person</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna shows the long-term result of offering.

                  When actions are done again and again
                  with the right attitude,
                  the mind becomes refined.

                  Over time,
                  a deeper understanding arises.

                  One begins to see
                  that everything is connected.

                  The sense of separation reduces.

                  This is not immediate.

                  It unfolds gradually
                  through right living.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering purifies the mind.

                  A purified mind gains clarity.

                  That clarity leads to a deeper vision of life.

                  This verse shows that
                  offering is not just a practice,
                  but a path to understanding.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I see my actions as isolated,
                  or as part of a larger whole?

                  What would it mean for me
                  to see life as interconnected?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-6-7-19" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-6-7-19" />
        </aside>
      </div>
    </div>
  );
}
