import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-10-12-13-14" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 10
              </h1>

              <h2 className="text-lg text-gray-600">
                A peaceful person accepts all (Gita 12.13–14)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  अद्वेष्टा सर्वभूतानां मैत्रः करुण एव च ।<br />
                  निर्ममो निरहङ्कारः समदुःखसुखः क्षमी ॥ १२.१३ ॥<br /><br />

                  सन्तुष्टः सततं योगी यतात्मा दृढनिश्चयः ।<br />
                  मय्यर्पितमनोबुद्धिर्यो मद्भक्तः स मे प्रियः ॥ १२.१४ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  adveṣṭā sarva-bhūtānāṁ maitraḥ karuṇa eva ca <br />
                  nirmamo nirahaṅkāraḥ sama-duḥkha-sukhaḥ kṣamī <br /><br />

                  santuṣṭaḥ satataṁ yogī yatātmā dṛḍha-niścayaḥ <br />
                  mayy arpita-mano-buddhir yo mad-bhaktaḥ sa me priyaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who has no hatred,
                  is friendly and compassionate,
                  free from possessiveness and ego,

                  balanced in pleasure and pain,
                  forgiving, content, and steady—

                  such a person lives in peace and alignment.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>adveṣṭā — free from hatred</li>
                  <li>maitraḥ — friendly</li>
                  <li>karuṇa — compassionate</li>
                  <li>nirmama — free from possessiveness</li>
                  <li>nirahaṅkāra — free from ego</li>
                  <li>santuṣṭaḥ — content</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now describes the natural result of acceptance.

                  When a person accepts life,
                  negativity reduces.

                  Comparison reduces.
                  Ego reduces.
                  Resistance reduces.

                  What remains is:
                  friendliness,
                  compassion,
                  and calmness.

                  This is not forced behavior.

                  It is the natural outcome
                  of a settled mind.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance transforms relationships.

                  When we are not reacting constantly,
                  we relate more openly and calmly.

                  This creates harmony in life.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I react to people with resistance or openness?

                  What changes when I approach others
                  with acceptance and calmness?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-10-12-13-14" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-10-12-13-14" />
        </aside>
      </div>
    </div>
  );
}
