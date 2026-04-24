import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-7-2-65" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 7
              </h1>

              <h2 className="text-lg text-gray-600">
                Calmness leads to clarity (Gita 2.65)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  प्रसादे सर्वदुःखानां हानिरस्योपजायते ।<br />
                  प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते ॥ २.६५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  prasāde sarva-duḥkhānāṁ hānir asyopajāyate <br />
                  prasanna-cetaso hy āśu buddhiḥ paryavatiṣṭhate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  From inner calmness,
                  all sorrow reduces.

                  For a calm mind,
                  clarity arises quickly.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>prasāda — inner calm, acceptance</li>
                  <li>duḥkha — sorrow, disturbance</li>
                  <li>prasanna-cetasaḥ — calm and clear mind</li>
                  <li>buddhiḥ — intellect, clarity</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the benefit of acceptance.

                  When the mind is calm,
                  disturbance reduces.

                  When disturbance reduces,
                  clarity increases.

                  Most confusion in life
                  does not come from lack of knowledge.

                  It comes from a disturbed mind.

                  Acceptance removes that disturbance.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance leads to prasāda —
                  a calm and clear state of mind.

                  This state allows better thinking,
                  better decisions,
                  and better living.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When my mind is disturbed,
                  how clearly do I think?

                  What happens when I become calm first?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-7-2-65" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-7-2-65" />
        </aside>
      </div>
    </div>
  );
}
