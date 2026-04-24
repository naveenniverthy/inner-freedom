import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-10-12-6-7" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 10
              </h1>

              <h2 className="text-lg text-gray-600">
                Offering leads to support from the total (Gita 12.6–7)
              </h2>

              {/* Verses */}
              <section>
                <h3 className="font-medium text-lg">Verses</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  ये तु सर्वाणि कर्माणि मयि संन्यस्य मत्पराः ।<br />
                  अनन्येनैव योगेन मां ध्यायन्त उपासते ॥ १२.६ ॥<br /><br />

                  तेषामहं समुद्धर्ता मृत्युंसंसारसागरात् ।<br />
                  भवामि नचिरात्पार्थ मय्यावेशितचेतसाम् ॥ १२.७ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  ye tu sarvāṇi karmāṇi mayi sannyasya mat-parāḥ <br />
                  ananyenaiva yogena māṁ dhyāyanta upāsate <br /><br />

                  teṣām ahaṁ samuddhartā mṛtyu-saṁsāra-sāgarāt <br />
                  bhavāmi na cirāt pārtha mayy āveśita-cetasām
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Those who offer all actions,
                  stay aligned,
                  and remain committed—

                  for them,
                  the total order supports and lifts them.

                  They are not left alone
                  in the challenges of life.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>sannyasya — offering, handing over</li>
                  <li>mat-parāḥ — aligned with the highest</li>
                  <li>ananya — without distraction</li>
                  <li>samuddhartā — one who lifts up, supports</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna gives a reassuring insight.

                  When a person lives with the attitude of offering,
                  they are not isolated.

                  Life itself begins to support them.

                  This is not a promise of easy outcomes.

                  It is a shift in relationship.

                  Instead of feeling:
                  “I am alone handling everything,”

                  there is a recognition:
                  “I am part of a larger order.”
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering creates trust.

                  Trust in the order of life.

                  This reduces anxiety and fear.

                  The mind becomes lighter,
                  and more resilient in challenges.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I feel I am carrying everything alone?

                  What changes when I see myself
                  as supported by a larger order?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-10-12-6-7" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-10-12-6-7" />
        </aside>
      </div>
    </div>
  );
}
