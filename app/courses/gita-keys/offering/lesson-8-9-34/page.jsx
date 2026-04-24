import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-8-9-34" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 8
              </h1>

              <h2 className="text-lg text-gray-600">
                Keep the mind aligned (Gita 9.34)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।<br />
                  मामेवैष्यसि युक्त्वैवमात्मानं मत्परायणः ॥ ९.३४ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  man-manā bhava mad-bhakto mad-yājī māṁ namaskuru <br />
                  mām evaiṣyasi yuktvaivam ātmānaṁ mat-parāyaṇaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Keep your mind aligned,
                  be devoted,
                  act with offering,
                  and stay connected to the higher.

                  With this alignment,
                  you move steadily toward clarity and freedom.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>man-manā — mind aligned</li>
                  <li>mad-bhaktaḥ — committed, devoted</li>
                  <li>mad-yājī — acting as offering</li>
                  <li>mat-parāyaṇaḥ — oriented toward the highest</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna brings everything together.

                  Offering is not only about action.

                  It includes the mind.

                  The mind must remain aligned,
                  not scattered.

                  When the mind, action, and intention
                  are aligned,
                  life becomes simple.

                  There is no inner conflict.

                  This alignment brings steadiness and clarity.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering is complete only when
                  both action and mind are aligned.

                  If action is offering,
                  but the mind is restless,
                  the benefit is limited.

                  Alignment of mind makes offering powerful.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When I act,
                  where is my mind?

                  Can I bring alignment between
                  my action and my attention?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-8-9-34" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-8-9-34" />
        </aside>
      </div>
    </div>
  );
}
