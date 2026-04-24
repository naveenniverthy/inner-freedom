import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-14-18-57" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 14
              </h1>

              <h2 className="text-lg text-gray-600">
                Mentally offering all actions (Gita 18.57)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  चेतसा सर्वकर्माणि मयि संन्यस्य मत्परः ।<br />
                  बुद्धियोगमुपाश्रित्य मच्चित्तः सततं भव ॥ १८.५७ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  cetasā sarva-karmāṇi mayi sannyasya mat-paraḥ <br />
                  buddhi-yogam upāśritya mac-cittaḥ satataṁ bhava
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  With the mind,
                  offer all actions to the higher,
                  stay aligned,
                  and act with clear understanding.

                  Keep the mind steadily connected.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>cetasā — with the mind</li>
                  <li>sannyasya — offering, handing over</li>
                  <li>buddhi-yoga — clear understanding</li>
                  <li>mat-paraḥ — aligned with the highest</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now refines offering further.

                  It is not only about what we do.

                  It is about how we hold it mentally.

                  Even before action begins,
                  the attitude is set.

                  “This is not mine.
                  This is offered.”

                  With this clarity,
                  the mind remains light throughout the action.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering begins in the mind.

                  If the mind is aligned,
                  action becomes naturally aligned.

                  This ensures that offering
                  is continuous,
                  not occasional.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Before I begin an action,
                  what is my mental attitude?

                  Can I consciously offer it
                  before I start?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-14-18-57" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-14-18-57" />
        </aside>
      </div>
    </div>
  );
}
