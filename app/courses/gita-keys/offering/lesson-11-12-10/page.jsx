import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-11-12-10" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Offering — Lesson 11
              </h1>

              <h2 className="text-lg text-gray-600">
                Start with action if the mind is not steady (Gita 12.10)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  अभ्यासेऽप्यसमर्थोऽसि मत्कर्मपरमो भव ।<br />
                  मदर्थमपि कर्माणि कुर्वन्सिद्धिमवाप्स्यसि ॥ १२.१० ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  abhyāse&apos;py asamartho&apos;si mat-karma-paramo bhava <br />
                  mad-artham api karmāṇi kurvan siddhim avāpsyasi
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  If you are not able to maintain steady practice,
                  then act with the attitude of offering.

                  By doing actions with this attitude,
                  you will gradually grow and gain clarity.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>abhyāsa — practice</li>
                  <li>asamarthaḥ — unable</li>
                  <li>mat-karma — action as offering</li>
                  <li>siddhi — growth, maturity</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna makes the teaching very practical.

                  Not everyone can sit in deep practice.

                  Not everyone can maintain steady focus.

                  That is okay.

                  Start where you are.

                  Use action itself as the path.

                  When action is done as offering,
                  it becomes a means of growth.

                  Slowly,
                  the mind becomes ready for deeper discipline.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Offering</h3>

                <p className="text-gray-700">
                  Offering is accessible to everyone.

                  Even without advanced practice,
                  one can begin.

                  Everyday actions become the field of growth.

                  This makes the path simple and inclusive.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Where do I feel I am “not ready”?

                  Can I begin from action itself,
                  instead of waiting to feel perfect?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="offering" lessonSlug="lesson-11-12-10" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="offering" currentLessonSlug="lesson-11-12-10" />
        </aside>
      </div>
    </div>
  );
}
