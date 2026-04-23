import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-3-2-61" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 3
              </h1>

              <h2 className="text-lg text-gray-600">
                Discipline needs a higher orientation (Gita 2.61)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  तानि सर्वाणि संयम्य युक्त आसीत मत्परः ।<br />
                  वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता ॥ २.६१ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  tāni sarvāṇi saṁyamya yukta āsīta mat-paraḥ <br />
                  vaśe hi yasyendriyāṇi tasya prajñā pratiṣṭhitā
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Restraining all the senses, one should remain disciplined,
                  with the mind centered on Me.
                  For the one whose senses are under control,
                  understanding becomes steady.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>saṁyamya — restraining, bringing under control</li>
                  <li>yuktaḥ — disciplined, integrated</li>
                  <li>mat-paraḥ — centered on Me, aligned with the highest</li>
                  <li>vaśe — under control</li>
                  <li>indriyāṇi — senses</li>
                  <li>prajñā pratiṣṭhitā — steady understanding</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now gives the secret of discipline.

                  Sense control is not just suppression.

                  It is not enough to say “no” to the senses.
                  The mind needs a higher direction.

                  “Mat-paraḥ” means living with a deeper orientation —
                  toward truth, toward Ishvara, toward what truly matters.

                  When the mind has a higher commitment,
                  discipline becomes possible.

                  Without that, restraint becomes a struggle.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline becomes steady
                  when it is supported by purpose.

                  If I only try to control myself,
                  I may become tired or frustrated.

                  But when my life is aligned with something higher,
                  discipline becomes meaningful.

                  This verse shows that sādhana needs both restraint and direction.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What is the higher purpose guiding my discipline?

                  Am I only trying to control habits,
                  or am I aligning my life with something deeper?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-3-2-61" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-3-2-61" />
        </aside>
      </div>
    </div>
  );
}
