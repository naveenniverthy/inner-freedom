import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-13-6-35" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 13
              </h1>

              <h2 className="text-lg text-gray-600">
                The mind can be trained (Gita 6.35)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  असंशयं महाबाहो मनो दुर्निग्रहं चलम् ।<br />
                  अभ्यासेन तु कौन्तेय वैराग्येण च गृह्यते ॥ ६.३५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  asaṁśayaṁ mahā-bāho mano durnigrahaṁ calam <br />
                  abhyāsena tu kaunteya vairāgyeṇa ca gṛhyate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  No doubt, the mind is restless and difficult to control.

                  But, through practice and dispassion,
                  it can be trained.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>asaṁśayam — without doubt</li>
                  <li>durnigraham — difficult to control</li>
                  <li>calam — restless</li>
                  <li>abhyāsa — repeated practice</li>
                  <li>vairāgya — dispassion, letting go</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Arjuna raises a doubt:
                  the mind seems impossible to control.

                  Krishna agrees.

                  The mind is indeed restless.

                  But he adds something important:

                  It is trainable.

                  Two tools are given:

                  Practice — returning again and again.

                  Dispassion — not getting pulled by every thought or desire.

                  Together,
                  they slowly reshape the mind.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is built over time.

                  Not by force,
                  but by repetition and letting go.

                  Practice builds strength.

                  Dispassion reduces disturbance.

                  This verse gives the core method of sādhana.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What is one practice I can repeat daily?

                  What is one thing I can begin to let go of,
                  that disturbs my mind?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-13-6-35" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-13-6-35" />
        </aside>
      </div>
    </div>
  );
}
