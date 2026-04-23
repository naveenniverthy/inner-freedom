import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-5-2-67" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 5
              </h1>

              <h2 className="text-lg text-gray-600">
                Lack of discipline leads to loss of clarity (Gita 2.67)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते ।<br />
                  तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि ॥ २.६७ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  indriyāṇāṁ hi caratāṁ yan mano&apos;nuvidhīyate <br />
                  tad asya harati prajñāṁ vāyur nāvam ivāmbhasi
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  When the mind follows wandering senses,
                  it takes away one’s clarity,
                  just like the wind carries away a boat on water.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>indriyāṇām — senses</li>
                  <li>caratām — wandering</li>
                  <li>mano&apos;nuvidhīyate — mind following</li>
                  <li>harati — takes away</li>
                  <li>prajñā — clarity, understanding</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna gives a clear consequence.

                  If the senses are not managed,
                  they pull the mind outward.

                  When the mind keeps chasing objects,
                  it loses stability.

                  And when the mind is unstable,
                  clarity is lost.

                  The image is powerful:

                  Like a boat pushed by strong wind,
                  the mind is carried away without direction.

                  Discipline is what keeps the mind steady.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline protects clarity.

                  Without discipline,
                  even good understanding cannot remain.

                  The mind needs stability
                  to hold on to knowledge.

                  This verse shows the cost
                  of lack of discipline.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When my mind becomes restless,
                  what usually triggered it?

                  What would help me regain steadiness in that moment?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-5-2-67" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-5-2-67" />
        </aside>
      </div>
    </div>
  );
}
