import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-13-18-54" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 13
              </h1>

              <h2 className="text-lg text-gray-600">
                Inner peace and clarity (Gita 18.54)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  ब्रह्मभूतः प्रसन्नात्मा न शोचति न काङ्क्षति ।<br />
                  समः सर्वेषु भूतेषु मद्भक्तिं लभते पराम् ॥ १८.५४ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  brahma-bhūtaḥ prasannātmā na śocati na kāṅkṣati <br />
                  samaḥ sarveṣu bhūteṣu mad-bhaktiṁ labhate parām
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who is clear and settled,
                  neither grieves nor craves.

                  Being balanced toward all,
                  such a person lives in deep peace and clarity.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>prasanna-ātmā — calm and clear mind</li>
                  <li>na śocati — does not grieve</li>
                  <li>na kāṅkṣati — does not crave</li>
                  <li>samaḥ — equal, balanced</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the peak of acceptance.

                  The mind becomes quiet.

                  There is no constant regret about the past,
                  and no restless craving for the future.

                  This creates a deep sense of completeness.

                  The person is not dependent
                  on external conditions for peace.

                  This is inner freedom.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance removes both:
                  regret and craving.

                  When these reduce,
                  the mind becomes naturally peaceful.

                  This prepares it for clarity.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I spend more time in regret or in craving?

                  What happens when I stay with the present,
                  as it is?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-13-18-54" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-13-18-54" />
        </aside>
      </div>
    </div>
  );
}
