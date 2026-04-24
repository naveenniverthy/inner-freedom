import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-8-2-70" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 8
              </h1>

              <h2 className="text-lg text-gray-600">
                Inner fullness and peace (Gita 2.70)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत् ।<br />
                  तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी ॥ २.७० ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  āpūryamāṇam acala-pratiṣṭhaṁ samudram āpaḥ praviśanti yadvat <br />
                  tadvat kāmā yaṁ praviśanti sarve sa śāntim āpnoti na kāma-kāmī
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Just as rivers flow into the ocean,
                  yet the ocean remains full and undisturbed,

                  similarly,
                  one in whom experiences come and go
                  without disturbance,
                  gains peace.

                  Not the one who is constantly seeking fulfillment.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>samudra — ocean</li>
                  <li>kāma — desire</li>
                  <li>śānti — peace</li>
                  <li>acala — unmoving, steady</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna gives a powerful image.

                  The ocean remains full,
                  no matter how many rivers flow into it.

                  It does not overflow with excitement,
                  nor does it feel incomplete.

                  Similarly,
                  a mature person remains inwardly full.

                  Experiences come and go,
                  but they do not disturb the inner state.

                  This is true peace.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance leads to inner fullness.

                  When we stop depending on outcomes for happiness,
                  we become stable.

                  Life continues to bring experiences,
                  but the mind remains undisturbed.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I depend on external outcomes for peace?

                  What would it mean
                  to feel inwardly full,
                  regardless of circumstances?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-8-2-70" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-8-2-70" />
        </aside>
      </div>
    </div>
  );
}
