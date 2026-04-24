import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-3-2-38" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 3
              </h1>

              <h2 className="text-lg text-gray-600">
                Stay balanced in outcomes (Gita 2.38)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ ।<br />
                  ततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि ॥ २.३८ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  sukha-duḥkhe same kṛtvā lābhālābhau jayājayau <br />
                  tato yuddhāya yujyasva naivaṁ pāpam avāpsyasi
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Treat pleasure and pain,
                  gain and loss,
                  success and failure equally.

                  Then act.

                  In this way,
                  you remain free from inner disturbance.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>sama — balanced</li>
                  <li>sukha-duḥkha — pleasure and pain</li>
                  <li>lābha-alābha — gain and loss</li>
                  <li>jaya-ajaya — success and failure</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna connects acceptance with action.

                  Acceptance does not mean stopping action.

                  It means acting without being disturbed by outcomes.

                  Life brings opposite pairs:
                  success and failure,
                  gain and loss.

                  When the mind reacts strongly,
                  it loses clarity.

                  When it remains balanced,
                  action becomes steady and effective.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance stabilizes the mind in action.

                  Results still come,
                  but they do not shake the person.

                  This allows consistent and clear action.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Which result affects me the most —
                  success or failure?

                  What changes if I remain balanced
                  in both?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-3-2-38" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-3-2-38" />
        </aside>
      </div>
    </div>
  );
}
