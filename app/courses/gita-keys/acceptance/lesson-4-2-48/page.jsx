import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-4-2-48" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 4
              </h1>

              <h2 className="text-lg text-gray-600">
                Yoga is balance in action (Gita 2.48)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय ।<br />
                  सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते ॥ २.४८ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yoga-sthaḥ kuru karmāṇi saṅgaṁ tyaktvā dhanañjaya <br />
                  siddhy-asiddhyoḥ samo bhūtvā samatvaṁ yoga ucyate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Established in balance,
                  perform action,
                  giving up attachment.

                  Remain the same in success and failure.

                  This balance is called yoga.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yoga-sthaḥ — established in steadiness</li>
                  <li>saṅgaṁ tyaktvā — giving up attachment</li>
                  <li>siddhi-asiddhi — success and failure</li>
                  <li>samatvam — balance</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna defines yoga in a simple way.

                  It is not only meditation.

                  It is balance in action.

                  When we act,
                  results will vary.

                  If the mind depends on results,
                  it becomes unstable.

                  If the mind remains balanced,
                  action becomes free.

                  This balance is inner strength.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance creates this balance.

                  It allows us to act fully,
                  without being shaken by results.

                  This is the practical meaning of yoga.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I feel different when I succeed
                  versus when I fail?

                  What would it mean to stay steady
                  in both situations?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-4-2-48" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-4-2-48" />
        </aside>
      </div>
    </div>
  );
}
