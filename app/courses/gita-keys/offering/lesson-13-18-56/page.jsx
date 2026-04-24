import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-13-18-56" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 13
              </h1>

              <h2 className="text-lg text-gray-600">
                Acting while remaining free (Gita 18.56)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  सर्वकर्माण्यपि सदा कुर्वाणो मद्व्यपाश्रयः ।<br />
                  मत्प्रसादादवाप्नोति शाश्वतं पदमव्ययम् ॥ १८.५६ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  sarva-karmāṇy api sadā kurvāṇo mad-vyapāśrayaḥ <br />
                  mat-prasādād avāpnoti śāśvataṁ padam avyayam
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Even while performing all actions,
          one who is aligned and takes refuge in the higher—

          by the grace of that alignment,
          reaches the lasting and changeless state.
        </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>sarva-karmāṇi — all actions</li>
                  <li>mad-vyapāśrayaḥ — taking refuge in the higher</li>
                  <li>prasāda — grace, result of alignment</li>
                  <li>śāśvatam padam — lasting freedom</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna gives an important clarity.

                  Freedom does not require stopping action.

                  Action can continue.

                  The difference is inner alignment.

          When actions are done with the attitude of offering
          and with trust in the order of life,

          the person remains inwardly free.

          Life continues,
          but the burden drops.

          The verse also adds
          mat-prasādāt —
          by grace.

          Freedom is not produced by ego alone.

          It is recognized in a mind made ready
          through right living,
          offering,
          and grace.
        </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering allows action and freedom to coexist.

                  You do not have to withdraw from life.

                  You can act fully,
                  and still remain inwardly light.

                  This is the beauty of this teaching.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I feel I must escape action to feel free?

                  What changes when I act
                  with alignment instead?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-13-18-56" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-13-18-56" />
        </aside>
      </div>
    </div>
  );
}
