import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-12-12-18-19" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 12
              </h1>

              <h2 className="text-lg text-gray-600">
                Equal in all situations (Gita 12.18–19)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  समः शत्रौ च मित्रे च तथा मानापमानयोः ।<br />
                  शीतोष्णसुखदुःखेषु समः सङ्गविवर्जितः ॥ १२.१८ ॥<br /><br />

                  तुल्यनिन्दास्तुतिर्मौनी सन्तुष्टो येन केनचित् ।<br />
                  अनिकेतः स्थिरमतिर्भक्तिमान्मे प्रियो नरः ॥ १२.१९ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  samaḥ śatrau ca mitre ca tathā mānāpamānayoḥ <br />
                  śītoṣṇa-sukha-duḥkheṣu samaḥ saṅga-vivarjitaḥ <br /><br />

                  tulya-nindā-stutir maunī santuṣṭo yena kenacit <br />
                  aniketaḥ sthira-matir bhaktimān me priyo naraḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who remains the same
                  in friend and enemy,
                  in honor and insult,
                  in comfort and discomfort,

                  who is balanced in praise and criticism,
                  content and steady—

                  such a person lives with deep acceptance.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>samaḥ — equal, balanced</li>
                  <li>māna-apamāna — honor and insult</li>
                  <li>nindā-stuti — blame and praise</li>
                  <li>santuṣṭaḥ — content</li>
                  <li>sthira-matiḥ — steady mind</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the maturity of acceptance.

                  Life brings different situations:
                  praise and criticism,
                  success and failure,
                  comfort and discomfort.

                  The immature mind reacts strongly.

                  The mature mind remains steady.

                  This does not mean insensitivity.

                  It means freedom from dependence
                  on external conditions.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance removes emotional swings.

                  The mind is no longer controlled
                  by changing situations.

                  This creates stability and peace.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What affects me more —
                  praise or criticism?

                  What would it mean
                  to stay steady in both?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-12-12-18-19" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-12-12-18-19" />
        </aside>
      </div>
    </div>
  );
}
