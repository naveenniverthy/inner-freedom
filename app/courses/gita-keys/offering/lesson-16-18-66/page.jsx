import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-16-18-66" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 16
              </h1>

              <h2 className="text-lg text-gray-600">
                Let go into the total (Gita 18.66)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज ।<br />
                  अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः ॥ १८.६६ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  sarva-dharmān parityajya mām ekaṁ śaraṇaṁ vraja <br />
                  ahaṁ tvāṁ sarva-pāpebhyo mokṣayiṣyāmi mā śucaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

        <p className="text-gray-700">
          Give up every mistaken dependence and take refuge
          in Me alone, the total order.

          You will be freed from inner burden.

                  Do not worry.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>parityajya — letting go</li>
                  <li>śaraṇam — refuge</li>
                  <li>mokṣayiṣyāmi — I will free</li>
                  <li>mā śucaḥ — do not grieve</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

        <p className="text-gray-700">
          Krishna concludes the teaching of offering.

                  After understanding,
                  after discipline,
                  after right action—

                  the final step is letting go of the inner burden.

          This is not passivity.

          It is not permission to avoid dharma.

          Arjuna is not told to stop acting.

          He is taught to do his duty,
          and then give up the egoic burden and fear around it.

          So surrender is not withdrawal from life,
          but release of the false sense of isolated control.

                  The need to manage everything,
                  fix everything,
                  hold everything—

                  that drops.

                  What remains is trust,
                  alignment,
                  and freedom.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

        <p className="text-gray-700">
          Offering reaches its peak here.

          From:
          “I offer my action”

          To:
          “I let go of the burden entirely.”

          After doing what is to be done,
          the heart rests in trust.

                  This is inner freedom in action.

                  Nothing more needs to be added.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What am I still trying to control tightly?

                  What would it mean to act fully,
                  but let go inwardly?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-16-18-66" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-16-18-66" />
        </aside>
      </div>
    </div>
  );
}
