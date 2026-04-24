import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-7-9-27-28" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 7
              </h1>

              <h2 className="text-lg text-gray-600">
                Offer everything (Gita 9.27–28)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यत्करोषि यदश्नासि यज्जुहोषि ददासि यत् ।<br />
                  यत्तपस्यसि कौन्तेय तत्कुरुष्व मदर्पणम् ॥ ९.२७ ॥<br /><br />

                  शुभाशुभफलैरेवं मोक्ष्यसे कर्मबन्धनैः ।<br />
                  संन्यासयोगयुक्तात्मा विमुक्तो मामुपैष्यसि ॥ ९.२८ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yat karoṣi yad aśnāsi yaj juhoṣi dadāsi yat <br />
                  yat tapasyasi kaunteya tat kuruṣva mad-arpaṇam <br /><br />

                  śubhāśubha-phalair evaṁ mokṣyase karma-bandhanaiḥ <br />
                  sannyāsa-yoga-yuktātmā vimukto mām upaiṣyasi
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Whatever you do,
                  whatever you consume,
                  whatever you offer,
                  whatever you give,
                  whatever discipline you practice—

                  do all of it as an offering.

                  In this way,
                  you become free from the binding effects of actions,
                  whether pleasant or unpleasant.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>mad-arpaṇam — offering to Me</li>
                  <li>karma-bandhana — bondage of action</li>
                  <li>śubha-aśubha — pleasant and unpleasant results</li>
                  <li>vimuktaḥ — free</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now makes offering complete.

                  Not just selected actions.

                  Everything.

                  Eating,
                  working,
                  giving,
                  practicing,
                  daily life itself.

                  When everything becomes an offering,
                  there is no division between
                  “spiritual” and “ordinary.”

                  Life becomes one continuous flow of offering.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering becomes a way of living.

                  Not an occasional practice,
                  but a continuous attitude.

                  This removes the burden of results
                  and brings freedom in action.

                  Every moment becomes meaningful.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Can I include ordinary actions
                  in my offering?

                  What changes when even small actions
                  are done with this attitude?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-7-9-27-28" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-7-9-27-28" />
        </aside>
      </div>
    </div>
  );
}
