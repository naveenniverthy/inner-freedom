import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-5-2-57" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 5
              </h1>

              <h2 className="text-lg text-gray-600">
                Not getting attached to outcomes (Gita 2.57)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम् ।<br />
                  नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता ॥ २.५७ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yaḥ sarvatrānabhisnehas tat tat prāpya śubhāśubham <br />
                  nābhinandati na dveṣṭi tasya prajñā pratiṣṭhitā
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who is not overly attached anywhere,
                  and who neither rejoices excessively in good results
                  nor hates unfavorable results,
                  is steady in understanding.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>anabhisneha — absence of excessive attachment</li>
                  <li>śubha-aśubha — favorable and unfavorable</li>
                  <li>na abhinandati — does not over-celebrate</li>
                  <li>na dveṣṭi — does not hate or resist</li>
                  <li>prajñā pratiṣṭhitā — steady understanding</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now refines acceptance further.

                  The issue is not experiencing results.

                  The issue is overreaction.

                  When something good happens,
                  we get overly excited.

                  When something unfavorable happens,
                  we resist or reject it.

                  This constant swing disturbs the mind.

                  A steady person experiences everything,
                  but remains balanced.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance does not remove experience.

                  It removes inner disturbance.

                  Results come and go,
                  but the mind remains stable.

                  This stability is maturity.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I react strongly to good and bad outcomes?

                  What would it feel like
                  to stay inwardly steady in both?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-5-2-57" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-5-2-57" />
        </aside>
      </div>
    </div>
  );
}
