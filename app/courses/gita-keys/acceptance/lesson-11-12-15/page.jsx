import GitaLessonNav from "../../GitaLessonNav";
import GitaSectionToc from "../../GitaSectionToc";

export default function Lesson() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-8 text-stone-800 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="min-w-0 space-y-6">
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-11-12-15" />
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-stone-200">
            <main className="max-w-3xl mx-auto px-4 py-10 space-y-8">

              <h1 className="text-2xl font-semibold">
                Acceptance — Lesson 11
              </h1>

              <h2 className="text-lg text-gray-600">
                Neither disturbing nor disturbed (Gita 12.15)
              </h2>

              {/* Verse */}
              <section>
                <h3 className="font-medium text-lg">Verse</h3>

                <div className="bg-gray-50 p-4 rounded-xl text-lg leading-relaxed">
                  यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः ।<br />
                  हर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः ॥ १२.१५ ॥
                </div>
              </section>

              {/* Transliteration */}
              <section>
                <h3 className="font-medium text-lg">Transliteration</h3>

                <p className="text-gray-700">
                  yasmān nodvijate loko lokān nodvijate ca yaḥ <br />
                  harṣāmarṣa-bhaya-udvegair mukto yaḥ sa ca me priyaḥ
                </p>
              </section>

              {/* Meaning */}
              <section>
                <h3 className="font-medium text-lg">Meaning</h3>

                <p className="text-gray-700">
                  One who does not disturb others,
                  and is not disturbed by others,

                  who is free from excitement, irritation, fear, and agitation—
                  such a person lives in peace.
                </p>
              </section>

              {/* Key Words */}
              <section>
                <h3 className="font-medium text-lg">Key Words</h3>

                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>udvijate — disturb, agitate</li>
                  <li>harṣa — excessive excitement</li>
                  <li>amarṣa — irritation, intolerance</li>
                  <li>bhaya — fear</li>
                  <li>udvega — anxiety, agitation</li>
                </ul>
              </section>

              {/* Teaching */}
              <section>
                <h3 className="font-medium text-lg">Teaching</h3>

                <p className="text-gray-700">
                  Krishna now shows the social impact of acceptance.

                  A calm person does not create disturbance.

                  At the same time,
                  they are not easily disturbed by others.

                  This balance is rare.

                  Most disturbance in life
                  comes from reaction.

                  When reactions reduce,
                  both inner and outer peace increase.
                </p>
              </section>

              {/* Connection */}
              <section>
                <h3 className="font-medium text-lg">Connection to Acceptance</h3>

                <p className="text-gray-700">
                  Acceptance reduces reactivity.

                  Without strong reactions,
                  relationships become smoother.

                  Life becomes less turbulent.
                </p>
              </section>

              {/* Reflection */}
              <section>
                <h3 className="font-medium text-lg">Reflection</h3>

                <p className="text-gray-700">
                  Do I get easily disturbed by others?

                  Do I unknowingly disturb others?

                  What changes when I remain steady?
                </p>
              </section>

            </main>
          </div>
          <GitaLessonNav sectionKey="acceptance" lessonSlug="lesson-11-12-15" />
        </div>
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <GitaSectionToc sectionKey="acceptance" currentLessonSlug="lesson-11-12-15" />
        </aside>
      </div>
    </div>
  );
}
