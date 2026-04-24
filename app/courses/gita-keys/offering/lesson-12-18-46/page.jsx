import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-12-18-46" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 12
              </h1>

              <h2 className="text-lg text-gray-600">
                Work itself becomes worship (Gita 18.46)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम् ।<br />
                  स्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः ॥ १८.४६ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yataḥ pravṛttir bhūtānāṁ yena sarvam idaṁ tatam <br />
                  sva-karmaṇā tam abhyarcya siddhiṁ vindati mānavaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  From which all beings arise,
                  and which pervades everything—

                  by worshipping through one’s own actions,
                  a person attains growth and maturity.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>sva-karma — one’s own actions</li>
                  <li>abhyarcya — worship, offering</li>
                  <li>siddhi — growth, maturity</li>
                  <li>tatam — all-pervading</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna brings offering into daily life.

                  Work itself becomes worship.

                  No need to separate
                  “spiritual practice” and “daily work.”

                  When action is done with the right attitude,
                  it becomes sacred.

                  Whatever role you have,
                  whatever work you do,
                  it can become a means of growth.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering removes the gap
                  between life and practice.

                  Every action becomes meaningful.

                  Nothing is ordinary anymore.

                  This transforms how we live and work.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Can I see my daily work as worship?

                  What changes when I bring this attitude
                  into what I already do?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-12-18-46" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-12-18-46" />
        </aside>
      </div>
    </div>
  );
}
