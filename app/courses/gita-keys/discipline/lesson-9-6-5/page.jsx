import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-9-6-5" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 9
              </h1>

              <h2 className="text-lg text-gray-600">
                The mind can be your friend or enemy (Gita 6.5)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  उद्धरेदात्मनाऽत्मानं नात्मानमवसादयेत् ।<br />
                  आत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः ॥ ६.५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  uddhared ātmanātmānaṁ nātmānam avasādayet <br />
                  ātmaiva hy ātmano bandhur ātmaiva ripur ātmanaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One should lift oneself by oneself,
                  and not let oneself fall.

                  The mind alone is one’s friend,
                  and the mind alone is one’s enemy.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>uddharet — uplift, raise</li>
                  <li>ātmanā — by oneself</li>
                  <li>bandhuḥ — friend</li>
                  <li>ripuḥ — enemy</li>
                  <li>avasādayet — degrade, pull down</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now places responsibility clearly within.

                  The mind is not neutral.

                  It can either support growth
                  or create disturbance.

                  A trained mind becomes a friend —
                  steady, supportive, and clear.

                  An untrained mind becomes an enemy —
                  reactive, restless, and distracting.

                  Discipline is the process
                  of turning the mind into an ally.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is self-management.

                  It is not imposed from outside.

                  It is the ability to guide the mind
                  toward what is right.

                  This verse shows that real progress
                  depends on how we relate to our own mind.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  In my daily life,
                  is my mind helping me grow,
                  or pulling me away?

                  What small step can I take
                  to make it more supportive?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-9-6-5" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-9-6-5" />
        </aside>
      </div>
    </div>
  );
}
