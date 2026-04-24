import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-15-18-65" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 15
              </h1>

              <h2 className="text-lg text-gray-600">
                A life centered in offering (Gita 18.65)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु ।<br />
                  मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे ॥ १८.६५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  man-manā bhava mad-bhakto mad-yājī māṁ namaskuru <br />
                  mām evaiṣyasi satyaṁ te pratijāne priyo&apos;si me
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  Keep your mind aligned,
                  live with commitment,
                  act with the spirit of offering,
                  and remain connected.

                  In doing so,
                  you move steadily toward clarity and freedom.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>man-manā — mind aligned</li>
                  <li>mad-bhaktaḥ — committed, devoted</li>
                  <li>mad-yājī — acting as offering</li>
                  <li>namaskuru — humility, surrender</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna repeats the essence.

                  Offering is not one action.

                  It is a way of living.

                  The mind is aligned,
                  action is offering,
                  and the attitude is humble.

                  When these come together,
                  life becomes simple and steady.

                  There is no inner conflict.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering becomes complete
                  when the mind, action, and attitude are aligned.

                  This creates continuity.

                  Not occasional practice,
                  but a steady way of living.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Is my offering occasional,
                  or continuous?

                  What would it mean to live this way
                  throughout the day?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-15-18-65" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-15-18-65" />
        </aside>
      </div>
    </div>
  );
}
