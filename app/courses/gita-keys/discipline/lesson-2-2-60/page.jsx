import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-2-2-60" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 2
              </h1>

              <h2 className="text-lg text-gray-600">
                The force of the senses (Gita 2.60)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः ।<br />
                  इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः ॥ २.६० ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yatato hy api kaunteya puruṣasya vipaścitaḥ <br />
                  indriyāṇi pramāthīni haranti prasabhaṁ manaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Even for a wise person who is striving,
                  the turbulent senses can forcefully carry away the mind.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yatataḥ — striving, making effort</li>
                  <li>vipaścitaḥ — a thoughtful or wise person</li>
                  <li>indriyāṇi — senses</li>
                  <li>pramāthīni — turbulent, agitating</li>
                  <li>haranti — carry away</li>
                  <li>prasabham — forcefully</li>
                  <li>manaḥ — mind</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna gives an honest warning.

                  Discipline is necessary because the senses are powerful.

                  Even a thoughtful person,
                  even one who has understanding,
                  can be pulled outward by habit, attraction, and stimulation.

                  The senses do not always ask permission.

                  They move quickly,
                  and the mind follows.

                  This is why discipline cannot be casual.

                  It must be steady, alert, and intentional.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline begins with realism.

                  We should not assume that understanding alone
                  will automatically control the mind.

                  The senses have momentum.

                  Practice is needed
                  to prevent the mind from being carried away.

                  This verse explains why sādhana matters.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  In what situations do my senses pull my mind most strongly?

                  Where do I need more alertness,
                  not just good intention?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-2-2-60" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-2-2-60" />
        </aside>
      </div>
    </div>
  );
}
