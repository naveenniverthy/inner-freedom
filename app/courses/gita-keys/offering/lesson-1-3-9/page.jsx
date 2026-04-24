import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-1-3-9" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 1
              </h1>

              <h2 className="text-lg text-gray-600">
                Action as offering (Gita 3.9)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यज्ञार्थात्कर्मणोऽन्यत्र लोकोऽयं कर्मबन्धनः ।<br />
                  तदर्थं कर्म कौन्तेय मुक्तसङ्गः समाचर ॥ ३.९ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yajñārthāt karmaṇo&apos;nyatra loko&apos;yaṁ karma-bandhanaḥ <br />
                  tad-arthaṁ karma kaunteya mukta-saṅgaḥ samācara
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Action done for any purpose other than offering
                  leads to bondage.

                  Therefore, perform action as an offering,
                  free from attachment.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yajña — offering, sacred attitude</li>
                  <li>karma — action</li>
                  <li>bandhana — bondage</li>
                  <li>mukta-saṅga — free from attachment</li>
                  <li>samācara — perform properly</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna introduces a powerful shift.

                  Action itself is not the problem.

                  The attitude behind action
                  determines its effect.

                  When action is done only for personal gain,
                  it creates dependence and pressure.

                  When the same action is done as an offering,
                  it becomes light.

                  The action remains,
                  but the burden drops.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering means changing the attitude of action.

                  Instead of:
                  “I act for myself,”

                  it becomes:
                  “I offer this action.”

                  This removes the sense of ownership
                  and reduces stress.

                  Action becomes a contribution,
                  not a burden.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When I act,
                  what is my underlying attitude?

                  Can I try offering one action today,
                  instead of doing it for personal gain?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-1-3-9" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-1-3-9" />
        </aside>
      </div>
    </div>
  );
}
