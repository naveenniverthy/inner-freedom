import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-6-2-64" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 6
              </h1>

              <h2 className="text-lg text-gray-600">
                Moving freely without disturbance (Gita 2.64)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन् ।<br />
                  आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति ॥ २.६४ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  rāga-dveṣa-viyuktais tu viṣayān indriyaiś caran <br />
                  ātma-vaśyair vidheyātmā prasādam adhigacchati
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Moving among objects,
                  free from likes and dislikes,
                  with a disciplined mind,

                  one gains inner calm and clarity.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>rāga — attachment, strong liking</li>
                  <li>dveṣa — aversion, dislike</li>
                  <li>viyukta — free from</li>
                  <li>ātma-vaśya — self-controlled</li>
                  <li>prasāda — inner calm, clarity</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna clarifies an important point.

                  Acceptance does not mean withdrawal from life.

                  You can continue to engage with the world.

                  The difference is inner freedom.

                  When actions are not driven by strong likes and dislikes,
                  the mind remains calm.

                  Engagement continues,
                  but disturbance reduces.

                  This is a balanced way of living.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance weakens the hold of likes and dislikes.

                  Without this hold,
                  the mind becomes lighter.

                  This leads to clarity and steady living.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Where do my strong likes and dislikes control me?

                  What would it feel like
                  to act without being pulled by them?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-6-2-64" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-6-2-64" />
        </aside>
      </div>
    </div>
  );
}
