import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-17-14-6" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 17
              </h1>

              <h2 className="text-lg text-gray-600">
                Discipline begins with clarity (Gita 14.6)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  तत् सत्त्वं निर्मलत्वात् प्रकाशकमनामयम् ।<br />
                  सुखसङ्गेन बध्नाति ज्ञानसङ्गेन चानघ ॥ १४.६ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  tat sattvaṁ nirmalatvāt prakāśakam anāmayam <br />
                  sukha-saṅgena badhnāti jñāna-saṅgena cānagha
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Sattva (clarity) is pure and illuminating.

                  It reveals things as they are,
                  and brings a sense of calm and ease.

                  It also creates a natural inclination
                  toward knowledge and clarity.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>sattva — clarity, balance</li>
                  <li>nirmalatva — purity</li>
                  <li>prakāśaka — illuminating</li>
                  <li>jñāna-saṅga — inclination toward knowledge</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Discipline is supported by clarity.

                  When the mind is calm and clear,
                  discipline becomes natural.

                  When the mind is restless or dull,
                  discipline feels difficult.

                  Sattva — a state of balance and clarity —
                  supports learning, reflection, and steadiness.

                  It creates the right inner environment for growth.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not only effort.

                  It is also preparation of the mind.

                  A sattvic mind
                  supports discipline.

                  Therefore, lifestyle, values, and choices
                  all contribute to sādhana.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What helps bring clarity and calm into my mind?

                  What increases restlessness or dullness?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-17-14-6" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-17-14-6" />
        </aside>
      </div>
    </div>
  );
}
