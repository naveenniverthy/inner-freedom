import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-2-3-30" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 2
              </h1>

              <h2 className="text-lg text-gray-600">
                Surrender the burden of doership (Gita 3.30)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  मयि सर्वाणि कर्माणि संन्यस्याध्यात्मचेतसा ।<br />
                  निराशीर्निर्ममो भूत्वा युध्यस्व विगतज्वरः ॥ ३.३० ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  mayi sarvāṇi karmāṇi sannyasyādhyātma-cetasā <br />
                  nirāśīr nirmamo bhūtvā yudhyasva vigata-jvaraḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Surrender all actions to Me, with a mind rooted in understanding.
                  Free from expectation and possessiveness, and without inner agitation,
                  perform your duty.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>mayi — in Me, unto Me</li>
                  <li>sarvāṇi karmāṇi — all actions</li>
                  <li>sannyasya — handing over, surrendering</li>
                  <li>adhyātma-cetasā — with a mind grounded in Self-knowledge</li>
                  <li>nirāśīḥ — free from expectation</li>
                  <li>nirmamaḥ — free from “mine-ness”</li>
                  <li>vigata-jvaraḥ — free from inner fever, anxiety, agitation</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now deepens the spirit of offering.

                  It is not only:
                  “Let me do this action well.”

                  It becomes:
                  “Let me hand over this entire action.”

                  Along with the action,
                  we also hand over the burden.

                  Expectation drops.
                  Possessiveness drops.
                  Inner fever drops.

                  The work may remain difficult,
                  but the heart becomes lighter.

                  This is the beginning of freedom in action.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering means I do not carry everything psychologically.

                  I still act fully.
                  I still do my duty.

                  But I stop acting with the pressure of:
                  “This is all on me.”

                  The action is offered.
                  The ego relaxes.
                  The mind becomes lighter.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What action in my life currently feels heavy?

                  Can I try doing it today
                  without the burden of possessiveness and anxiety?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-2-3-30" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-2-3-30" />
        </aside>
      </div>
    </div>
  );
}
