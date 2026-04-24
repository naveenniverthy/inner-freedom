import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-2-2-15" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 2
              </h1>

              <h2 className="text-lg text-gray-600">
                Freedom from disturbance (Gita 2.15)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यं हि न व्यथयन्त्येते पुरुषं पुरुषर्षभ ।<br />
                  समदुःखसुखं धीरं सोऽमृतत्वाय कल्पते ॥ २.१५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yaṁ hi na vyathayanty ete puruṣaṁ puruṣarṣabha <br />
                  sama-duḥkha-sukhaṁ dhīraṁ so&apos;mṛtatvāya kalpate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  The one who is not disturbed by pleasure and pain,
                  who remains balanced in both,
                  becomes steady and fit for freedom.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>vyathayanti — disturb</li>
                  <li>sama — equal, balanced</li>
                  <li>duḥkha-sukha — pain and pleasure</li>
                  <li>dhīraḥ — steady, composed person</li>
                  <li>amṛtatva — freedom</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the result of acceptance.

                  When a person understands
                  that experiences are temporary,
                  they are not shaken easily.

                  Pleasure does not excite excessively.

                  Pain does not break them.

                  This steadiness is strength.

                  It is not indifference,
                  but maturity.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance leads to emotional balance.

                  Life continues to bring change,
                  but the mind remains steady.

                  This steadiness is essential
                  for clarity and freedom.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What kind of situations disturb me the most?

                  What would it look like
                  to remain steady in them?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-2-2-15" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-2-2-15" />
        </aside>
      </div>
    </div>
  );
}
