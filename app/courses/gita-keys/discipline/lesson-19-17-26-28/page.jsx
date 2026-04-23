import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-19-17-26-28" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 19
              </h1>

              <h2 className="text-lg text-gray-600">
                Consistency gives value to action (Gita 17.26–28)
              </h2>

              {/* Verses (Selected flow) */}
              <section>
                <h3 className="font-medium text-lg">Verses (Selected)</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  सद्भावे साधुभावे च सदित्येतत्प्रयुज्यते ।<br />
                  प्रशस्ते कर्मणि तथा सच्छब्दः पार्थ युज्यते ॥ १७.२६ ॥<br /><br />

                  यज्ञे तपसि दाने च स्थितिः सदिति चोच्यते ।<br />
                  कर्म चैव तदर्थीयं सदित्येवाभिधीयते ॥ १७.२७ ॥<br /><br />

                  अश्रद्धया हुतं दत्तं तपस्तप्तं कृतं च यत् ।<br />
                  असदित्युच्यते पार्थ न च तत्प्रेत्य नो इह ॥ १७.२८ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  sat-bhāva — alignment with truth <br />
                  sthitiḥ — steadiness, consistency <br />
                  śraddhā — sincerity, commitment <br />
                  aśraddhayā — without sincerity
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Actions done with alignment, sincerity, and steadiness
                  are meaningful and effective.

                  But actions done without commitment or clarity
                  lose their value.

                  Discipline requires both consistency and sincerity.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>sat — alignment with truth</li>
                  <li>śraddhā — sincerity</li>
                  <li>sthiti — steadiness</li>
                  <li>asat — lack of alignment</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now highlights an important aspect of discipline.

                  It is not just what we do,
                  but how we do it.

                  The same action can be meaningful
                  or empty.

                  The difference is:
                  sincerity and consistency.

                  Without commitment,
                  practice becomes mechanical.

                  With commitment,
                  even simple actions become powerful.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is not about intensity.

                  It is about steady and sincere effort.

                  Small actions done consistently
                  shape the mind deeply.

                  This verse shows that
                  sincerity gives life to practice.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Are my practices done with sincerity,
                  or just as a routine?

                  What would it mean to bring full attention
                  into what I already do?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-19-17-26-28" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-19-17-26-28" />
        </aside>
      </div>
    </div>
  );
}
