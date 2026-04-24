import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-9-4-22" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 9
              </h1>

              <h2 className="text-lg text-gray-600">
                Trust in the order of life (Gita 4.22)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यदृच्छालाभसन्तुष्टो द्वन्द्वातीतो विमत्सरः ।<br />
                  समः सिद्धावसिद्धौ च कृत्वापि न निबध्यते ॥ ४.२२ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yadṛcchā-lābha-santuṣṭo dvandvātīto vimatsaraḥ <br />
                  samaḥ siddhāv asiddhau ca kṛtvāpi na nibadhyate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who is content with what comes,
                  who has gone beyond opposites,
                  and remains balanced in success and failure—

                  such a person is not bound by action.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yadṛcchā-lābha — what comes naturally</li>
                  <li>santuṣṭaḥ — content</li>
                  <li>dvandva — pairs of opposites</li>
                  <li>samaḥ — balanced</li>
                  <li>na nibadhyate — not bound</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now connects acceptance with trust.

                  Life does not always go as planned.

                  Results come based on many factors.

                  When we resist this,
                  the mind becomes tense.

                  When we accept and trust the order of life,
                  the mind relaxes.

                  Contentment arises,
                  not from control,
                  but from understanding.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance leads to contentment.

                  Instead of constant comparison and dissatisfaction,
                  there is a quiet trust.

                  This trust removes inner pressure.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I resist what comes in life,
                  or do I accept and respond?

                  What changes when I trust
                  the unfolding of life?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-9-4-22" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-9-4-22" />
        </aside>
      </div>
    </div>
  );
}
