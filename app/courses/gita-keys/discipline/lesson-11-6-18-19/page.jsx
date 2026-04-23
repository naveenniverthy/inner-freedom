import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-11-6-18-19" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 11
              </h1>

              <h2 className="text-lg text-gray-600">
                A steady mind in meditation (Gita 6.18–19)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यदा विनियतं चित्तमात्मन्येवावतिष्ठते ।<br />
                  निःस्पृहः सर्वकामेभ्यो युक्त इत्युच्यते तदा ॥ ६.१८ ॥<br /><br />

                  यथा दीपो निवातस्थो नेङ्गते सोपमा स्मृता ।<br />
                  योगिनो यतचित्तस्य युञ्जतो योगमात्मनः ॥ ६.१९ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yadā viniyataṁ cittam ātmany evāvatiṣṭhate <br />
                  niḥspṛhaḥ sarva-kāmebhyo yukta ity ucyate tadā <br /><br />

                  yathā dīpo nivāta-stho neṅgate sopamā smṛtā <br />
                  yogino yata-cittasya yuñjato yogam ātmanaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  When the disciplined mind rests in the Self,
                  free from cravings,
                  one is said to be established in yoga.

                  Like a flame in a windless place that does not flicker,
                  the mind of a disciplined person remains steady.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>viniyataṁ cittam — well-controlled mind</li>
                  <li>niḥspṛhaḥ — free from craving</li>
                  <li>yuktaḥ — integrated, disciplined</li>
                  <li>dīpaḥ — lamp</li>
                  <li>nivāta — without wind</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the result of discipline.

                  When the mind is trained,
                  it becomes steady.

                  Not restless,
                  not pulled in different directions,
                  but quiet and stable.

                  The example is simple:

                  A flame in a windless place.

                  No disturbance,
                  no flickering.

                  This steadiness allows the mind
                  to remain with clarity.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline leads to inner stillness.

                  Without discipline,
                  the mind keeps moving.

                  With discipline,
                  it becomes available for clarity and understanding.

                  This verse shows the goal of sādhana —
                  a steady and available mind.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When does my mind feel most steady?

                  What disturbs it the most?

                  What helps it become like a steady flame?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-11-6-18-19" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-11-6-18-19" />
        </aside>
      </div>
    </div>
  );
}
