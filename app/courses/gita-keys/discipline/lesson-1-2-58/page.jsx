import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-1-2-58" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 1
              </h1>

              <h2 className="text-lg text-gray-600">
                Withdrawing the senses (Gita 2.58)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः ।<br />
                  इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता ॥ २.५८ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yadā saṁharate cāyaṁ kūrmo&apos;ṅgānīva sarvaśaḥ <br />
                  indriyāṇīndriyārthebhyas tasya prajñā pratiṣṭhitā
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  When, like a tortoise withdrawing its limbs from all sides,
                  a person withdraws the senses from their objects,
                  then his understanding is steady.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>saṁharate — withdraws</li>
                  <li>kūrmaḥ — tortoise</li>
                  <li>aṅgāni — limbs</li>
                  <li>indriyāṇi — senses</li>
                  <li>indriyārthebhyaḥ — from sense objects</li>
                  <li>prajñā pratiṣṭhitā — steady understanding</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna begins the practical discipline of steadiness.

                  The senses naturally move outward.

                  They see, hear, taste, touch, and chase objects.

                  Discipline begins when the person is able to pause
                  and withdraw the senses when needed.

                  This is not rejection of the world.

                  It is mastery.

                  The senses remain available,
                  but they no longer rule the mind.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is the training that protects clarity.

                  Without discipline,
                  understanding can be overwhelmed by habit and impulse.

                  With discipline,
                  the mind becomes steady enough to live what it knows.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Where do my senses pull me most strongly?

                  Can I pause and step back before following the impulse?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-1-2-58" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-1-2-58" />
        </aside>
      </div>
    </div>
  );
}
