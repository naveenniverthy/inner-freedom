import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-5-5-10" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 5
              </h1>

              <h2 className="text-lg text-gray-600">
                Acting without being affected (Gita 5.10)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  ब्रह्मण्याधाय कर्माणि सङ्गं त्यक्त्वा करोति यः ।<br />
                  लिप्यते न स पापेन पद्मपत्रमिवाम्भसा ॥ ५.१० ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  brahmaṇy ādhāya karmāṇi saṅgaṁ tyaktvā karoti yaḥ <br />
                  lipyate na sa pāpena padma-patram ivāmbhasā
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who performs action,
                  offering it to the total,
                  and giving up attachment,
                  is not affected by the results.

                  Like a lotus leaf untouched by water,
                  such a person remains unaffected.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>brahmaṇi ādhāya — placing in the total, offering</li>
                  <li>saṅgaṁ tyaktvā — giving up attachment</li>
                  <li>lipyate — gets affected</li>
                  <li>padma-patram — lotus leaf</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now gives a beautiful image.

                  A lotus leaf remains in water,
                  but water does not stick to it.

                  Similarly,
                  a person can remain fully engaged in action,
                  yet remain inwardly unaffected.

                  The difference is attitude.

                  When action is done with attachment,
                  it leaves a mark.

                  When done as offering,
                  it does not bind.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering creates inner freedom.

                  Actions continue,
                  but they do not disturb the mind.

                  Results come and go,
                  but they do not define the person.

                  This is the practical benefit of offering —
                  freedom in the middle of action.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Which results affect me the most?

                  Can I try acting today
                  without letting the result disturb me?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-5-5-10" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-5-5-10" />
        </aside>
      </div>
    </div>
  );
}
