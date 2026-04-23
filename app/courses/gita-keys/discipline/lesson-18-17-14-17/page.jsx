import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-18-17-14-17" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Discipline — Lesson 18
              </h1>

              <h2 className="text-lg text-gray-600">
                Discipline of body, speech, and mind (Gita 17.14–17)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  देवद्विजगुरुप्राज्ञपूजनं शौचमार्जवम् ।<br />
                  ब्रह्मचर्यमहिंसा च शारीरं तप उच्यते ॥ १७.१४ ॥<br /><br />

                  अनुद्वेगकरं वाक्यं सत्यं प्रियहितं च यत् ।<br />
                  स्वाध्यायाभ्यसनं चैव वाङ्मयं तप उच्यते ॥ १७.१५ ॥<br /><br />

                  मनः प्रसादः सौम्यत्वं मौनमात्मविनिग्रहः ।<br />
                  भावसंशुद्धिरित्येतत्तपो मानसमुच्यते ॥ १७.१६ ॥<br /><br />

                  श्रद्धया परया तप्तं तपस्तत्त्रिविधं नरैः ।<br />
                  अफलाकाङ्क्षिभिर्युक्तैः सात्त्विकं परिचक्षते ॥ १७.१७ ॥
                </div>
              </section>

              {/* Transliteration (key lines) */}
              <section>
                <h3 className="font-medium text-lg">Transliteration (Key Lines)</h3>

                <p className="text-gray-700">
                  śārīraṁ tapaḥ — discipline of body <br />
                  vāṅmayaṁ tapaḥ — discipline of speech <br />
                  mānasam tapaḥ — discipline of mind <br />
                  śraddhayā — with commitment and sincerity
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Discipline exists at three levels:

                  In the body — through right actions and conduct.

                  In speech — through truthful, kind, and beneficial words.

                  In the mind — through calmness, self-control, and purity.

                  When practiced with sincerity,
                  this discipline becomes balanced and steady.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>tapas — discipline</li>
                  <li>śārīra — physical</li>
                  <li>vāṅmaya — verbal</li>
                  <li>mānasa — mental</li>
                  <li>śraddhā — sincerity, commitment</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now gives a complete view of discipline.

                  It is not limited to meditation or practice time.

                  Discipline includes:
                  how we act,
                  how we speak,
                  and how we think.

                  All three must be aligned.

                  If one is disciplined in action
                  but careless in speech or thought,
                  the mind remains disturbed.

                  True discipline is total alignment.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Discipline</h3>

                <p className="text-gray-700">
                  Discipline is holistic.

                  It touches every part of life.

                  Small things matter —
                  words, reactions, habits.

                  When all levels are aligned,
                  the mind becomes stable and refined.

                  This prepares it for clarity.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Which area needs more attention —
                  my actions, my speech, or my thoughts?

                  What is one small improvement I can make today?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="discipline" lessonSlug="lesson-18-17-14-17" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="discipline" currentLessonSlug="lesson-18-17-14-17" />
        </aside>
      </div>
    </div>
  );
}
