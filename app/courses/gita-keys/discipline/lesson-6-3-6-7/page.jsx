import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-6-3-6-7" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 6
              </h1>

              <h2 className="text-lg text-gray-600">
                The mind can be your friend or enemy (Gita 3.6–7)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  कर्मेन्द्रियाणि संयम्य य आस्ते मनसा स्मरन् ।<br />
                  इन्द्रियार्थान्विमूढात्मा मिथ्याचारः स उच्यते ॥ ३.६ ॥<br /><br />

                  यस्त्विन्द्रियाणि मनसा नियम्यारभतेऽर्जुन ।<br />
                  कर्मेन्द्रियैः कर्मयोगमसक्तः स विशिष्यते ॥ ३.७ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  karmendriyāṇi saṁyamya ya āste manasā smaran <br />
                  indriyārthān vimūḍhātmā mithyācāraḥ sa ucyate <br /><br />

                  yas tv indriyāṇi manasā niyamyārabhate arjuna <br />
                  karmendriyaiḥ karma-yogam asaktaḥ sa viśiṣyate
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who restrains the organs of action outwardly,
                  but continues to dwell on sense objects mentally,
                  is confused and not aligned.

                  But one who controls the senses with the mind,
                  and performs action without attachment,
                  is superior.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>saṁyamya — restraining</li>
                  <li>manasā smaran — mentally dwelling</li>
                  <li>mithyācāraḥ — false discipline</li>
                  <li>niyamya — regulating properly</li>
                  <li>asaktaḥ — without attachment</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna points out a subtle mistake.

                  Discipline is not just external control.

                  One may appear controlled outwardly,
                  but inwardly still be fully engaged in desires.

                  This creates inner conflict.

                  True discipline is internal.

                  The mind must be aligned,
                  not just the actions.

                  When the mind is steady,
                  action becomes naturally disciplined.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not about appearance.

                  It is about alignment.

                  When thoughts and actions are aligned,
                  there is clarity.

                  When they are not,
                  there is tension.

                  This verse shows that sādhana must include inner work.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Is my discipline only external,
                  or is my mind also aligned?

                  Where do I notice inner conflict
                  between what I do and what I think?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-6-3-6-7" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-6-3-6-7" />
        </aside>
      </div>
    </div>
  );
}
