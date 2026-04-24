import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-1-2-14" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 1
              </h1>

              <h2 className="text-lg text-gray-600">
                Learn to endure life’s changes (Gita 2.14)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः ।<br />
                  आगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत ॥ २.१४ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  mātrā-sparśās tu kaunteya śītoṣṇa-sukha-duḥkha-dāḥ <br />
                  āgamāpāyino&apos;nityās tāṁs titikṣasva bhārata
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Contact with the world gives heat and cold,
                  pleasure and pain.

                  These experiences come and go.
                  They are temporary.

                  Therefore, learn to endure them with steadiness.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>mātrā-sparśāḥ — contact of senses with objects</li>
                  <li>sukha-duḥkha — pleasure and pain</li>
                  <li>āgama-apāyinaḥ — coming and going</li>
                  <li>anityāḥ — temporary</li>
                  <li>titikṣasva — endure, forbear</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna begins the teaching of acceptance with a simple fact.

                  Life brings changing experiences.

                  Some are pleasant.
                  Some are unpleasant.

                  None of them stay permanently.

                  When we forget this,
                  we overreact to both pleasure and pain.

                  Acceptance begins with recognizing:
                  “This too is temporary.”

                  This recognition creates inner strength.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance does not mean passivity.

                  It means receiving life’s changing conditions
                  without losing inner balance.

                  When I see experiences as temporary,
                  I do not get overwhelmed by them.

                  This is the beginning of prasāda buddhi.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  What current discomfort am I treating as permanent?

                  Can I remember:
                  this too comes and goes?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-1-2-14" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-1-2-14" />
        </aside>
      </div>
    </div>
  );
}
