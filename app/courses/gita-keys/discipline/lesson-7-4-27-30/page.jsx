import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-7-4-27-30" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 7
              </h1>

              <h2 className="text-lg text-gray-600">
                Different forms of disciplined living (Gita 4.27–30)
              </h2>

              {/* Verses (Selected flow) */}
              <section>
                <h3 className="font-medium text-lg">Verses (Selected)</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  सर्वाणीन्द्रियकर्माणि प्राणकर्माणि चापरे ।<br />
                  आत्मसंयमयोगाग्नौ जुह्वति ज्ञानदीपिते ॥ ४.२७ ॥<br /><br />

                  द्रव्ययज्ञास्तपोयज्ञा योगयज्ञास्तथापरे ।<br />
                  स्वाध्यायज्ञानयज्ञाश्च यतयः संशितव्रताः ॥ ४.२८ ॥<br /><br />

                  अपाने जुह्वति प्राणं प्राणेऽपानं तथापरे ।<br />
                  प्राणापानगती रुद्ध्वा प्राणायामपरायणाः ॥ ४.२९ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  ātma-saṁyama-yoga-agnau <br />
                  dravya-yajñāḥ tapaḥ-yajñāḥ yoga-yajñāḥ <br />
                  svādhyāya-jñāna-yajñāḥ <br />
                  prāṇāyāma-parāyaṇāḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Some offer sense activities into the fire of discipline.

                  Others follow disciplines such as giving, austerity,
                  study, and contemplation.

                  Some practice breath regulation and inner control.

                  All these are different forms of disciplined living,
                  performed with commitment and clarity.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yajña — disciplined offering</li>
                  <li>tapas — discipline, austerity</li>
                  <li>svādhyāya — self-study</li>
                  <li>jñāna — knowledge</li>
                  <li>prāṇāyāma — breath discipline</li>
                  <li>saṁyama — self-control</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna expands the idea of discipline.

                  Discipline is not one single practice.

                  It can take many forms.

                  Giving, study, meditation, breath control,
                  and sense restraint —
                  all are forms of sādhana.

                  What matters is not the form,
                  but the intention and consistency.

                  Discipline is a way of living,
                  not a single activity.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline must be integrated into life.

                  It is not limited to one hour of practice.

                  It includes how we think,
                  act,
                  speak,
                  and live.

                  This verse helps expand the understanding
                  of what sādhana truly means.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What forms of discipline exist in my life today?

                  Are they consistent and meaningful,
                  or occasional and reactive?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-7-4-27-30" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-7-4-27-30" />
        </aside>
      </div>
    </div>
  );
}
