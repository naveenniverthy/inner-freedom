import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-4-4-23-24" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 4
              </h1>

              <h2 className="text-lg text-gray-600">
                Total vision of offering (Gita 4.23–24)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  गतसङ्गस्य मुक्तस्य ज्ञानावस्थितचेतसः ।<br />
                  यज्ञायाचरतः कर्म समग्रं प्रविलीयते ॥ ४.२३ ॥<br /><br />

                  ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम् ।<br />
                  ब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना ॥ ४.२४ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  gata-saṅgasya muktasya jñānāvasthita-cetasaḥ <br />
                  yajñāyācarataḥ karma samagraṁ pravilīyate <br /><br />

                  brahmārpaṇaṁ brahma havir brahmāgnau brahmaṇā hutam <br />
                  brahmaiva tena gantavyaṁ brahma-karma-samādhinā
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  For one who is free from attachment
                  and acts with understanding,
                  all actions become offering
                  and lose their binding nature.

                  In this vision,
                  the offering, the action, the instrument,
                  and the result —
                  all are part of one total reality.

                  With this understanding,
                  action becomes complete and free.
                </p>
              </section>

              {/* Key Ideas */}
              <section>
                <h3 className="font-medium text-lg">Key Ideas</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>yajña — offering</li>
                  <li>brahma — total reality, whole</li>
                  <li>saṅga — attachment</li>
                  <li>samādhi — steady understanding</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now gives the highest vision of offering.

                  It is not just:
                  “I offer this action.”

                  It becomes:
                  everything involved in action
                  is part of one total order.

                  The doer,
                  the action,
                  the tools,
                  the result —
                  all are interconnected.

                  With this understanding,
                  the sense of separation reduces.

                  Action becomes natural,
                  light,
                  and free.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering begins as an attitude.

                  It matures into a vision.

                  First:
                  “I offer my action.”

                  Later:
                  “Everything is already part of a total order.”

                  This removes the sense of isolation
                  and brings deep ease in action.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  When I act,
                  do I feel separate from everything else?

                  What changes when I see my action
                  as part of a larger whole?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-4-4-23-24" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-4-4-23-24" />
        </aside>
      </div>
    </div>
  );
}
